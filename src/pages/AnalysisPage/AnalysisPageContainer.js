import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { MDBContainer } from "mdb-react-ui-kit"
import { Navbar } from '../../common/components/NavbarComponent'
import { Table } from '../../state/gamedata/gamedataActions'
import { Tabs } from './components/TabsComponent'




class Analysis extends React.Component {

    render() {

        return (
            <Router>
                <Navbar />
                <Tabs />
            </Router>
        )
    }
}

export default Analysis;