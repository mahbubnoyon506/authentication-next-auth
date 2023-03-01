import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {FaGoogle} from 'react-icons/fa';
import {BsFacebook, BsGithub} from 'react-icons/bs';
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    async function handleGoogleLogin(){
        signIn('google', {callbackUrl:'http://localhost:3000/'})
    }
    return (
        <div>
            <Head>
                <title>Authentication | Login </title>
            </Head>
            <main>
                <div>
                    <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold text-center text-slate-100 py-5'>Login</h2>
                    <p className='text-sm md:text-base text-center text-slate-100'>Login with your expected credintial.</p>
                </div>
                <form className=''>
                    <div className='mb-3'>
                        <label className='block' htmlFor="">Your Email</label>
                        <input className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type="email" name="" id="" placeholder='Type email' />
                    </div>
                    <div>
                        <label className='block' htmlFor="">Your Password</label>
                        <input className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type="password" name="" id="" placeholder='Type password' />
                    </div>
                    <input className='bg-slate-600 rounded py-2 px-5 cursor-pointer mt-3' type="submit" value="Login" />
                </form>
                <div className='py-3 border-b border-gray-900'><p>Do not have an account? <Link className='text-blue-500' href='/register'>Register</Link></p></div>
                <div className='mt-3'>
                    <p>Login with social account.</p>
                    <div className='flex items-center text-4xl my-2'>
                        <FaGoogle onClick={handleGoogleLogin} className='mx-2 cursor-pointer' />
                        <BsFacebook className='mx-2 cursor-pointer' />
                        <BsGithub className='mx-2 cursor-pointer' />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;