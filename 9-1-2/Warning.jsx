import React from "react";

function Warning(props) {

const { backgroundColor, todo, day,  } = props;
    return (
        <div
            style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white",
        }}
        >
            <h1>Warning!</h1>
                
        </div>
        );
}
export default Warning;
