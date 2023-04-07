import axios from "axios";
import { useState } from "react";

const host = 'https://www.pre-onboarding-selection-task.shop/';
const api = axios.create({
  baseURL: host,
  Headers: {
    'Content-Type' : 'application/json',
  },
})

function SignUp (){
  const [ validEmail, setValidEmail ] = useState(false);
  const [ validPassword, setValidPassword ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const validatePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length >= 8){
      setValidPassword(true)
    }
    else {
      setValidPassword(false)
    }
  }

  const validateEmail = (e) => {
    setEmail(e.target.value);
    
    if (e.target.value.includes('@')){
      setValidEmail(true)
    }
    else {
      setValidEmail(false)
    }
  }
  
  const register = async () => {

    await api.post('/auth/signup',{
      email, 
      password,
    })
    .then((res) => {
      console.log(res);
      window.location.replace("/signin")
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <label htmlFor="email">이메일</label>
      <input id="email" data-testid="email-input" placeholder="이메일을 입력해주세요" type="email" value={email} onChange={validateEmail}/>
      <label htmlFor="password">비밀번호</label>
      <input id="password" data-testid="password-input" placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={validatePassword}/>
      <button type="submit" data-testid="signup-button" disabled={!(validEmail && validPassword)} onClick={register}>회원가입</button>
    </>
  ) 
}

export default SignUp;