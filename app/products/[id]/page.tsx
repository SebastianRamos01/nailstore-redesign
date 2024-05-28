import Footer from '@/app/components/footer/Footer'
import Header from '@/app/components/header/Header'
import { products } from '@/app/data/products'
import "../[id]/productPage.css"

function page({ params }: { params: { id: string } }) {

    const foundProduct = products.find((product) => product.id.toString() === params.id)
    
  return (
    <>
        <Header></Header>
        <section className='prod-sect'>
            <article className='prod-cont'>
                <div className='imgs-cont'>
                    <div className='main-img'>
                        <img src={`/images/${foundProduct?.image}`} alt={foundProduct?.product_name} />
                    </div>
                    <aside>
                        <div className='prod-img'>
                            <img src={`/images/${foundProduct?.image}`} alt={foundProduct?.product_name} />
                        </div>
                        <div className='prod-img'>
                            <img src={`/images/${foundProduct?.image}`} alt={foundProduct?.product_name} />
                        </div>
                        <div className='prod-img'>
                            <img src={`/images/${foundProduct?.image}`} alt={foundProduct?.product_name} />
                        </div>
                    </aside>
                </div>
                <div className='prod-info'>
                    <div className='top-cont'>
                        <p className='p-name'>{foundProduct?.product_name}</p>
                        <small className='p-cat'>Code N: {foundProduct?.id}</small>
                        <small className='p-cat'>{foundProduct?.category}</small>
                    </div>
                    <div>
                        <p className='p-prize'>{foundProduct?.prize}</p>
                        <p>Disponible en 12 cuotas</p>
                    </div>
                    <p className='p-desc'>{foundProduct?.description}</p>
                </div>
                <div className='buy-cont'>
                    <p>Amount</p>
                    <div className='quant-cont'>
                        <button>-</button>
                        <input type="text" inputMode='numeric' name="" id="" defaultValue={1}/>
                        <button>+</button>
                        <p>Stock available {foundProduct?.stock}</p>
                    </div>
                    <div className='buttons-cont'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </article>
        </section>
        <Footer></Footer>
    </>
  )
}

export default page