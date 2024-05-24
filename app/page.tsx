import Header from "./components/header/Header";

const slogan = "Add a Touch of Glamour to Your Hands"

export default function Home() {
  return (
    <body>
      <Header></Header>
      <div className="banner">
          <div className="img-box">
            <img src="/images/banner-img.png" alt="banner" className="img"/>
          </div>
          <div className="slogan">
            <h3 className="">
              {slogan.toUpperCase()}
            </h3>
          </div>
      </div>
    </body>
  );
}
