import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'online',
    };
    
  }
  
  componentDidMount() {
    addEventListener('offline', this.setOfflineStatus);
    addEventListener('online', this.setOnlineStatus);
  }

  setOfflineStatus = () => {
    this.setState({
      status: 'offline',
    });
  };

  setOnlineStatus = () => {
    this.setState({
      status: 'online',
    });
  };

  componentWillUnmount() {
    removeEventListener('offline', this.setOfflineStatus);
    removeEventListener('online', this.setOnlineStatus);
  }

  render() {
    if (this.state.status === 'online') {
      return <div className="status">{this.state.status}</div>;
    }
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
