import React from "react";

function Error(props) {

const { backgroundColor, type, type1, type2} = props;
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
            <h1>오류 목록</h1>
                <table>
                    <tr><td><h3>{type} 에러!</h3></td><td>{type} 과정중 에러 발생</td></tr>
                    <tr><td><h3>{type1} 에러!</h3></td><td>{type1} 에러 발생</td></tr>
                    <tr><td><h3>{type2} 에러!</h3></td><td>{type2} 에러 발생</td></tr>
                </table>
        </div>
        );
}
export default Error;
