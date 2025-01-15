import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {

  let navigate = useNavigate()

  const handleOnClick = (e) => {
    if (e.target.value === "SPA") {
      navigate("/spa")
    } else {
      navigate("/mpa")
    }
  }

  return (
    <div className='flex justify-center mx-auto my-auto border-4 gap-10'>
      <button value={"SPA"} onClick={handleOnClick} className='bg-slate-300 py-2 px-3'>SPA</button>
      <button value={"MPA"} onClick={handleOnClick} className='bg-slate-300 py-2 px-3'>MPA</button>
    </div>
  )
}

export default Main