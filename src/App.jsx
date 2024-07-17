import EstilosGlobales from './Componentes/EstilosGlobales'
import { useState } from 'react'
import styled from 'styled-components'
import HeaderCabecera1 from './Componentes/Header1'
import BanerMain from './Componentes/BannerMain'
import ContenedorVideos from './Componentes/ContenedorVideos'
import FormularioEditar from './Componentes/FormularioEditar'
import FormularioNuevoVideo from './Componentes/FormularioNuevoVideo'
import axios from 'axios'




const FondoGradiente = styled.div`
background: rgb(2,0,36);
background: linear-gradient(148deg, rgba(2,0,36,1) 0%, rgba(14,14,94,1) 54%, rgba(1,73,88,1) 100%);width: 100%;
min-height: 100vh;
`

function App() {


  const [videos, setVideos] = useState([]);
  const[mostrar,setMostrar]=useState(false);
  const[mostrarEdit,setMostrarEdit]=useState(false);
  const cambiarMostrar=()=>{
    setMostrar(!mostrar)
    
  }
  const cambiarMostrarEdit=()=>{
    setMostrarEdit(!mostrarEdit)
    
  }
  const obtenerVideos = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3000/Videos');
      setVideos(respuesta.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FondoGradiente>
        <EstilosGlobales />
        <HeaderCabecera1 mostrar={mostrar} cambiarMostrar={cambiarMostrar} />
        <BanerMain />
        <ContenedorVideos videos={videos} obtenerVideos={obtenerVideos} cambiarMostrarEdit={cambiarMostrarEdit} />
       {mostrarEdit && <FormularioEditar obtenerVideos={obtenerVideos} cambiarMostrarEdit={cambiarMostrarEdit} />}
        {mostrar && <FormularioNuevoVideo obtenerVideos={obtenerVideos} cambiarMostrar={cambiarMostrar} />}
      </FondoGradiente>
    </>
  );
}

export default App;
