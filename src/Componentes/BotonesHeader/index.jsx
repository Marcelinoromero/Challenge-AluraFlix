import styled from "styled-components"


const EstilosBoton = styled.button`
display: flex;
width: 390px;
gap: 25px;
justify-content: space-between;
background-color: transparent;
border: none;

button{

font-family: Arial, Helvetica, sans-serif;
width:180px ;
height: 54px;
background: transparent;
color: #ffffff ;
border-radius: 10px;
border: 2px solid #ffffff;

font-size: 12px;
font-weight: 500;
text-align: center;

}

button:hover{
    background-color: #000000E5;
    color:#2271D1;
    border-radius: 10px;
    border: 2px solid #2457ff;
    box-shadow: 0px 0px 12px 4px #2271D1 inset;
}

`


function BotonesHeader({ mostrar, cambiarMostrar }) {
    return <EstilosBoton>
        {console.log}
        <button alt="Home"><h2> HOME </h2></button>
        <button alt="Nuevo Video" onClick={() => {
            if (mostrar) { }
            else {
                cambiarMostrar();
            }

        }}><h2> NUEVO VIDEO </h2></button>
    </EstilosBoton>;
}


export default BotonesHeader;