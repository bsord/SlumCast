import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { Table, Config } from '../../../state/ballchasing/ballchasingActions'



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
        <MDBTabs justify className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Tables
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Charts
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
              Config
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
  
        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === 'tab1'}>
            <MDBContainer>
              <Table />
            </MDBContainer>
            </MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab2'}>Tab 2 content</MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab3'}><MDBContainer><Config /></MDBContainer></MDBTabsPane>
        </MDBTabsContent>
      </>
    );
}