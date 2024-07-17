import styled from "styled-components";



const EstiloBotonera = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 90%;
height: 59px;
padding: 0px;

`

const EstiloBoton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    background-color: transparent;

    img{
        width: 25px ;
        height: 28px;
    }

    button{
    width: 35%;
    padding: 2%;
    display: flex;
    align-items: center;
    font-size: 16px;
    background-color: transparent;
    color: black;
    font-weight: 600;
    border: none;
    gap: 15%;
    }

    button:hover{
    color:#2271D1;
    }
`

const BotoneraCard = ({ id,deleteHandler,cambiarMostrarEdit }) =>{

return  <EstiloBotonera>
<EstiloBoton>
    <button onClick={(e) => deleteHandler(id, e)}>
        <img src="src/Imagenes/basura.png" alt="Borrar" />
        Borrar
    </button>
    <button onClick={(e) => cambiarMostrarEdit()}>
        <img src="src/Imagenes/editar.png" alt="Editar" />
        Editar
    </button>
</EstiloBoton>
</EstiloBotonera>

}


export default BotoneraCard;