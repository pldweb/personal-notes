import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'

const SignUp = () => {

    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

  const handleSignup = async (e) => {
    e.preventDefault()

    if(!validateEmail(email)){
        setError("Tolong masukkan email yang valid")
          return 
      }
    
    if(!password){
        setError("Tolong masukkan password yang valid")
          return
      }

      if(!nama){
        setError("Tolong masukkan nama yang valid")
          return
      }
    
      setError("")

      // Login API 
       
    
  }

  return (
    <>
        <Navbar />
        <div className='flex items-center mt-28 justify-center'>
            <div className='w-96 border rounded bg-white px-7 py-10'>
                <form action="" onSubmit={handleSignup}>

                    <h4 className="text-2xl mb-7 font-medium">SignUp</h4>

                    <input type="text" 
                    placeholder='Nama' 
                    className='input-box'
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder='Email' 
                    className='input-box'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordInput 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                    <button type='submit' className='btn-primary'>Buat Akun Baru</button>
                    <p className="text-sm text-center mt-4">
                        Sudah punya akun?{" "} <Link to="/login" className="font-medium text-primary underline">Login sekarang</Link>
                    </p>

                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp