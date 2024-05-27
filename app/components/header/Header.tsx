import Link from "next/link"
import "../header/header.css"

const info = "Nailstore"
const links = [
    'products',
    'visit_us',
    'contact_us'
]

function Header() {
  return (
    <header className="head">
        <div className="logo-box">
            <h1 className="logo">
                <Link href="/" className="link">
                    {info.toUpperCase()}
                </Link>
            </h1>
            <div className="search-box">
                <button className="search-b">
                    <img src="/icons/search-icon.svg" alt="" />
                </button>
                <input type="search" name="" id="" placeholder="Search"/>
            </div>
        </div>
        <nav className="nav-box">
            <ul className="links">
                {
                    links.map((link, i) => {
                        return <Link href={link} key={i} className="link">{link.toUpperCase()}</Link>
                    })
                }
            </ul>
            <div className="user-box">
                <div className="user">
                    <img src="/icons/user-icon.svg" alt="user" />
                </div>
                <div className="cart">
                    <img src="/icons/cart-icon.svg" alt="cart" />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header