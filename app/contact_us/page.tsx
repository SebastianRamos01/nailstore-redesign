import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function page() {
  return (
    <>
        <Header />
        <section className='contact-sect'>
            <div className='contact-cont'>
                <div className='contact-img'>
                    <img src="/images/nailstore-shop-3.png" alt="nailstore" />
                </div>
                <span>
                    Work whit us
                </span>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default page