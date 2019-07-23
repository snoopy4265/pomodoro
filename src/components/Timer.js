import React from 'react';
import Ticking from './Ticking';

class Timer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        time: 1500, /* seconds */
        start: false,
        percentage: 0,
      };
      this.play = this.play.bind(this);
      this.stop = this.stop.bind(this);
    }

    play() {
      this.setState({ start: true });
      this.interval = setInterval(() => {
        this.setState({
          time: this.state.time - 1,
          percentage: this.state.percentage + 1
        });
      }, 1000);
    };
  
    stop() {
      this.setState({ start: false, time: 1500, percentage: 0 });
      clearInterval(this.interval);
    };

    render() {
      const { time, start, percentage } = this.state;
      const { showTask } = this.props;
      const { play, stop } = this;
      return (
        <div className="ui center middle aligned grid">
          <div className="sixteen center aligned wide column">
            <Ticking time={time}/>
            {showTask ? <h1 className="header">{showTask}</h1>: <h1 className="header" style={{opacity:'.3'}}>What to do next?</h1>}
            <button className="ui massive icon button" style={{background:'none', color:'black'}} onClick={play}>
              { start ? <i className="pause icon"></i> : <i className="play icon"></i>}
            </button>
            <button className="ui massive icon button" style={{background:'none', color:'black'}} onClick={stop}>
              <i className="stop icon"></i>
            </button>
            <div className="ui divider"></div>
            <h3>You just started on the road. <br />Keep going!</h3>
            <div className="progress-bar-wrapper">
              <div className="filler" style={{ width: `${percentage}%` }} />
              <i className="truck icon"></i>
              <div className="progress-bar"></div>
              <i className="flag checkered icon"></i>
            </div>
          </div>
        </div>
      );
    }
}

export default Timer
