import React, { useContext, useState, useEffect } from 'react';
import { AllDataContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';

const SigninandsignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState(null);
  const [name,setname]=useState('')

  const { signInWithEmailAndPasswordFunc, signUpWithEmailAndPassword, user ,Forsigintextlogo} = useContext(AllDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    Forsigintextlogo(name)
    signInWithEmailAndPasswordFunc(loginEmail, loginPassword)
      .then((userCredential) => {
        console.log('Login successful:', userCredential);
        navigate('/'); // Navigate to home after successful login
      })
      .catch((error) => {
        console.error('Login error:', error);
        setError(error.message);
      });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    Forsigintextlogo(name)
    signUpWithEmailAndPassword(signupEmail, signupPassword)
    
      .then((userCredential) => {
        console.log('Sign up successful:', userCredential);
        navigate('/'); // Navigate to home after successful sign up
      })
      .catch((error) => {
        console.error('Sign up error:', error);
        setError(error.message);
      });
  };

  const loginForm = (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleLoginSubmit}>
      <div className='mb-6'>
<label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">User Name</label>
<input
  type="text"
  id="signupEmail"
  value={name}
  onChange={(e) => setname(e.target.value)}
  required
  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
/>
</div>
        <div className="mb-4">
          <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="loginEmail"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="loginPassword"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
      <div className="my-6 flex items-center justify-center text-gray-500">
        <span className="px-2">OR</span>
      </div>
      <button
        type="button"
        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => setIsSignUp(true)}
      >
        Sign Up
      </button>
    </>
  );

  const signUpForm = (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleSignUpSubmit}>

      <div className='mb-6'>
<label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Name</label>
<input
  type="text"
  id="signupEmail"
  value={name}
  onChange={(e) => setname(e.target.value)}
  required
  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
/>
</div>
        <div className="mb-6">        
          <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="signupEmail"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="signupPassword"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Sign Up
        </button>
      </form>
      <div className="my-6 flex items-center justify-center text-gray-500">
        <span className="px-2">OR</span>
      </div>
      <button
        type="button"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsSignUp(false)}
      >
        Back to Login
      </button>
    </>
  );

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {isSignUp ? signUpForm : loginForm}
      </div>
    </div>
  );
};

export default SigninandsignUp;
