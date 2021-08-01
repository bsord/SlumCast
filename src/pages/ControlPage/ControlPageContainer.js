import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from '../../common/components/NavbarComponent'
import { Tabs } from './components/TabsComponent'
import { connect } from "@giantmachines/redux-websocket"
import store from "../../state/store"




class ControlPage extends React.Component {
    
    render() {
        store.dispatch(connect('ws://localhost:49122'))
        
        return (
            <Router>
                <Navbar />
                <Tabs />
            </Router>
        )
    }
}

export default ControlPage;