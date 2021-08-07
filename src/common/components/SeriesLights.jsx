import {
    MDBCol,
    MDBIcon,
    MDBBadge
} from 'mdbreact';
import { useSelector } from 'react-redux'






export let Team0lights = () => {

    const selectGameState = state => state.wsReducer['game:update_state']
    const gaming = useSelector(state => selectGameState(state))


    const series = useSelector(state => state.gamedata.series)
    let lightsActive0 = series.lights ? '' : 'd-none'
    const all = series.type == 3 || series.type == 5 || series.type == 7
    const fiveSeven = series.type == 5 || series.type == 7
    const seven = series.type == 7

    const light = `rgba(255,255,255,0.5)`
    const dark = `rgba(000,000,000,0.5)`

    let team0g1 = series.games.game1.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}}>1</MDBBadge> : <MDBBadge className="text-dark" style={{backgroundColor: light}}>1</MDBBadge>
    let team0g2 = series.games.game2.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}}>2</MDBBadge> : <MDBBadge className="text-dark" style={{backgroundColor: light}}>2</MDBBadge>
    let team0g3 = series.games.game3.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}}>3</MDBBadge> : <MDBBadge className="text-dark" style={{backgroundColor: light}}>3</MDBBadge>
    let team0g4 = series.games.game4.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={fiveSeven ? '' : 'd-none'}>4</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={fiveSeven ? 'text-dark' : 'd-none'}>4</MDBBadge>
    let team0g5 = series.games.game5.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={fiveSeven ? '' : 'd-none'}>5</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={fiveSeven ? 'text-dark' : 'd-none'}>5</MDBBadge>
    let team0g6 = series.games.game6.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={seven ? '' : 'd-none'}>6</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={seven ? 'text-dark' : 'd-none'}>6</MDBBadge>
    let team0g7 = series.games.game7.team0 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={seven ? '' : 'd-none'}>7</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={seven ? 'text-dark' : 'd-none'}>7</MDBBadge>

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

    const light = `rgba(255,255,255,0.5)`
    const dark = `rgba(000,000,000,0.5)`

    let team1g1 = series.games.game1.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}}>1</MDBBadge> : <MDBBadge className="text-dark" style={{backgroundColor: light}}>1</MDBBadge>
    let team1g2 = series.games.game2.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}}>2</MDBBadge> : <MDBBadge className="text-dark" style={{backgroundColor: light}}>2</MDBBadge>
    let team1g3 = series.games.game3.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}}>3</MDBBadge> : <MDBBadge className="text-dark" style={{backgroundColor: light}}>3</MDBBadge>
    let team1g4 = series.games.game4.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={fiveSeven ? '' : 'd-none'}>4</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={fiveSeven ? 'text-dark' : 'd-none'}>4</MDBBadge>
    let team1g5 = series.games.game5.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={fiveSeven ? '' : 'd-none'}>5</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={fiveSeven ? 'text-dark' : 'd-none'}>5</MDBBadge>
    let team1g6 = series.games.game6.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={seven ? '' : 'd-none'}>6</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={seven ? 'text-dark' : 'd-none'}>6</MDBBadge>
    let team1g7 = series.games.game7.team1 == 0 ? <MDBBadge style={{backgroundColor: dark}} className={seven ? '' : 'd-none'}>7</MDBBadge> : <MDBBadge style={{backgroundColor: light}} className={seven ? 'text-dark' : 'd-none'}>7</MDBBadge>
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