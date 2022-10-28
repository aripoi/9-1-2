import React from "react";
import Greeting from "./Greeting";
import Warning from "./Warning";
import Error from "./Error";
import Announce from "./Announce";
import './Profile.css';

function Profile(props) {
    return (
        <div>
        <Greeting 
                backgroundColor="#4ea04e"
                cls="리액트"
                ment="반갑습니다!"
                tool="Visual Studio Code">
        </Greeting>
        <Warning
                backgroundColor="red"
                todo="과제 제출"
                day="1일"
                >

        </Warning>
        <Error
                backgroundColor="yellow"
                type="컴파일">

        </Error>
        <Announce
                backgroundColor="plum"
                school="가천대학교"
                week="12주"
                cls="리앧트"
                finish="3주"
                maindish="제육볶음"
                time="점심">
        </Announce>
        </div>

        );
}
export default Profile;
