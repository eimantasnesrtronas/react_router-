import { Link } from 'react-router-dom'

function Hero(){
    return(
        <>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to my page </h1>
      <p className="mb-5">
        Theres nothing in this page  press the About button to continiue 
      </p>
      <button className="btn btn-primary"><Link to="/about">About</Link></button>
    </div>
  </div>
</div>
        </>
    )
}
export default Hero