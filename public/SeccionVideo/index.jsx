import styled from "styled-components";
import VideoCrad from "../VideoCard";


const EstiloSeccion = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #00000049;
    gap: 5px;
    width: 100%;
    min-height: 100vh;
    padding: 10px;
`


const SeccionVideo = () =>{

    return <EstiloSeccion>

    <VideoCrad/>
    <VideoCrad/>
    <VideoCrad/>

    </EstiloSeccion>

}


export default SeccionVideo;