import styled from "styled-components";



const EstiloBotonera = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 59px;
border-radius:0px, 0px, 15px, 15px;

background-color: white;
`

const EstiloBoton = styled.button`
    display: flex;
    align-items: center;
    width: 50%;
    font-size: 16px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;

    img{
        width: 25px ;
        height: 28px;
    }
`

const BotoneraCard = () =>{

return <EstiloBotonera>

    <EstiloBoton>

    <button>
    <img src="src/Imagenes/basura.png" alt="Borrar" />
    Borrar
    </button>
    <button>
    <img src="src/Imagenes/editar.png" alt="Borrar" />
    Editar
    </button>

    </EstiloBoton>

</EstiloBotonera>

}


export default BotoneraCard;