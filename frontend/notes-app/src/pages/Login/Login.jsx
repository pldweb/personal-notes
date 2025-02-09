import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper.js'

const Login = () => {

    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()

        if(!validateEmail(email)){
            setError("Tolong masukkan email yang valid")
            return 
        }

        if(!password){
            setError("Tolong masukkan password yang valid")
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
                <form action="" onSubmit={handleLogin}>

                    <h4 className="text-2xl mb-7 font-medium">Login</h4>

                    <input 
                    type="email" 
                    placeholder='email' 
                    className='input-box'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />


                    <PasswordInput 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-xs pb-1">{error}</p>}


                    <button type='submit' className='btn-primary'>Login</button>
                    <p className="text-sm text-center mt-4">
                        Belum daftar?{" "} <Link to="/signup" className="font-medium text-primary underline">Buat akun baru</Link>
                    </p>

                </form>
            </div>
        </div>
    </>
  )
}

export default Login