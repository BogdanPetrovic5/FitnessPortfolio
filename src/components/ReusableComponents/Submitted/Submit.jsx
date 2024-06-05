import './Submit.css'
function Submit(){
    return(
        <div className="Submitted">
           <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

           <dotlottie-player 
                src="https://lottie.host/d9a488ba-4553-4714-9767-eafabe223bdf/I3pz0L1pg1.json" 
                background="transparent" 
                speed="1" 
                style={{ width: '20%', height: '30%' }} 
                loop 
                autoplay
            />
            <h1>
                Poruka uspesno poslata!
            </h1>
        </div>
    )
}
export default Submit