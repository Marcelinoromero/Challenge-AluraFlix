import styled from "styled-components";
import VideoCard from "../VideoCard"
import { useState,useEffect } from "react";
import axios from "axios";


const EstiloSeccion = styled.div`
    display: flex;
    flex-wrap:wrap ;
    justify-content: space-evenly;
    background-color: #00000049;
    gap: 5px;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    padding: 20px 0 20px 0;
`





const ContenedorVideos = ({ videos, obtenerVideos,cambiarMostrarEdit }) => {
    useEffect(() => {
      obtenerVideos();
    }, [obtenerVideos]);


    const deleteHandler = (id, e) => {
        axios.delete(`http://localhost:3000/Videos/${id}`)
            .then((response) => {
                console.log(response);
                obtenerVideos();
            })
            .catch((error) => {
                console.log(error);
            });
    }
  
    return <EstiloSeccion>
        {videos.map(
            (video) => 
            (<VideoCard
            key={video.id}     
            url={video.url}
            id={video.id}
            categoria={video.categoria}
            titulo={video.titulo}
            deleteHandler={deleteHandler}
            cambiarMostrarEdit={cambiarMostrarEdit}
            
            />))}
      


    </EstiloSeccion>

}


export default ContenedorVideos;