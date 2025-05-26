import { useState } from "react";
function Card(){
    return(
        <>
  <div className="flex gap-30 ">
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
<button className="btn" onClick={()=>document.getElementById('modal_coc').showModal()}>Learn more </button>
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

<div className=" card bg-base-100 w-85 mx-8  shadow-sm   ">
  <figure>
    <img
      src="https://deadline.com/wp-content/uploads/2022/12/God-of-War.jpg"
      alt="Mobile_games" />
  </figure>
  <div className="card-body">
    <h2 className="text-center font-bold  ">God of war </h2>
    <p className=" text-center">What is God of war about</p>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('modal_gfw').showModal()}>Learn more </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">In short words</h3>
    <p className="py-4">After wiping out the gods of Mount Olympus, Kratos moves on to the frigid lands of Scandinavia, where he and his son must embark on an odyssey across a dangerous world of gods and monsters.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
  </div>
</div>

      <div className=" card bg-base-100 w-85 mx-8  shadow-sm   ">
  <figure>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg"
      alt="Mobile_games" />
  </figure>
  <div className="card-body">
    <h2 className="text-center font-bold  ">Uncharted 4</h2>
    <p className=" text-center">What is Uncharted about</p>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('modal_uncharted').showModal()}>Learn more </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">In short words</h3>
    <p className="py-4">Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
  </div>
</div>

   <div className=" card bg-base-100 w-85 mx-8  shadow-sm   ">
  <figure>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/a/a9/Astro_Bot_cover_art.jpg"
      alt="Mobile_games" />
  </figure>
  <div className="card-body">
    <h2 className="text-center font-bold  ">Astrobot</h2>
    <p className=" text-center">What is Astrobot about</p>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('modal_ab').showModal()}>Learn more </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">In short words</h3>
    <p className="py-4">Astro Bot sees the titular Astro on a quest to collect pieces of his crashed PS5-themed spaceship and rescue his crew. Throughout the game, Astro will venture from planet-to-planet as he solves puzzles, battles enemies, and traverse dozens of themed stages.</p>
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