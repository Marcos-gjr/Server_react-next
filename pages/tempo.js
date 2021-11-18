import Link from 'next/link'


function tempo(props){
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toUTCString()
    
    const dynamicLocal = new Date()
    const dynamicLocalString = dynamicLocal.toLocaleString()

    return (<div> 
        <div> <h1>Tempo</h1> </div>
        <Link href='/'>
            <a>Acessar página Home</a>
        </Link>
        
        <div> {dynamicDateString} (Einâmico) </div>
        <div> {props.staticDateString} (Estático) </div>
        <div> --------------------------------------------------------------------- </div>
        <div> {dynamicLocalString} (Dinâmico Local) </div>
        <div> {props.staticLocalString} (Estático Local) </div>
        
        </div>)

}

export async function getStaticProps(){
    const staticDate = new Date()
    const staticDateString = staticDate.toUTCString()

    const staticlocal = new Date()
    const staticLocalString = staticlocal.toLocaleString()

    return {
        props: {
            staticDateString,
            staticLocalString
        },
        revalidate: 1
    }
}

// função que simula delay 
// const delay = ms => new Promise(resolve => setTimeout(resolve,ms))

export default tempo