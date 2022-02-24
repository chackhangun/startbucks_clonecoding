import React, {useState, useEffect} from "react";
import styled, {css} from "styled-components";
import './App.css';
import logo from "./img/starbucks.png"

function LoginBox(){
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [condition, setCondition] = useState(false);
  const LoginButton2 = styled.button`
    width: 82%;
    height: 35px;
    background-color: rgb(134,192,249);
    border: 2px solid rgba(69, 161, 253, 0.2);
    margin: 10px 0px 10px 0px;
    border-radius: 5px 5px 5px 5px;
    color: white;
    ${({pass})=> {
      return pass ? `background-Color: rgb(69, 161, 253); cursor: pointer;` : null;
    }}`; 
    
  useEffect(()=>{
    if((id.includes("@")) && (id.length >= 8) && (pwd.length !== 0)){
      setCondition(true);
    }else{
      setCondition(false);
    }
  }, [id,pwd])

  const onChange = (e) => {
    e.target.id === "input_id" ? setId(e.target.value) : setPwd(e.target.value);
    console.log(`id = ${id}`);
    console.log(`pwd = ${pwd}`);
  };

  const onClick = () => {
    console.log("clicked");
  }
  return(
    <div className = "login_content_box">
      <div className="company_logo">
        <div className="logo_font">STARBUCKS</div>
      </div>
      {/* <img className="starbucks_img" src= {logo}></img> */}
      <div className = "user_info_box">
          <input id = "input_id"
            className="id_pwd" 
            onChange = {onChange}
            value = {id}
            placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input id = "input_pwd"
            className="id_pwd"
            type = "password"
            onChange = {onChange}
            value = {pwd}
            placeholder="비밀번호"></input>

          {/* <button id = "loginButton" className="login_button" onClick = {onClick}>로그인</button> */}
          <LoginButton2 pass = {condition} onClick = {onClick}>로그인</LoginButton2>
          <div className="emptybox_under_login_button"></div>
          <div className="forget_pwd"> 비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}

function LoginPage(){
  return(
    <div>
      <div style={{
        width: "auto",
        height: "15vh",
        backgroundColor: "#f0f0f0"
      }}/>
      <div className = "login">
        <div className='login_emptybox'/>
        <div className='login_box'>
          <LoginBox/>
        </div>
        <div className='login_emptybox'/>
      </div>
      <div style={{
        width: "auto",
        height: "15vh",
        backgroundColor: "#f0f0f0"
      }}/>
    </div>
  );
}

function App() {
  return (
    <>
    <LoginPage/>
    </>
  );
}

export default App;
