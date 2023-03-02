import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { signIn } from "next-auth/react"
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    async function handleGoogleLogin() {
        signIn('google', { callbackUrl: 'http://localhost:3000/' })
    }
    const handleGithubLogin = () => {
        signIn('github', { callbackUrl: 'http://localhost:3000/' })
    }

    const onSubmit = async (data) => {
        console.log(data)
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
            callbackUrl: '/'
        })
        if(res.status === 200){
            router.push(res.url)
            reset()
        }
        // console.log(res)
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
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label className='block' htmlFor="">Your Email</label>
                        <input
                            {...register("email", { required: true })}
                            className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type='email' placeholder='Type email' />
                        {errors.email && <p className='text-sm text-rose-700'>Email is required</p>}
                    </div>
                    <div>
                        <label className='block' htmlFor="">Your Password</label>
                        <input
                            {...register("password", { required: true })}
                            className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type='password' placeholder='Type password' />
                        {errors.password && <p className='text-sm text-rose-700'>Password is required</p>}
                    </div>
                    <input className='bg-slate-600 rounded py-2 px-5 cursor-pointer mt-3' type="submit" value="Login" />
                </form>
                <div className='py-3 border-b border-gray-900'><p>Do not have an account? <Link className='text-blue-500' href='/register'>Register</Link></p></div>
                <div className='mt-3'>
                    <p>Login with social account.</p>
                    <div className='flex items-center text-4xl my-2'>
                        <FaGoogle onClick={handleGoogleLogin} className='mx-2 cursor-pointer' />
                        <BsFacebook className='mx-2 cursor-pointer' />
                        <BsGithub onClick={handleGithubLogin} className='mx-2 cursor-pointer' />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;