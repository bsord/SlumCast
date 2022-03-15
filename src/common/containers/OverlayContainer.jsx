import React from "react"
import { ScoreBugComponent } from '../components/ScoreBugComponent'
import { EventsComponent } from '../components/EventsComponent'
import { ScoreboardComponent } from "../components/ScoreboardComponent2"
import { ScoreboardComponent3 } from "../components/ScoreboardComponent3"
import { ActivePlayerComponent } from '../components/ActivePlayerComponent'
import { ReplayComponent } from '../components/ReplayComponent'

export const OverlayContainer = () => {
    
    return (
    <div style={{}}>
        
        <ScoreBugComponent />
        <EventsComponent/>
        <ActivePlayerComponent />
        <ReplayComponent/>
        <ScoreboardComponent />
        <ScoreboardComponent3 />
    </div>
    )
}