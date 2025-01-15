import React from 'react'
export default function Page1() {

    const logo = "https://picsum.photos/500/500";
    const contextMain = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, ";
    const contextSup = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, ";
    const buttonName = "GET STARTED"
    const listOptionLogin = [1, 2, 3, 4];

    return (
        <div className='min-h-screen bg-red-500 flex flex-col justify-center items-center'>
            <div className='flex items-center flex-col bg-green-500 gap-10'>
                <div className='flex overflow-hidden w-[200px] h-[200px]'>
                    <img src={logo} alt="" className='w-full' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-[2vw] font-bold'>{contextMain}</div>
                    <div className='text-[1.5vw] font-semibold'>{contextSup}</div>
                </div>
                <div className='text-[1vw] font-bold flex justify-center'>
                    <button className='bg-slate-300 py-3 px-5'>{buttonName}</button>
                </div>
                <div className='text-[1vw] font-bold'>or</div>
                <div className='flex flex-row gap-10 '>
                    {listOptionLogin.map((option) => {
                        return <button>{option}</button>
                    })}
                </div>
            </div>
        </div>
    )
}