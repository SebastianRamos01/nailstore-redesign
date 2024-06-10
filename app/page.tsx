import Link from "next/link";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { products } from "./data/products";

const slogan = "Add a Touch of Glamour to Your Hands."
const susbTexts = ["Suscribe to our newsletter", "to recieve exclusive benefits and offers"]
const titles = ["Explore our Featured Products", "Weekend Selected", "Newest Products"]

export default function Home() {
  return (
    <>
      <Header />
      <div className="banner">
          <div className="img-box">
            <img src="/images/banner-img.png" alt="banner" className="banner-img"/>
          </div>
          <div className="slogan">
            <h3>
              {slogan}
            </h3>
          </div>
      </div>
      <Featured />
      <NewsLetter />
      <WeekendSelec />
      <LastProduct />
      <Footer />
    </>
  );
}

function Featured() {
  
  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.prize.replace(/[^0-9.-]/g, ""));
    return price < 5700;
  });

  return (
    <section className="feat-sect">
      <ul className="list-feat">
        {filteredProducts.map((elem) => {
          return <Link href={`/products/${elem.id}`} key={elem.id} style={{textDecoration: 'none'}}>
            <article className="feat-box">
              <div className="feat-img">
                <img src={`/images/${elem.image}`} alt={elem.product_name} className="in-img"/>
              </div>
              <div className="desc-box">
                <h5 className="feat-title">{elem.product_name}</h5>
                <span className="feat-prize">{elem.prize}</span>
              </div>
            </article>
          </Link>
        })}
      </ul>
    </section>
  )
}

function NewsLetter () {
  return <article className="news-box">
    <span className="title">
      {susbTexts[0].toUpperCase()}
    </span>
    <span className="sub-title">
      {susbTexts[1].toUpperCase()}
    </span>
    <div className="email-box">
      <input type="email" name="" id="" placeholder="email"/>
      <button type="submit">Suscribe</button>
    </div>
  </article>
}

function WeekendSelec() {

  const filteredProducts = products.filter((product) => product.stock >= 10);

  return (
    <section className="list-sect">
      <span className="sect-title">
        {titles[1]}
      </span>
      <ul className="list-feat">
        {filteredProducts.map((elem) => {
          return <Link key={elem.id} href={`/products/${elem.id}`} style={{textDecoration: 'none'}}>
            <article key={elem.id} className="feat-box">
              <div className="feat-img">
                <img src={`/images/${elem.image}`} alt={elem.product_name} className="in-img"/>
              </div>
              <div className="desc-box">
                <h5 className="feat-title">{elem.product_name}</h5>
                <span className="feat-prize">{elem.prize}</span>
              </div>
            </article>
          </Link>
        })}
      </ul>
    </section>
  )
}
function LastProduct() {

  const filteredProducts = products.slice(-5).reverse();

  return (
    <section className="list-sect">
      <span className="sect-title">
        {titles[2]}
      </span>
      <ul className="list-feat">
        {filteredProducts.map((elem) => {
          return <Link key={elem.id} href={`/products/${elem.id}`} style={{textDecoration: 'none'}}>
            <article  className="feat-box">
              <div className="feat-img">
                <img src={`/images/${elem.image}`} alt={elem.product_name} className="in-img"/>
              </div>
              <div className="desc-box">
                <h5 className="feat-title">{elem.product_name}</h5>
                <span className="feat-prize">{elem.prize}</span>
              </div>
            </article>
          </Link>
        })}
      </ul>
    </section>
  )
}