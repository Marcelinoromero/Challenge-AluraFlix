import styled from "styled-components"


const EstiloBanner = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
color: white;
padding:  2px;
gap: 2%;
    
background-image: url("src/Imagenes/Banner.jpg");
background-size: cover; /* Otras opciones: contain, auto */
background-repeat: no-repeat; /* Otras opciones: repeat, repeat-x, repeat-y */
background-position: center center;
width:100%;
min-height: 100vh;

img{
    width:40%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 0px 17px 8px #6bd1ff inset;
}

`
const EstiloTexto = styled.text`

    text-align: start;
    width: 50%;
    height: 30%;

    h1{
    font-family: Arial, Helvetica, sans-serif;
    width: max-content;
    height: auto;
    padding: 2%;
    border-radius: 15px;
    background-color: #6bd1ff;
    color: white;
    font-size: 48px;
 }
h2{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 200;
    font-size:45px;
    color: white;
} 
p{
    
}
`


const BanerMain = () => {

    return <EstiloBanner>
        <>
            <EstiloTexto>
                <h1>FRON END</h1>
                <h2>Challenge React</h2>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </EstiloTexto>
        </>

        <>
            <img src="src\Imagenes/foto1Banner.png" alt="fotoBaner" />
        </>

    </EstiloBanner>

}

export default BanerMain;