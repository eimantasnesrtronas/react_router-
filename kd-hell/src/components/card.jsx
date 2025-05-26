import { useState } from "react";
function Card(){
    return(
        <>
  <div className="join  ">     
  <div className=" card bg-base-100 w-85  shadow-sm  ">
  <figure>
    <img
      src="https://icon2.cleanpng.com/lnd/20241221/hw/27a1b93043ee85c6058207482c2b8e.webp"
      alt="Mobile_games" />
  </figure>
  <div className="card-body">
    <h2 className="text-center font-bold  ">Clash of Clans</h2>
    <p className=" text-center">What is clash of clans about</p>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Learn more </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">In short words</h3>
    <p className="py-4">The game is set in a fantasy-themed persistent world where the player is the chief of a village. Clash of Clans tasks players to build their own village using the resources gained from attacking other players' villages with troops, earning rewards, buying them with medals or by producing them at their own village.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
  </div>
</div>

<div className=" card bg-base-100 w-85  shadow-sm  ">
  <figure>
    <img
      src="https://icon2.cleanpng.com/lnd/20241221/hw/27a1b93043ee85c6058207482c2b8e.webp"
      alt="Mobile_games" />
  </figure>
  <div className="card-body">
    <h2 className="text-center font-bold  ">Clash of Clans</h2>
    <p className=" text-center">What is clash of clans about</p>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Learn more </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">In short words</h3>
    <p className="py-4">The game is set in a fantasy-themed persistent world where the player is the chief of a village. Clash of Clans tasks players to build their own village using the resources gained from attacking other players' villages with troops, earning rewards, buying them with medals or by producing them at their own village.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
  </div>
</div>
</div>
        </>
    )
}
export default Card