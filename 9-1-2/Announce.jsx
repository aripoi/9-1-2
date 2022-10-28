import React from "react";

function Announce(props) {

const { backgroundColor, school, week, cls, finish, maindish, time} = props;
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
        <h1>{school} 공지사항</h1>
        <p>{cls} 수업은 {week} 수업입니다.</p>
        <p>종강까지 {finish} 남았습니다.</p>
        <p>오늘의 학식{time}의 메인 메뉴는 {maindish} 입니다.</p>
        </div>
        );
}
export default Announce;
