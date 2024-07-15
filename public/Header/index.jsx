import styled from "styled-components";
import BotonesCabecera from "../BotonesCabecera";


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


const HeaderCabecera= () => {
    return <HeaderEstlizado>
    <img src="src\Imagenes/Logo2.png"  alt="Logo Alura Flix"/>
    <BotonesCabecera/>
    </HeaderEstlizado>
}

export default HeaderCabecera;
