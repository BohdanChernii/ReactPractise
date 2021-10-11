import React from 'react';

function GoodButton()  {
        return (
            <>
            <button className="fancy-button" onClick={()=>{alert("Good job!")}}>Click me</button>
            </>
        )
}
export default GoodButton;