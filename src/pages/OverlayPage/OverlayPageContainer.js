import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "@giantmachines/redux-websocket"
import store from "../../state/store"
import { ScoreBugComponent } from '../../common/components/ScoreBugComponent'
import { ActivePlayerComponent } from '../../common/components/ActivePlayerComponent'



class OverlayPage extends React.Component {

    render() {
        store.dispatch(connect('ws://localhost:49122'))

        return (
            <Router >
                <div className="p-4">
                    < ScoreBugComponent />
                    < ActivePlayerComponent />
                </div>
            </Router>
        )
    }
}

export default OverlayPage;