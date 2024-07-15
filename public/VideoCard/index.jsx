import styled from "styled-components";
import BotoneraCard from "./BotoneraCard";


const EstiloCard = styled.div` 
    width: 35%;
    height: 260px;
    border-radius:15px, 15px, 0px, 0px;
    border-color: 2px solid white;

    video{
        width:100%;
        height: 260px;
        border-radius:15px, 15px, 0px, 0px;
    }
`




const VideoCrad = () =>{

    return <EstiloCard>

    <video  height="360" src="" poster="src/Imagenes/foto1Banner.png"></video>
    <BotoneraCard/>
    </EstiloCard>


}

export default VideoCrad;