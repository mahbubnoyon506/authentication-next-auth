import Link from 'next/link';
import React, { useState } from 'react';
import { useSession, signOut } from "next-auth/react"

const HomeMain = () => {
    const { data: session } = useSession()
    function handleSignOut(){
        signOut()
    } 
    return (
        <div>
            {
                session ? Authorized(handleSignOut) : Guest()
            }
        </div>
    );
};

export default HomeMain;


function Guest(){
    return(
        <main>
            <h2>Guest Homepage</h2>
           <Link href='/login'>Login</Link>
        </main>
    )
}

function Authorized(handleSignOut){
    return(
        <main>
            <h2>Authorized home page</h2>
            <Link href='#'>Profile page</Link>
            <button onClick={handleSignOut}>Signout</button>
        </main>
    )
}