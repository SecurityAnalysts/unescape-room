import React, { Component } from 'react';

import FormattedTime from '../components/FormattedTime.js';
import Header from '../components/Header.js';

class LevelCompleted extends Component {
  render() {
    return (
      <div className="gameBox">
        <div>
          <Header />
          <div>
            <div className="gameHeader">
              🤩 Level completed
            </div>

            <div className="clearfix" />

            <div>
              <div className="section">
                You have completed an <code>unescape()</code> room level. Get ready for the next one!
              </div>
            </div>

            <div className="card section">
              <div>
                Current total points
              </div>

              <div className="section">
                <h1>{this.props.totalPoints}</h1>
              </div>

              <div className="section">
                Total time spent
              </div>

              <div className="section">
                <h1><FormattedTime seconds={this.props.totalTimeRemaining} /></h1>
              </div>

              <button onClick={this.props.onNextlevel}>Advance to next level</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LevelCompleted;
