import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from '../../common/components/NavbarComponent'
import { Tabs } from './components/TabsComponent'




class ControlPage extends React.Component {

    render() {

        return (
            <Router>
                <Navbar />
                <Tabs />
                
                




            </Router>
        )
    }
}

export default ControlPage;