import { useState } from "react";
function Card(){
    return(
        <>
  <div className=" card bg-base-100 w-65  shadow-sm  ">
  <figure>
    <img
      src="https://images.ctfassets.net/vfkpgemp7ek3/1068706992/349caecfad187ca862a237dbf3629405/2016-top-mobile-games-hero.jpg"
      alt="Mobile_games" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Mobile Games</h2>
    <p>this card is about mobile games </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">learn more</button>
    </div>
  </div>
</div>
        </>
    )
}
export default Card