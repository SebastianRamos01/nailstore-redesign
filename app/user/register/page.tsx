import Footer from '@/app/components/footer/Footer'
import Header from '@/app/components/header/Header'
import Link from 'next/link'
import React from 'react'
import "../register/registerPage.css"

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
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='Create Username'/>
                            </div>
                            <div className='input-cont'>
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Create Password'/>
                            </div>
                            <div className='input-cont'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Your Email'/>
                            </div>
                            <div className='input-cont'>
                                <label htmlFor="">Birthday</label>
                                <input type="date" />
                            </div>
                            <div className='input-cont'>
                                <label htmlFor="">Profile Photo</label>
                                <input type="file" />
                            </div>
                            <div className='links'>
                                <Link href={"/user/reset_password"} className='link'>
                                    Alredy registered? Click Here
                                </Link>
                                <Link href={"/user/register"} className='link'>
                                    Our Policy Agrement
                                </Link>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
  )
}

export default page