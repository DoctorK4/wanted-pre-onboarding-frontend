
function SignIn (){
  
  return (
    <>
      <label htmlFor="email">이메일</label>
      <input id="email" data-testid="email-input"/>
      <label htmlFor="password">비밀번호</label>
      <input id="password" data-testid="password-input"/>
      <button data-testid="signin-button">로그인</button>
    </>
  ) 
}

export default SignIn;