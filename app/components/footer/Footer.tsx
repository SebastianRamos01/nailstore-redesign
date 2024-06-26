import Link from "next/link";
import "../footer/footer.css"

const info = "Nailstore";
const susbTexts = [
  "Suscribe to our newsletter",
  "to recieve exclusive benefits and offers",
];
const rigths = ["Buenos Aires, Argentina",
"Ramos Sebastian, 2024",
"All Rights Reserved@"
]
const links = [{
  name: 'Products',
  ref: 'products'
},{
  name: 'Visit us',
  ref: 'visit_us'
},{
  name: 'Contact us',
  ref: 'contact_us'
}]

function Footer() {
  return (
    <footer className="foot">
      <section className="foot-cont">
        <div className="info-cont">
          <span className="logo">{info.toUpperCase()}</span>
          <div className="img-box">
            <img src="/icons/mail-icon.svg" alt="email" />
          </div>
        </div>
        <ul className="links-cont">
          {links.map((elem, i) => {
            return <Link href={elem.ref} className="link" key={i}>
              {elem.name}
            </Link>
          })}
        </ul>
        <article className="subs-cont">
          <span className="title">{susbTexts[0]}</span>
          <span className="sub-title">{susbTexts[1]}</span>
          <div className="email-box">
            <input type="email" name="" id="" placeholder="email" />
            <button type="submit">Suscribe</button>
          </div>
        </article>
      </section>
      <section className="rights">
        {rigths.map((elem, i) => {
          return <p key={i}>
            {elem}
          </p>
        })}
      </section>
    </footer>
  );
}

export default Footer;
