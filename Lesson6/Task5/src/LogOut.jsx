import React from 'react';

function LogOut ({onLogout}){
    return(
<button className="logout btn" onClick={onLogout}>Logout</button>
    )
}
export default LogOut;