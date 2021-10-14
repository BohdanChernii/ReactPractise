import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        status: 'Online'
    }
  }



componentDidMount(){
    addEventListener('offline', this.setOfflineStatus)
    addEventListener('online', this.setOnlineStatus)
}

setOfflineStatus = () => {
this.setState({
    status: 'Offline',
})
}

setOnlineStatus = () => {
    this.setState({
        status: 'Online',
    })
}

componentWillUnmount(){
    removeEventListener('offline', this.setOfflineStatus)
    removeEventListener('online', this.setOnlineStatus)
}

  render() {
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;