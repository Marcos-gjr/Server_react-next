import Link from 'next/link'
import { useState } from 'react'

function home(){
    return (<div> 
        <div><h1>Home</h1></div>
        <div>Bom dia Rodrigo</div>
        <Contador />
        <Link href="/tempo">
            <a>Acessar página tempo</a>
        </Link>
        
        </div>)

}

function Contador(){
    const [contador, setContador] = useState(1)

    function adicionarContador(){
        setContador(contador + 1)

    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adcionar</button>
        </div>

    )

}

export default home