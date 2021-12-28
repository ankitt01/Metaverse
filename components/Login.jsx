import React from 'react'
import Image from "next/image"
import {useMoralis} from 'react-moralis'

function Login() {

    const {authenticate} = useMoralis()
    return (
        <div className='bg-black relative'>
            
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 '>
                <div className="border-l-8 border-yellow-300 mb-10">
                    <h3 className='text-2xl text-white font-bold pl-4'>ENTER THE</h3>
                    <h1 className=' pl-4 font-bold text-6xl text-white'> METAVERSE</h1>    
                </div>
                <Image src="https://links.papareact.com/3pi" height={200} width={200} className='object-cover rounded-full'/>
                <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to the METAVERSE</button>
            </div>

            <div className='w-full h-screen'>
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit='cover'/>
            </div>
        </div>
    )
}

export default Login
