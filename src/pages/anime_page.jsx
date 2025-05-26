import Navbar from "../components/Navbar"


function Anime_Page(){
return(
    <>
        <Navbar/>
        <div className="flex gap-30 ">
            <div className="flex gap-10">
  
  <div className="card bg-base-100 w-85 shadow-sm">
    <figure>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/250px-Shingeki_no_Kyojin_manga_volume_1.jpg"
        alt="Attack on Titan"
      />
    </figure>
    <div className="card-body">
      <h2 className="text-center font-bold">Attack on Titan</h2>
      <p className="text-center">What is Attack on Titan about?</p>
      <button className="btn" onClick={() => document.getElementById('modal_aot').showModal()}>
        Learn more
      </button>
      <dialog id="modal_aot" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">In short words</h3>
          <p className="py-4">
            Attack on Titan follows the fate of mankind, who, after being decimated by giant monsters,
            retreat behind three great circular walls. The last survivors live in a rudimentary, medieval society.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>

  
  <div className="card bg-base-100 w-85 shadow-sm">
    <figure>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/43/Dragon_Ball_Super_Volume_1.png"
        alt="Dragon Ball Super"
      />
    </figure>
    <div className="card-body">
      <h2 className="text-center font-bold">Dragon Ball Super</h2>
      <p className="text-center">What is Dragon Ball Super about?</p>
      <button className="btn" onClick={() => document.getElementById('modal_dbs').showModal()}>
        Learn more
      </button>
      <dialog id="modal_dbs" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">In short words</h3>
          <p className="py-4">
            After decades of slumber, Beerus, the god of destruction, seeks to fight Goku, the Super Saiyan God.
            Goku battles to save Earth from destruction.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>

 
  <div className="card bg-base-100 w-85 shadow-sm">
    <figure>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg"
        alt="Jujutsu Kaisen"
      />
    </figure>
    <div className="card-body">
      <h2 className="text-center font-bold">Jujutsu Kaisen</h2>
      <p className="text-center">What is Jujutsu Kaisen about?</p>
      <button className="btn" onClick={() => document.getElementById('modal_jjk').showModal()}>
        Learn more
      </button>
      <dialog id="modal_jjk" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">In short words</h3>
          <p className="py-4">
            Yuji Itadori joins a secret group of Jujutsu Sorcerers to defeat Ryomen Sukuna, a powerful Curse
            he unwillingly becomes host to.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</div>


        </div>
    </>
)
}

export default Anime_Page