import './WorkoutPlans.css'
import Weights from './images/weights.jpg'
function WPlans(){
    return(
		
        <section className="Workout-Plans" >
			<div className='Workout-Plans-Bg' style={{ backgroundImage: `url(${Weights})` }}>

			</div>
			<div className='Workout-Title'>
				<div className='Workout-Title-Text'>
					<div className='Workout-h2'>
						<div>
							
						</div>
						<h2>Personalni treninzi</h2>
					</div>
					<h1 data-aos="fade-down"
						data-aos-offset = "-100"
						data-aos-duration = "700">
						IZABERI SVOJ PLAN PROGRAMA!
					</h1>
				</div>
				
				<button>
					VIŠE O PLANOVIMA
				</button>
			</div>
            
            <section  className="Workout-Plans-Wrap" >
				<div class="card" data-aos="flip-left" data-aos-duration="1000">
					<div class="content">
						<div class="title">
							<h1>STANDARD</h1>
						</div>
						<div class="price">$12.99</div>
						<div class="description">
							<p>
								<img src='/assets/check.png'></img>	3x nedeljno
							</p>
							<p>
								<img src='/assets/check.png'></img>	Plan treninga
							</p>
							<p>
								<img src='/assets/check.png'></img>	Ishrana
							</p>
							<p>
								<img src='/assets/x.png'></img>	Nedeljne konsultacije
							</p>
						</div>
						<button>
							Buy now
						</button>
					</div>
				</div>

				<div class="card" data-aos="flip-left" data-aos-duration="1000" >
					<div class="content">
						<div class="title">
							<h1>Napredni</h1>
						</div>
						<div class="price">
							$29.99
						</div>
						<div class="description">
							<p>
								<img src='/assets/check.png'></img>	
								4x nedeljno
							</p>
							<p>
								<img src='/assets/check.png'></img>	
								Plan Treninga
							</p>
							<p>
								<img src='/assets/check.png'></img>	
								Ishrana
							</p>
							<p>
								<img src='/assets/x.png'></img>	Nedeljne konsultacije
							</p>
						</div>
						<button>
							Buy now
						</button>
      				</div>
  				</div>

			
				<div class="card" data-aos="flip-left" data-aos-duration="1000" >
					<div class="content">
						<div class="title">
							<h1>
								PRemium
							</h1>
						</div>
						<div class="price">
							$59.99
						</div>
						<div class="description">
							<p>
								<img src='/assets/check.png'></img>	5x nedeljno
							</p>
							<p>
								<img src='/assets/check.png'></img>	Plan treninga
							</p>
							<p>
								<img src='/assets/check.png'></img>	Ishrana
							</p>
							<p>
								<img src='/assets/check.png'></img>	Nedeljne konsultacije
							</p>
						</div>
						<button>
							Buy now
						</button>
					</div>
				</div>
            </section>
		</section>
    );
}
export default WPlans;