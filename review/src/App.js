import React, { Component } from 'react';
import Heading1 from './Heading1';

import './App.css';

const data = [
  {
    name: 'Gort',
    year: 1951,
    img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Gort_Firing.jpg',
  },
  {
    name: 'Ash',
    year: 1979,
    img: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Ash_%28Alien%29.jpg',
  },
  {
    name: 'T-800',
    year: 1984,
    img:
      'https://upload.wikimedia.org/wikipedia/en/b/b9/Terminator-2-judgement-day.jpg',
  },
  {
    name: 'Bishop',
    year: 1986,
    img:
      'https://upload.wikimedia.org/wikipedia/en/4/49/Bishop_%28Alien%29.png',
  },
  {
    name: 'Johnny 5',
    year: 1986,
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Johnny5_03.jpg/433px-Johnny5_03.jpg',
  },
  {
    name: 'Data',
    year: 1987,
    img: 'https://upload.wikimedia.org/wikipedia/en/0/09/DataTNG.jpg',
  },
  {
    namee: 'Bender',
    year: 1999,
    img: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png',
  },
  {
    name: 'Marvin',
    year: 2005,
    img:
      'hhttps://upload.wikimedia.org/wikipedia/en/c/cb/Marvin_%28HHGG%29.jpg',
  },
  {
    name: 'Astro Boy',
    year: 2009,
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AstroBoy%28CGI%29.jpg',
  },
  {
    name: 'TARS',
    year: 2014,
    img:
      'https://compote.slate.com/images/17c75261-6622-4399-a0ae-6316eeff6319.jpg',
  },
  {
    name: 'CHAPPiE',
    year: 2015,
    img: 'https://upload.wikimedia.org/wikipedia/en/7/71/Chappie_poster.jpg',
  },
  {
    name: 'Poe',
    year: 2018,
    img:
      'https://vignette.wikia.nocookie.net/altered-carbon/images/7/71/Poe.jpg/revision/latest/scale-to-width-down/325?cb=20180205161632',
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robot: null,
    };
    this.onRequestClose = this.onRequestClose.bind(this);
  }

  clickRobot = (robot) => {
    this.setState({ robot });
  };

  viewRobo = (robot) => {
    this.state.robots.find((theRobot) => robot.name == theRobot.name);
  };

  onRequestClose() {
    this.setState({ robot: null });
  }

  render() {
    let years = [];
    let robots = [];
    let theRobot = this.state.robot;

    for (let i = 0; i < data.length; i++) {
      robots[i] = (
        <div className="row">
          <div
            onClick={() => {
              this.clickRobot(data[i]);
            }}
          >
            <div style={{ fontSize: 18, paddingBottom: 5 }}>{data[i].name}</div>
          </div>
          <div>{data[i].year}</div>
        </div>
      );
    }

    return (
      <div className="main" style={{ position: 'relative' }}>
        {theRobot != null ? (
          <div>
            {theRobot && (
              <div
                className="modal"
                onClick={this.onRequestClose}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'stretch',
                    justifyContent: 'flex-start',
                    padding: 40,
                    border: '1px solid #ccc',
                  }}
                >
                  <div className="title">{theRobot.name}</div>
                  <img src={theRobot.img} with="640" height="480" />
                  <div onClick={this.onRequestClose}>Close</div>
                </div>
              </div>
            )}
          </div>
        ) : null}
        <div
          style={{
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              height: '64px',
              backgroundColor: '#58a',
            }}
          >
            <Heading1>Robots</Heading1>
          </div>
          <div
            style={{
              flexGrow: 1,
              overflow: 'auto',
              height: 'calc(100vh - 64px)',
            }}
          >
            <div className="list">{robots}</div>
          </div>
        </div>
      </div>
    );

    return;
  }
}
