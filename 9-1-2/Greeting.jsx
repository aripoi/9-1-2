import React, {useState} from "react";


function Greeting(props) {
    const { backgroundColor, cls, ment, tool } = props;
    const [state, setState] = useState("");
const [displayErr, setDisplayERR] = useState(false);

const onStateCls = () => {
    setDisplayERR(true);
    setState(`이 수업의 목표는 ${cls}를 배워 프론트 엔드의 기본 개념을 다집니다!`);
}
const onStateTool = () => {
    setDisplayERR(true);
    setState(`이 수업은 ${tool}를 사용합니다!`);
}
const onReset = () => {
    setDisplayERR(false);
    setState("");
}

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
            {ment && <h1>{ment}</h1>}
            <h2>{cls} 수업에 오신것을 환영합니다!</h2>
            {displayErr ? (<h4>{state}</h4>):(<></>)}
            <div style={{
                        display: "flex",
            }}>
                <button onClick={onStateCls}>목표</button>
                <button onClick={onStateTool}>사용 툴</button>
                <button onClick={onReset}>초기화!</button>
            </div>
        </div>
        );
}
export default Greeting;
