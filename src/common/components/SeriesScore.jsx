import { useSelector } from "react-redux";



export const SeriesScore = () => {

    const series = useSelector(state => state.gamedata.series)

    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))

    let team0name = _.isUndefined(gaming) ? 'Team 0': gaming.game.teams[0].name
    let team1name = _.isUndefined(gaming) ? 'Team 1': gaming.game.teams[1].name

    let seriesText = ''
    let bestOf = 'BO' + series.type + ': '
    let score = {
        team0: {
            name: team0name,
            score: series.score.team0
        }, 
        team1: {
            name: team1name,
            score: series.score.team1
        }
    }
    
    const scoring = (e) => {
        
        if( e.team0.score > e.team1.score ) { 
           return e.team0.name + ' leads ' + e.team0.score + '-' + e.team1.score
        }
        else if( e.team0.score < e.team1.score ) {
            return e.team1.name + ' leads ' + e.team1.score + '-' + e.team0.score
        }
        else if ( e.team0.score == e.team1.score ) {
            return 'Series tied ' + e.team0.score + '-' + e.team1.score 
        }
        else {
            return 'No Score'
        }
    }
    
    if (series.active == true) {
        
        seriesText = bestOf + scoring(score)
        
    } else {
        seriesText = ''
    }
    
    console.log(seriesText)
    return (
        <>
        {seriesText}
        </>
    )

}