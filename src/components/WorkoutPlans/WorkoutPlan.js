import './WorkoutPlans.css'
import Weights from './NESTOKAO2.jpg'
function WPlans(){
    return(
		
        <section className="Workout-Plans" style={{ backgroundImage: `url(${Weights})` }} >
			<div className='Workout-Title' style={{ backgroundImage: `url(/assets/prim.png)` }} >
				<h1 data-aos="fade-down"
     				data-aos-offset = "-100"
					data-aos-duration = "700">
					IZABERI SVOJ PLAN PROGRAMA!
				</h1>
				<p  data-aos="fade-down"
     				data-aos-offset = "-100"
					data-aos-duration = "700">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly</p>
			</div>
            
            <section  className="Workout-Plans-Wrap" >
				<div class="card" data-aos="flip-left" data-aos-duration="1000">
					<div class="content">
						<div class="title">STANDARD</div>
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
							<img src='/assets/x1.png'></img>	Nedeljne konsultacije
							</p>
						</div>
						<button>
						Buy now
						</button>
					</div>
						
				</div>

				<div class="card" data-aos="flip-left" data-aos-duration="1000" >
      <div class="content">
        <div class="title">ADVANCED</div>
        <div class="price">$29.99</div>
        <div class="description"><p>
		<img src='/assets/check.png'></img>	4x nedeljno
							</p>
							<p>
							<img src='/assets/check.png'></img>	Plan Treninga
							</p>
							<p>
							<img src='/assets/check.png'></img>	Ishrana
							</p>
							<p>
							<img src='/assets/x1.png'></img>	Nedeljne konsultacije
							</p>
							</div>
							<button>
          Buy now
        </button>
      </div>
       
  </div>

  <div class="card" data-aos="flip-left" data-aos-duration="1000" >
      <div class="content">
        <div class="title">PREMIUM</div>
			<div class="price">$59.99</div>
			<div class="description"><p>
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
							</p></div>
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