import styled from "styled-components";
import BotonesHeader from "../BotonesHeader";


const HeaderEstlizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background: var(--Dark-Grey, #262626);

    img{
        width: 168.45px;
        height: 40px;
    }
`


const HeaderCabecera1= () => {
    return <HeaderEstlizado>
    <img src="src\Imagenes/Logo2.png"  alt="Logo Alura Flix"/>
    <BotonesHeader/>
    </HeaderEstlizado>
}

export default HeaderCabecera1;
