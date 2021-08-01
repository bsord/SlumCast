
import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBCol, MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export const ActivePlayerPreview = () => {

  <MDBCol size="3">
    <MDBCard>
      <MDBCardHeader color="elegant-color lighten-1">Active Player Panel</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.name !== "undefined" ? this.state.activePlayerData.name : 'No Active Player :('}</MDBCardTitle>
        <MDBCardText>
          <MDBContainer>
            <MDBListGroup style={{ width: "18rem" }}>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Score:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.score !== "undefined" ? this.state.activePlayerData.score : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Goals:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.goals !== "undefined" ? this.state.activePlayerData.goals : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Assists:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.assists !== "undefined" ? this.state.activePlayerData.assists : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Saves:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.saves !== "undefined" ? this.state.activePlayerData.saves : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Shots:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.shots !== "undefined" ? this.state.activePlayerData.shots : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Boost:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.boost !== "undefined" ? this.state.activePlayerData.boost : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Speed:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.speed !== "undefined" ? this.state.activePlayerData.speed : '0'}</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">Teamname:<MDBBadge color={activeColor}
                pill>{typeof this.state.activePlayerData !== "undefined" && typeof this.state.activePlayerData.team !== "undefined" ? this.state.teamData[this.state.activePlayerData.team].name : 'No active player'}</MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

}