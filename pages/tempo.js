import Link from 'next/link'


function tempo(props){
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()
    
    return (<div> 
        <div> <h1>Tempo</h1> </div>
        <Link href='/'>
            <a>Acessar página Home</a>
        </Link>
        <div> {dynamicDateString} (dinâmico) </div>
        <div> {props.staticDateString} (estático) </div>
        
        
        </div>)

}

export async function getStaticProps(){
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default tempo