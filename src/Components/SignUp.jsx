import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useAuth } from '../Context/AuthContext';

function SignUp() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  useEffect(() => {
    // Set a small delay to illustrate the animation (you can adjust this)
    const timeout = setTimeout(() => {
      setShowLoginForm(true);
    }, 100); // Adjust the delay time as needed
  }, [])

  // ---------------------------------------------------

  // Dependencies

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, currentUser } = useAuth();
  const Navigate = useNavigate();

  // ---------------------------------------------------

  // Handle form submission | Sign up
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (passwordRef.current.value.length < 6) {
      setLoading(false);
      return setError('Password is too short');
    }
    try {
      setError('')
      await signup(usernameRef.current.value, emailRef.current.value, passwordRef.current.value);
      Navigate('/profile');
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email is already in use');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/weak-password':
          setError('Password is too weak!');
          break;
        default:
          setError('Failed to create an account');
          console.error('Signup failed:', error);
      }
    }
    setLoading(false);
  };



  // ---------------------------------------------------

  return (
    <>
      <div tabIndex={-1} className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex cursor-default  ">
        <div
          id='login-form'
          className={`relative p-4 w-full max-w-md h-full md:h-auto z-40 transition-all duration-500 ${showLoginForm ? 'top-0' : 'top-[-800px]'
            }`}
        >
          <div className="relative bg-white rounded-lg shadow">
            <Link to={'/'} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" cliprule="evenodd" />
            </svg>
              <span className="sr-only">Close popup</span>
            </Link>
            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium" />
              <p className="mb-4 text-sm font-normal text-gray-800" />
              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Create An Account
                </p>
                <p className="mt-2 text-sm leading-4 text-slate-600">
                  To be logged in perform this action.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-2">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] " />Continue with
                  Google
                </button>

              </div>
              <div className="flex flex-col w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200" />
                OR
                <div className="h-px w-full bg-slate-200" />

              </div>

              <form onSubmit={handleSubmit} className="w-full">
                <input ref={usernameRef} type="text" className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Username" />
                <input ref={emailRef} type="email" className="block mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Email Address" />
                <input ref={passwordRef} type="password" className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Password" />
                <p className="mb-3 mt-2 text-sm text-gray-500">
                  <a href="/forgot-password" className="text-[#c13c07] hover:text-[#f43c09a7]">Reset your password?</a>
                </p>
                <button disabled={loading} type="submit" className={`inline-flex w-full items-center justify-center rounded-lg bg-[#f43c09a7] p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}>
                  Continue
                </button>
                {error && <p className='uppercase text-red-700 font-semibold w-full p-4 text-center rounded-xl my-4'>{error}</p>}
              </form>
              <div className="mt-6 text-center text-sm text-slate-600">
                Already have an account?
                <a href="/signin" className="font-medium text-[#f43c09a7]">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SignUp