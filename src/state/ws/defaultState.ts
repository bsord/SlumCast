export interface MessageState {
    data: string | object;
    origin: string;
    timestamp: string;
    type: 'OUTGOING' | 'INCOMING';
  }
  
  export interface State {
    connected: boolean;
    messages: MessageState[];
    url?: string;
    data: {}
    gamestate: {}
  }
  
  const defaultState: State = {
    connected: false,
    messages: [],
    data: {},
    gamestate: {},
    url: undefined,
  };
  
export default defaultState;