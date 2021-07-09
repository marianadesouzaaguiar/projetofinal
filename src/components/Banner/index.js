import React from "react"
import { Link } from 'react-router-dom'

import "./styles.css"

        const Banner = () => {
            return (
            <>    
                <div className="background">

                </div>

                
                <div className="main">
                
                <p>A área de TI é super aquecida, contudo em sua composição contamos com apenas 20% de mulheres. A pandemia veio para agravar ainda mais a situação da desigualdade de gênero visto que ainda somos as principais responsáveis pelas tarefas domésticas. Ou seja, muitas mulheres perderam suas fontes de renda para se dedicar aos cuidados de outras pessoas (idosos e crianças) e do lar. Com isto, a expectativa de superar esse gap era prevista para daqui a 99 anos e saltou para 130. Neste projeto será disponibilizado um aparato reunido por mim no meu processo de transição de carreira com iniciativas diversas para ensino de programação às mulheres. Espero que meu projeto possa colaborar para outras mulheres que estejam iniciando esta jornada.</p>
                <Link to="/iniciativas"> <button className="button">CONHEÇA AS INICIATIVAS</button></Link>

                </div>
            </>    
            )
        }

        export default Banner




