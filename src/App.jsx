import EstilosGlobales from './Componentes/EstilosGlobales'
import { useState } from 'react'
import styled from 'styled-components'
import HeaderCabecera1 from './Componentes/Header1'
import BanerMain from './Componentes/BannerMain'
import ContenedorVideos from './Componentes/ContenedorVideos'
import FormularioEditar from './Componentes/FormularioEditar'
import FormularioNuevoVideo from './Componentes/FormularioNuevoVideo'




const FondoGradiente = styled.div`
background: rgb(2,0,36);
background: linear-gradient(148deg, rgba(2,0,36,1) 0%, rgba(14,14,94,1) 54%, rgba(1,73,88,1) 100%);width: 100%;
min-height: 100vh;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FondoGradiente>
    <EstilosGlobales/>
    <HeaderCabecera1/>
    <BanerMain/>
    <ContenedorVideos/>
    
    <FormularioEditar/>
    <FormularioNuevoVideo/>
    </FondoGradiente>
    </>
  )
}

export default App;
