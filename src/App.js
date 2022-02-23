import React, {useState} from "react";
import './App.css';
import logo from "./img/starbucks.png"

function LoginBox(){
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();

  return(
    <div className = "login_content_box">
      <div className="company_logo">
        <div className="logo_font">STARBUCKS</div>
      </div>
      {/* <img className="starbucks_img" src= {logo}></img> */}
      <div className = "user_info_box">
          <input className="id_pwd"
            placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input className="id_pwd"
            placeholder="비밀번호"></input>

          <button className="login_button">로그인</button>
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
