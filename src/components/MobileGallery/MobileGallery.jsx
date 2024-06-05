import './MobileGallery.css'
import React from 'react'

function MobileGallery(){
    return(
        <div className='Mobile-Gallery' id='Gallery'>
            <div className="divMob1 Mobile-Div" > <div style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
            <div className="divMob2 Mobile-Div"> <div  style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
            <div className="divMob4 Mobile-Div" > <div style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
            <div className="divMob5 Mobile-Div" > <div style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
            <div className="divMob6 Mobile-Div"> <div  style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
            <div className="divMob7 Mobile-Div"> <div  style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
            <div className="divMob8 Mobile-Div"> <div  style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}></div> </div>
        </div>
    )
}
export default MobileGallery;