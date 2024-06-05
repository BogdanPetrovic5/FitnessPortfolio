import './Load.css'
import Logo from './images/LOGOFIZIO.png'
function Load(){
    return (
        <div className="loading-screen">
            <img src={Logo}></img>
        </div>
    )
}
export default Load;