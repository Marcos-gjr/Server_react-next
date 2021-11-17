import Link from 'next/link'

function home(){
    return (<div> 
        <div><h1>Home</h1></div>
        
        <Link href="/tempo">
            <a>Acessar página tempo</a>
        </Link>

        </div>)

}

export default home