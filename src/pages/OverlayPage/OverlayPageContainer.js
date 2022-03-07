import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "@giantmachines/redux-websocket"
import store from "../../state/store"
import { ScoreBugComponent } from '../../common/components/ScoreBugComponent'
import { ActivePlayerComponent } from '../../common/components/ActivePlayerComponent'
import { OverlayContainer } from '../../common/containers/OverlayContainer'


class OverlayPage extends React.Component {

    render() {
        store.dispatch(connect('ws://localhost:49122'))

        return (
            <Router >
                < OverlayContainer />
            </Router>
        )
    }
}

export default OverlayPage;