import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const PasswordInput = ({value, onChange, placeholder, }) => {

    const  [isShowPassword, setIsShowPassword] = useState(false)


    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div className='flex items-center bg-transparent px-5 rounded border-[1.5px] mb-3'>
            <input 
            type={isShowPassword ? "text" : "password"} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder || 'Password'} 
            className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'/>

            {isShowPassword ? <FaRegEye
                size={32}
                className='text-primary cursor-pointer'
                onClick={() => toggleShowPassword()}
            /> :  <FaRegEyeSlash
                size={32}
                className='text-slate-400 cursor-pointer'
                onClick={() => toggleShowPassword()}
            />}
        </div>
    )
}

export default PasswordInput