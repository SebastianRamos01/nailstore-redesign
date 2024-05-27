import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function page() {
  return (
    <>
        <Header></Header>
        <section className='visit-sect'>
            <div className='visit-cont'>
                <div className='visit-img'>
                    <img src="/images/nailstore-shop-2.png" alt="" />
                </div>
                <div className='text-cont'>
                    <p>Enter a refuge of peace and harmony where your hands will be the protagonists. At Nailstore, we invite you to immerse yourself in a unique sensory experience, where personalized attention and superior quality come together to create an unforgettable moment.</p>
                </div>
            </div>
            <div className='visit-cont'>
                <div className='text-cont'>
                    <p>We are locate at</p>
                    <strong>Buenos Aires, Argentina 1646</strong>
                    <p>Schedule a visit</p>
                    <strong>+23 75423465</strong>
                </div>
                <div className='visit-img'>
                    <img src="/images/nailstore-shop-1.png" alt="" />
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
  )
}

export default page