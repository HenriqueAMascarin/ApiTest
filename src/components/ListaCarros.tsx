import { useEffect, useState } from "react";
import axios from "axios";
import { UlStyled } from "./components.styled";

type carro = [
    {   
        id: number | string, 
        marca: string, 
        modelo:string
    }
]

export default function ListaCarros(){

    const [carros, setCarros] = useState<carro>([{id: "indefinido",marca: "indefinido", modelo: "indefinido"}]);
    
    useEffect(() =>{
        axios.get('https://cfbcursosapireactexemplo1.luckthegamers.repl.co')
            .then(res => {
                const dadosCarros = res.data;
                setCarros(dadosCarros);
            })

            // OU COM O FETCH(QUE NÃO PRECISA DE EXTENSÃO)
        // fetch('https://cfbcursosapireactexemplo1.luckthegamers.repl.co')
        //     .then(res => res.json())
        //     .then((resultado) => {
        //         setCarros(resultado);
        //     })
    },[])

    return(
        <UlStyled>
            {carros.map((carro) => <li key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</li>)}
        </UlStyled>
    )
}