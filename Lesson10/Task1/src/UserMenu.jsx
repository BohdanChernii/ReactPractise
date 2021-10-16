import React from 'react';

function UserMenu({userData}) {
    if(!userData){
        return null
    }
const { name,avatar_url} = userData;
  return (
    <div className="menu">
      <span className="menu__name">{name}</span>
      <img src={avatar_url} alt="User avatar" className="menu__avatar" />
    </div>
  );
}

export default UserMenu;
