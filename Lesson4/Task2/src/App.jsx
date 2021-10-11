import React from "react";
import Counter  from "./Clock.jsx";

function App(){
    return (
        <>
        <Counter location='Kyiv' offset={2}/>
        <Counter location='London' offset={0}/>
        <Counter location='New York' offset={-5}/>
        </>
    );
};

export default App