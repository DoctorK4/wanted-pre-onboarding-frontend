import { useNavigate } from 'react-router';
import { signUp } from '../apis/auth';
import { useState } from 'react';

function SignUp() {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validatePassword = e => {
    const MINIMUM_PW_LENGTH = 8;
    setPassword(e.target.value);
    if (e.target.value.length >= MINIMUM_PW_LENGTH) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const validateEmail = e => {
    setEmail(e.target.value);
    if (e.target.value.includes('@')) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await signUp(email, password);
    if (response.status === 201){
      navigate('/signin');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto">
      <h2 className="mb-4 text-xl font-bold text-gray-800 text-center">회원가입</h2>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        type="email"
        value={email}
        onChange={validateEmail}
      />
      <label htmlFor="password" className="mt-2">비밀번호</label>
      <input
        id="password"
        className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={password}
        onChange={validatePassword}
      />
      <button
        type="submit"
        className="mt-5 py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        data-testid="signup-button"
        disabled={!(validEmail && validPassword)}
        onClick={handleSubmit}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
