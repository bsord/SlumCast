import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { Config } from './ConfigComponent'

import { ScoreboardComponent } from './ScoreboardComponent';
import { Status } from './StatusComponent.jsx'
import { ActivePlayerPreview } from './ActivePlayerPreviewComponent'
import { OverlayContainer } from '../../../common/containers/OverlayContainer'


export const Tabs = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs justify className='mb-3' >
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Active
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            ScoreBug Preview
          </MDBTabsLink>
        </MDBTabsItem>
        {/*<MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Config
          </MDBTabsLink>
        </MDBTabsItem>*/}
      </MDBTabs>

      <MDBTabsContent className=''>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol lg='2' className='mb-3'>
                < Status />
              </MDBCol>
              <MDBCol lg='7' className='mb-3'>
                < ScoreboardComponent />
              </MDBCol>
              <MDBCol lg='3' className='mb-3'>
                < ActivePlayerPreview />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBTabsPane>
        <MDBTabsPane  show={justifyActive === 'tab2'}>
          < OverlayContainer/>
        </MDBTabsPane>
        {/*<MDBTabsPane show={justifyActive === 'tab3'}><Config /></MDBTabsPane>*/}
      </MDBTabsContent>
    </>
  );
}