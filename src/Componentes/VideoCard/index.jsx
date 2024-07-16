import styled from "styled-components";
import BotoneraCard from '../BotoneraCard'


const EstiloCard = styled.div` 
    display: flex;
    flex-direction: column;
    width: 30%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: white;
    padding:2px;
    border-radius: 15px;
    

    video{
        width:100%;
        height:auto ;
        
    }
    iframe{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
   
`




const VideoCard = (props) => {

    return <EstiloCard>

        <iframe width="95%" height="" src={props.url} title={props.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    <BotoneraCard id={props.id} deleteHandler={props.deleteHandler} />
    </EstiloCard>


}

export default VideoCard;