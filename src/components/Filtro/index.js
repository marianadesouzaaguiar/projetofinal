import img5 from "../../assets/undraw_Dev_focus.svg"
import img6 from "../../assets/undraw_proud_coder.svg"
import React, {useState, useEffect} from 'react'
import "./styles.css"


const Filtro = () =>{
    const [iniciativas, setIniciativas] = useState([]) 
    

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/marianadesouzaaguiar/api_womenintech/iniciativas")
        .then(response => response.json())
        .then(dados => setIniciativas(dados))
            },[])

    return(
        <div className="divmae">

        <div className="divfilha">     

            <h1 className="maintitle">Iniciativas de Inclusão de Mulheres em Programação</h1>
       
             {iniciativas.map(iniciativa=> (
                <div className="flex" key={iniciativa.id}>
                   <ul className="cards">
                       <li>{iniciativa.id}</li>
                       <li className="title"> {iniciativa.titulo}</li>
                       <li>{iniciativa.descricao}</li>
                       <li>Site: {iniciativa.site}</li>
                   </ul>
                </div>
                
        
        )) }

        <div className="imagens">
            <img src={img5} alt="dev focada" width="300px" height="350px"></img>
            <img src={img6} alt="coder focada" width="300px" height="350px"></img>

        </div>
        </div>  
   
    </div>
    
    )
}

export default Filtro
