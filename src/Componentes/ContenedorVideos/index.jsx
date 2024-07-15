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





const ContenedorVideos = () => {
    const [videos, setVideos] = useState([]);

    const obtenerVideos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/Videos');//ACA HACEMOS LA PETICION CON AXIOS, PARA LUEGO CONVERTIRLA EN LISTA
            setVideos(respuesta.data);
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        obtenerVideos();
    }, []);

    return <EstiloSeccion>
        {videos.map((video) => (<VideoCard />))}
      


    </EstiloSeccion>

}


export default ContenedorVideos;