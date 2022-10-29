import React from "react";

function Warning(props) {

const { backgroundColor, todo, day, disa, needfix} = props;
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
                <ul>
                    <li>{todo} 까지 {day} 남음!!!!</li>
                    <li>{disa} 발생!!!! 대피!!!!</li>
                    <li>{needfix} 고장!!!! 수리요망!!!!</li>
                </ul>
        </div>
        );
}
export default Warning;
