import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return (

        
        <div className="main-menu">

            <Link className="titulo" to="/">#WOMENINTECH</Link>
   
           
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
               
                <li>
                    <Link className="link" to="/autora">Sobre a Autora</Link>
                </li>

                <li>
                    <Link className="link" to="/iniciativas">Iniciativas</Link>
                </li>
            
            </ul>
        </div>
    )
}

export default Menu