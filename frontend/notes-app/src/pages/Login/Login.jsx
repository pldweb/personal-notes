import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'

const Login = () => {
  return (
    <>
        <Navbar />
        <div className='flex items-center mt-28 justify-center'>
            <div className='w-96 border rounded bg-white px-7 py-10'>
                <form action="" onSubmit={() => {}}>

                    <h4 className="text-2xl mb-7">Login</h4>
                    <input type="text" placeholder='email' className='input-box' />
                    <PasswordInput />
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