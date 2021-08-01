import React, { Component } from "react";
import { io } from "socket.io-client";

export class SocketManager extends React.Component {
    constructor(props) {
      super(props);
      this.handleGameData = handleGameData.bind(this);
      this.handleGameState = handleGameState.bind(this);
      this.handlePlayers = handlePlayers.bind(this);
      this.handleValueChanges = handleValueChanges.bind(this);
      this.state = { socket: null };
    }
    socket = null;
    // initialise socket connection
    socketInit() {
      // instantiate socketIOClient connection to localhost
      this.socket = io('ws://localhost:49122', {
        withCredentials: true,
      });
      this.socket.on('connect', () => {
        // emit join message to socket with ID
        this.socket.emit('join', 'REACTLOCAL');
        /* emit watchGame message to socket, required for backend server to
        create and destroy stream on per client ID basis */
        this.socket.emit('watchGame');
      });
    }
    // run lifecycle method as async to allow initial get request
    async componentDidMount() {
      this.socket ?? this.socketInit();
      this.socket.on('disconnect', (message) => {
        console.warn(`SOCKET DISCONNECTED! ${message}`);
      });
      // handle payload data type, currently used for prizepool, etc.
      this.socket.on('payload', async (payload) => { handlePayload(payload, this.props) }); //prettier-ignore
      // socket message 'update' contains every update emitted from SOS, .data and .event to access properties
      this.socket.on('update', (update) => {
        // event type, 'game:update_state' contains main gamedata object
        if (update.event === 'game:update_state') {
          // send gamedata object to Redux
          this.handleGameData(update);
          // run handlePlayers function to update players object in redux store
          this.handlePlayers({ ...update.data.players });
        }
    })
}
}