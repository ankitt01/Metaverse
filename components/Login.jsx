import React from 'react'
import Image from "next/image"

function Login() {
    return (
        <div className='bg-black relative'>
            <h1>I am the login screen</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
                <Image src="https://links.papareact.com/3pi" height={200} width={200} className='object-cover rounded-full'/>
                <button className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to the METAVERSE</button>
            </div>

            <div className='w-full h-screen'>
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit='cover'/>
            </div>
        </div>
    )
}

export default Login