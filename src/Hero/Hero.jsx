import gato1 from '../images/cat1.jfif'
import gato2 from '../images/cat2.jfif'
import gato3 from '../images/cat3.jfif'
import gato4 from '../images/cat4.jfif'
import gato5 from '../images/cat5.jfif'
import gato6 from '../images/cat6.jfif'
import gato7 from '../images/cat7.jfif'
import gato8 from '../images/cat8.jfif'
import gato9 from '../images/cat9.jfif'
import gato10 from '../images/cat10.jfif'
import gato11 from '../images/cat11.jfif'
import gato12 from '../images/cat12.jfif'
import './Hero.css'

const Hero = () => {
    return(
        <> 
<div className="grid-container">

<img className="grid-item" src={gato1} alt="Imagem de Gato"/>
<img className="grid-item" src={gato2} alt="Imagem de Gato"/>
<img className="grid-item" src={gato3} alt="Imagem de Gato"/>



<img className="grid-item" src={gato4} alt="Imagem de Gato"/>
<img className="grid-item" src={gato5} alt="Imagem de Gato"/>



<img className="grid-item" src={gato6} alt="Imagem de Gato"/>



<img className="grid-item" src={gato7} alt="Imagem de Gato"/>
<img className="grid-item" src={gato8} alt="Imagem de Gato"/>
<img className="grid-item" src={gato9} alt="Imagem de Gato"/>



<img className="grid-item" src={gato10} alt="Imagem de Gato"/>
<img className="grid-item" src={gato11} alt="Imagem de Gato"/>



<img className="grid-item" src={gato12} alt="Imagem de Gato"/>


</div>
</>
)}

export default Hero;