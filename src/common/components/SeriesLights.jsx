import {
    MDBCol,
    MDBIcon,
    MDBBadge
} from 'mdbreact';
import { useSelector } from 'react-redux'
import Color from 'color';





export let Team0lights = () => {

    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))


    const series = useSelector(state => state.gamedata.series)
    let lightsActive0 = series.lights ? '' : 'd-none'
    const all = series.type == 3 || series.type == 5 || series.type == 7
    const fiveSeven = series.type == 5 || series.type == 7
    const seven = series.type == 7

    let teamData
    let teamColors = {
        team0: { primary: 'rgba(0,212,255,1)', secondary: 'rgba(9,9,121,1)' },
        team1: { primary: 'Orange', secondary: 'DarkOrange' },
    }
    if (gaming != undefined) {
        teamData = gaming.game.teams
        
        const scoreColor = (e, b) => {
          let color = Color('#' + b)
    
          return e === 'E5E5E5' ? color.darken(0.5).hex() : e
        }
    
        teamColors = {
          team0: { primary: '#' + teamData[0].color_primary, secondary: scoreColor(teamData[0].color_secondary, teamData[0].color_primary) },
          team1: { primary: '#' + teamData[1].color_primary, secondary: scoreColor(teamData[1].color_secondary, teamData[1].color_primary) },
        }
    
      }

    const light = teamColors.team0.primary
    const dark = `rgba(000,000,000,0.5)`

    //console.log(series)
    let team0g1 = series.games.game1.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}}>1</MDBBadge> : <MDBBadge className="text-dark clipped-left-light" style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}}>1</MDBBadge>
    let team0g2 = series.games.game2.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}}>2</MDBBadge> : <MDBBadge className="text-dark clipped-left-light" style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}}>2</MDBBadge>
    let team0g3 = series.games.game3.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}}>3</MDBBadge> : <MDBBadge className="text-dark clipped-left-light" style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}}>3</MDBBadge>
    let team0g4 = series.games.game4.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'clipped-left-light' : 'd-none clipped-left-light'}>4</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'text-dark clipped-left-light' : 'd-none clipped-left-light'}>4</MDBBadge>
    let team0g5 = series.games.game5.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'clipped-left-light' : 'd-none clipped-left-light'}>5</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'text-dark clipped-left-light' : 'd-none clipped-left-light'}>5</MDBBadge>
    let team0g6 = series.games.game6.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'clipped-left-light' : 'd-none clipped-left-light'}>6</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'text-dark clipped-left-light' : 'd-none clipped-left-light'}>6</MDBBadge>
    let team0g7 = series.games.game7.team0 == 0 ? <MDBBadge className='clipped-left-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'clipped-left-light' : 'd-none clipped-left-light'}>7</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'text-dark clipped-left-light' : 'd-none clipped-left-light'}>7</MDBBadge>

    return (
        <MDBCol size='12' className={lightsActive0}>
            <div className="d-flex justify-content-evenly" style={{/* boxShadow: `0px 10px 15px -6px #000000` */}}>
                {team0g1}
                {team0g2}
                {team0g3}
                {team0g4}
                {team0g5}
                {team0g6}
                {team0g7}
            </div>
        </MDBCol>)
}

export let Team1lights = () => {

    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))

    const series = useSelector(state => state.gamedata.series)
    let lightsActive1 = series.lights ? '' : 'd-none'

    const all = series.type == 3 || series.type == 5 || series.type == 7
    const fiveSeven = series.type == 5 || series.type == 7
    const seven = series.type == 7

    let teamData
    let teamColors = {
        team0: { primary: 'rgba(0,212,255,1)', secondary: 'rgba(9,9,121,1)' },
        team1: { primary: 'Orange', secondary: 'DarkOrange' },
    }
    if (gaming != undefined) {
        teamData = gaming.game.teams
        
        const scoreColor = (e, b) => {
          let color = Color('#' + b)
    
          return e === 'E5E5E5' ? color.darken(0.5).hex() : e
        }
    
        teamColors = {
          team0: { primary: '#' + teamData[0].color_primary, secondary: scoreColor(teamData[0].color_secondary, teamData[0].color_primary) },
          team1: { primary: '#' + teamData[1].color_primary, secondary: scoreColor(teamData[1].color_secondary, teamData[1].color_primary) },
        }
    
      }

    const light = teamColors.team1.primary
    const dark = `rgba(000,000,000,0.5)`

    let team1g1 = series.games.game1.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}}>1</MDBBadge> : <MDBBadge className="text-dark clipped-right-light" style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}}>1</MDBBadge>
    let team1g2 = series.games.game2.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}}>2</MDBBadge> : <MDBBadge className="text-dark clipped-right-light" style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}}>2</MDBBadge>
    let team1g3 = series.games.game3.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}}>3</MDBBadge> : <MDBBadge className="text-dark clipped-right-light" style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}}>3</MDBBadge>
    let team1g4 = series.games.game4.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'clipped-right-light' : 'd-none clipped-right-light'}>4</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'text-dark clipped-right-light' : 'd-none clipped-right-light'}>4</MDBBadge>
    let team1g5 = series.games.game5.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'clipped-right-light' : 'd-none clipped-right-light'}>5</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={fiveSeven ? 'text-dark clipped-right-light' : 'd-none clipped-right-light'}>5</MDBBadge>
    let team1g6 = series.games.game6.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'clipped-right-light' : 'd-none clipped-right-light'}>6</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'text-dark clipped-right-light' : 'd-none clipped-right-light'}>6</MDBBadge>
    let team1g7 = series.games.game7.team1 == 0 ? <MDBBadge className='clipped-right-light' style={{backgroundColor: dark, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'clipped-right-light' : 'd-none clipped-right-light'}>7</MDBBadge> : <MDBBadge style={{backgroundColor: light, width:'50%', padding:0, fontSize:'1vw'}} className={seven ? 'text-dark clipped-right-light' : 'd-none clipped-right-light'}>7</MDBBadge>
    return (
        <MDBCol size='12' className={lightsActive1}>
            <div className="d-flex justify-content-evenly" style={{/* boxShadow: `0px -10px 15px -6px #000000` */}}>
                {team1g1}
                {team1g2}
                {team1g3}
                {team1g4}
                {team1g5}
                {team1g6}
                {team1g7}
            </div>
        </MDBCol>)
}