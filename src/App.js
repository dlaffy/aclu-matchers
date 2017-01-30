import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';

import './App.css';
import Uploader from './Cloudwok';
import Header from './HeaderComponent';
import Instructions from './InstructionsComponent'

const twitterHandle = 'ACLU_Multiplier';

const bodyStyle = {
  align: 'float left',
  padding: 25,
  borderTopStyle: 'solid'
};

const signatureStyle = {
  fontSize: '0.8em'
};

const amountStyle = {
  color: 'green'
};

const linkStyle = {
  fontWeight: 'bold',
  paddingTop: 10
};

const cloudwokStyle = {
  margin: 10,
  padding: 10
};

const dateTimeStyle = {
  fontSize: '0.6em',
  margin: 10
};

const wrapper = {
  paddingLeft: '50%',
  paddingRight: '15%',
  width: '800',
  position: 'relative'
};

const appStyle = {
  width: '40%'
};

const amountMatched = '8,500';

const timeEST = '12:30am';

const date = 'January 30, 2017';

class App extends Component {
  render() {
    return (
      <div className={ wrapper }>
        <div className ={ appStyle } >
          <div className="App">

            <Header />

            <Instructions />

            <div style={cloudwokStyle}>
              <Uploader />
            </div>

            <div style={amountStyle}>
              <div>
                Over <strong style={ { fontSize: '1.5em' } }>${amountMatched}</strong> worth of donations <br />
                have been matched through this site, <br />
                all thanks to donors like you!
                <div style={dateTimeStyle}><strong>*as of {timeEST} EST on {date}</strong></div>
              </div>
            </div>

            <div style={bodyStyle}>
              <i>
                “‘Extreme vetting’ is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.”
              </i>

              <p style={signatureStyle}>
                - Anthony D. Romero, Executive Director, American Civil Liberties Union
              </p>
              <p>
                The above is a statement from the Executive Director of the ACLU, a statement that I wholeheartedly agree with - and I'm not alone.
                <br/>
                <br />
                People around the nation have offered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.
                <br/>
                <br />
                Drag and drop your receipt above, and I will automatically tweet your receipt to at least ten matching donors. Multiply your donation by 10!
              </p>
            </div>

            <Timeline
              dataSource={{
              sourceType: 'profile',
              screenName: twitterHandle
            }}
              options={{
              username: twitterHandle,
              height: '400',
              width: '300'
            }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;