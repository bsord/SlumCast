
import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBCol, MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { connect, disconnect } from '@giantmachines/redux-websocket';
import { useSelector } from 'react-redux'
import store from "../../../state/store";
import { createSelector } from 'reselect'


export const ActivePlayerPreview = () => {
  const selectGameState = state => state.wsReducer['game:update_state']

  const gaming = useSelector(state => selectGameState(state))
  //console.log(gaming.game.hasTarget)
  

  let hasTarget = false
  let activeTarget
  let playerList
  let activePlayerData
  let activeColor = "dark"
  let teamData
  
  if (gaming != undefined) {
    activeTarget = gaming.game.target
    playerList = gaming.players
    activePlayerData = _.get(playerList, activeTarget)
    hasTarget = gaming.game.hasTarget
    teamData = gaming.game.teams
    //console.log(activePlayerData.boost)
  }
  
  return (
    <MDBCard>
      <MDBCardHeader color="elegant-color lighten-1">Active Player Panel</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" ? activePlayerData.name : 'No Active Player :('}</MDBCardTitle>
        <MDBCardText>
          <MDBContainer>
            <MDBListGroup >
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Score:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.score !== "undefined" ? activePlayerData.score : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Goals:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.goals !== "undefined" ? activePlayerData.goals : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Assists:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.assists !== "undefined" ? activePlayerData.assists : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Saves:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.saves !== "undefined" ? activePlayerData.saves : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Shots:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Boost:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Speed:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.speed !== "undefined" ? activePlayerData.speed : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Teamname:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.team !== "undefined" ? teamData[activePlayerData.team].name : 'No active player'}</MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  )
}


/* 
<MDBCard>
      <MDBCardHeader color="elegant-color lighten-1">Active Player Panel</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{typeof activePlayerData !== "undefined" && typeof activePlayerData.name !== "undefined" ? activePlayerData.name : 'No Active Player :('}</MDBCardTitle>
        <MDBCardText>
          <MDBContainer>
            <MDBListGroup style={{ width: "18rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Score:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.score !== "undefined" ? activePlayerData.score : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Goals:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.goals !== "undefined" ? activePlayerData.goals : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Assists:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.assists !== "undefined" ? activePlayerData.assists : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Saves:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.saves !== "undefined" ? activePlayerData.saves : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Shots:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.shots !== "undefined" ? activePlayerData.shots : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Boost:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.boost !== "undefined" ? activePlayerData.boost : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Speed:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.speed !== "undefined" ? activePlayerData.speed : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Teamname:<MDBBadge color={activeColor}
                pill>{typeof activePlayerData !== "undefined" && typeof activePlayerData.team !== "undefined" ? teamData[activePlayerData.team].name : 'No active player'}</MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    */