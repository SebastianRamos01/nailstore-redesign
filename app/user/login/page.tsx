import Footer from '@/app/components/footer/Footer'
import Header from '@/app/components/header/Header'
import "../login/loginPage.css"
import React from 'react'
import Link from 'next/link'

const slogan = "Add a Touch of Glamour to Your Hands"
const title = "Welcome to Nailstore"

function page() {
  return (
    <>
        <Header></Header>
        <section className='log-sect'>
            <div className='log-cont'>
                <div className='log-img'>
                    <img src="/images/banner-img.png" alt="" />
                </div>
                <div className='text-cont'>
                    <div className='title'>
                        <p>{slogan.toUpperCase()}</p>
                    </div>
                        <form action="" method="post" className='form-cont'>
                            <p className='form-title'>
                                {title.toUpperCase()}
                            </p>
                            <div className='input-cont'>
                                <label htmlFor="">User</label>
                                <input type="text" placeholder='User'/>
                            </div>
                            <div className='input-cont'>
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Password'/>
                            </div>
                            <div className='links'>
                                <Link href={"/user/reset_password"} className='link'>
                                    Forgot your Password ? Click here
                                </Link>
                                <Link href={"/user/register"} className='link'>
                                    Register here Click here
                                </Link>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
  )
}

export default page