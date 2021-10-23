import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

function User() {
  const [userData, setUserData] = useState(null);
  const{userId} = useParams()

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(userData => {
        setUserData(userData)
      });
  });
  if (!userData) {
    return null;
  }
  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>

        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}

// class User extends Component {
//   state = {
//     user: null,
//   };

//   componentDidMount() {
//     this.fetUser();
//   }
//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;
//     if(prevUser !== currentUser) {
//       this.fetUser();
//     }
//   }
//   fetUser = userId => {
//     const {match} = this.props
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then(response =>{
//         if(response.ok){
//           return response.json()
//         }
//         throw new Error()
//       })
//       .then(data => {
//         this.setState({
//           user: data,
//         });
//       });
//   };

//   render() {
//     const { user } = this.state;
//     if (!user) {
//       return null;
//     }
//     const {avatar_url, name, location } = user
//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>

//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
