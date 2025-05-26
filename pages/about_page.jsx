import { Link } from "react-router-dom"
import { useState } from "react";
import Navbar from "../components/Navbar";

function AboutPage(){
    return(
        <>
        <Navbar/>
        
        <div
  className="hero min-h-215"
  style={{
    backgroundImage:
      "url(https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_2560%2Cc_limit/100-best-games-hp-b.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About games and anime </h1>
      <p className="mb-5">
         wana know some of my old and new favorite games/anime  that might interest you to play or watch press one of these buttons that you see 
      </p>
      <button className="btn btn-primary"><Link to="/game">Games</Link></button>
      <button className="btn btn-primary"><Link to="/anime">Anime</Link></button>
    </div>
  </div>
</div>
        
        

      
        </>
    )
}

export default AboutPage