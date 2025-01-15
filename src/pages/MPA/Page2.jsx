import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Page2() {

    let navigate = useNavigate()
    const logo = "https://picsum.photos/500/500";
    const nameOfLabel = "Username / E-mail / Phone"
    const buttonName = "Continue"

    const handleOnClick = () => {
        navigate("/mpa/3")
    }

    return (
        <div className='min-h-screen bg-red-500 flex flex-col justify-center items-center'>
            <div className='bg-green-500 flex flex-col items-center gap-10'>
                <div className='flex overflow-hidden w-[200px] h-[200px]'>
                    <img src={logo} alt="" className='w-full' />
                </div>
                <div>
                    <div className='ml-[10px] text-[1vw] font-semibold'>
                        <label htmlFor="">{nameOfLabel}</label>
                    </div>
                    <div className='text-[1.25vw]'>
                        <input type="text" className='p-2 w-[500px] rounded-lg' />
                    </div>
                </div>
                <div className='text-[1vw] font-bold flex justify-center'>
                    <button onClick={handleOnClick} className='bg-slate-300 py-3 px-5'>{buttonName}</button>
                </div>
            </div>
        </div>
    )
}