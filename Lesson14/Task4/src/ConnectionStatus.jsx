import React, { useEffect, useState } from 'react';

function ConnectionStatus() {
  const [connection, setConnection] = useState('online');
  const setOfflineStatus = () => {
    setConnection('offline');
  };
  const setOnlineStatus = () => {
    setConnection('online');
  };
  useEffect(() => {
    addEventListener('online', setOnlineStatus);
    addEventListener('offline', setOfflineStatus);
    return () => {
      removeEventListener('online', setOnlineStatus);
      removeEventListener('offline', setOfflineStatus);
    };
  });
  if (connection === 'online') {
    return <div className="status">{connection}</div>;
  }
  return <div className="status status_offline">{connection}</div>;
}
export default ConnectionStatus;

// class ConnectionStatus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: 'online',
//     };

//   }

//   componentDidMount() {
//     addEventListener('offline', this.setOfflineStatus);
//     addEventListener('online', this.setOnlineStatus);
//   }

//   setOfflineStatus = () => {
//     this.setState({
//       status: 'offline',
//     });
//   };

//   setOnlineStatus = () => {
//     this.setState({
//       status: 'online',
//     });
//   };

//   componentWillUnmount() {
//     removeEventListener('offline', this.setOfflineStatus);
//     removeEventListener('online', this.setOnlineStatus);
//   }

//   render() {
//     if (this.state.status === 'online') {
//       return <div className="status">{this.state.status}</div>;
//     }
//     return <div className="status status_offline">{this.state.status}</div>;
//   }
// }

// export default ConnectionStatus;
