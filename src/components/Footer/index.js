import Img2 from "../../assets/icons8-github.svg"
import Img3 from "../../assets/icons8-linkedin.svg"
import "./styles.css"

const Footer = () => {
    return (
    
    <div className="rodape">

        <div className="autora">

        <h3><strong>DESENVOLVIDO POR MARIANA AGUIAR - ON10TODASEMTECH - REPROGRAMA</strong></h3>

        </div>

        <div className="social-media">

        <a href="https://www.linkedin.com/in/marianadesouzaaguiar/" rel="noreferrer" target="_blank" >
        <img src={Img3} alt="Imagem do logo do Linkedin" width="30px" height="30px"/>
        </a>
                

        <a href="https://github.com/marianadesouzaaguiar/" rel="noreferrer" target="_blank" >
            <img src={Img2} alt="Imagem do logo do Github" width="30px" height="30px" />
        </a>
        
        </div>

       
    </div>
    )
}
export default Footer