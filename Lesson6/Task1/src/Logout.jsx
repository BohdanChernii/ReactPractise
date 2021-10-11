import React from 'react';

function Logout ({onLogout}) {

    return (
        <button className="logout btn" onClick={onLogout}>
        Log out
      </button>
    )
}
export default Logout