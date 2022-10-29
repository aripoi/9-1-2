import React from "react";
import Greeting from "./Greeting";
import Warning from "./Warning";
import Error from "./Error";
import Announce from "./Announce";
import './Profile.css';

function Profile(props) {
    return (
        <div>
        <Warning
                backgroundColor="red"
                todo="과제 제출" //할일(시험)
                day="1일" //남은 일수
                disa="지진" //재해(쓰나미, 화재)
                needfix="컴퓨터"//고장나는 물건(센서, 전등) 
                >
        </Warning>
        <Greeting 
                backgroundColor="#4ea04e"
                cls="리액트" //수업명
                ment="반갑습니다!" //인삿말
                tool="Visual Studio Code" //사용툴
                >
        </Greeting>

        <Error
                backgroundColor="yellow"
                type="컴파일" //오류 종류
                type1="논리" //오류 종류
                type2="불법 접근" //오류 종류
                >

        </Error>
        <Announce
                backgroundColor="plum"
                school="가천대학교" //학교명
                week="12주" //수업 일수
                cls="리액트" //수업명
                finish="3주" // 종강까지 남은 기간
                maindish="제육볶음" //메인메뉴
                time="점심" // 아침, 점심, 저녁
                >
        </Announce>
        </div>

        );
}
export default Profile;