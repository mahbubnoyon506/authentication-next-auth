import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {FaGoogle} from 'react-icons/fa'
import {BsFacebook, BsGithub} from 'react-icons/bs'
import { useForm } from 'react-hook-form';


const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
       const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(res)
        if(res.status === 200){
            alert('Data added successfully')
            reset()
        }
    };

    return (
        <div>
            <Head>
                <title>Authentication | Registration</title>
            </Head>
            <main>
                <div>
                    <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold text-center text-slate-100 py-5'>Sign Up</h2>
                    <p className='text-sm md:text-base text-center text-slate-100'>Sign Up with your expected credintial.</p>
                </div>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label className='block' htmlFor="">Your Name</label>
                        <input 
                        {...register("name", {required: true})} 
                        className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type='text' placeholder='Type name' />
                        {errors.name && <p className='text-sm text-rose-700'>Name is required</p>}
                    </div>
                    <div className='mb-3'>
                        <label className='block' htmlFor="">Your Email</label>
                        <input
                        {...register("email", {required: true})}
                         className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type='email' placeholder='Type email' />
                          {errors.email && <p className='text-sm text-rose-700'>Email is required</p>}
                    </div>
                    <div>
                        <label className='block' htmlFor="">Your Password</label>
                        <input
                         {...register("password", {required: true})}
                         className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type='password' placeholder='Type password' />
                          {errors.password && <p className='text-sm text-rose-700'>Password is required</p>}
                    </div>
                    <div>
                        <label className='block' htmlFor="">Confirm Password</label>
                        <input className='py-1 pl-2 mt-2 rounded focus:outline-none bg-slate-600' type='password' placeholder='Type password' />
                    </div>
                    <input className='bg-slate-600 rounded py-2 px-5 cursor-pointer mt-3' type="submit" value="Sign Up" />
                </form>
                <div className='py-3 border-b border-gray-900'><p>Already have an account? <Link className='text-blue-500' href='/login'>Login</Link></p></div>
                <div className='mt-3'>
                    <p>Login with social account.</p>
                    <div className='flex items-center text-4xl my-2'>
                        <FaGoogle className='mx-2 cursor-pointer' />
                        <BsFacebook className='mx-2 cursor-pointer' />
                        <BsGithub className='mx-2 cursor-pointer' />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;