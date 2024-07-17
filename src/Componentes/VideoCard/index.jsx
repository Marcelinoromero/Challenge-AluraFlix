import styled from "styled-components";
import BotoneraCard from '../BotoneraCard'


const EstiloCard = styled.div` 
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
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




const VideoCard = ({key,titulo,url,id,categoria,deleteHandler,cambiarMostrarEdit}) => {

    return <EstiloCard>

        <iframe width="95%" height="600px" src={url} title={titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
           <BotoneraCard id={id} deleteHandler={deleteHandler} cambiarMostrarEdit={cambiarMostrarEdit} />
    </EstiloCard>


}

export default VideoCard;