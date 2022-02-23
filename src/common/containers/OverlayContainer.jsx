import React from "react"
import { ScoreBugComponent } from '../components/ScoreBugComponent'
import { ActivePlayerComponent } from '../components/ActivePlayerComponent'
import { ReplayComponent } from '../components/ReplayComponent'

export const OverlayContainer = () => {
    
    return (
    <div style={{}}>
        <div className="pt-0 p-4">
        < ScoreBugComponent />
        < ActivePlayerComponent />
        </div>
        <ReplayComponent/>
    </div>
    )
}