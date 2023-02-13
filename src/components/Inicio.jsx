import './css/Inicio.css'
import banner1 from '../imagenes/banner1.png'
const Inicio = ({title, intro,buy}) => {

return (

<div className='inicio'>    
    <div>
        <h1>{title}</h1>
    </div>
    <div>
        <h2>{intro}</h2>
    </div>
    <div>
            <img src={banner1} alt="" />
        </div>
    <div>
        <h3>{buy}</h3>
    </div>
</div>
    

)


}

export default Inicio