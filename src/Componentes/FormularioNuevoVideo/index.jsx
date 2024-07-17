import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const EstiloFormulario = styled.form`
  position: absolute;
  margin-top: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background-color: #1f1f1f;
  border-radius: 15px;
  border: 2px solid #ff0037;
  padding: 5%;

  h1 {
    font-size: 3vw;
    color: #fc8f00;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    text-align: center;
  }

  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: white;
    text-align: center;
  }

  img {
    width: 52px;
    height: 52px;
    margin-left: 45%;
  }
`;

const EstiloCampo = styled.div`
  margin-bottom: 20px;
  

  h2 {
    font-size: 18px;
    color: white;
    margin-bottom: 8px;
  }

  label {
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    font-size: 14px;
    color: white;
    margin-bottom: 8px;
    margin-top: 2%;
  }

  input {
    width: 100%;
    height: 62px;
    background-color: transparent;
    border-radius: 10px;
    border: 1.5px solid #ff0037;
    color: #ffffffe2;
    padding: 0 10px;
  }
  select{
    width: 100%;
    height: 62px;
    background-color: transparent;
    border-radius: 10px;
    border: 1.5px solid #ff0037;
    color: #ffffffe2;
    padding: 0 10px;
    appearance: none; /* Elimina la flecha predeterminada */
  -webkit-appearance: none; /* Elimina la flecha en Safari */
  -moz-appearance: none; /* Elimina la flecha en Firefox */

  }
  option{
    width: 100%;
    height: 62px;
    background-color: transparent;
    color: white;
  }


 select:focus {
  border-color: #ff0037;
  outline: none;
  box-shadow: 0 0 5px #fc8f00(0, 123, 255, 0.5);
}

 select option {
    border-radius: 10px;
    background-color:  #1f1f1f;
    color: #ffffff;
    padding: 10px;
    font-size: 16px;
}
`;

const CuadroBoton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const EstiloBoton = styled.button`
  width: 15%;
  height: 54px;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  border: 1.5px solid #ff0037;
  cursor: pointer;

  &:hover {
    color: #fc8f00;
    border: 1.5px solid #ffffff;
  }
`;

const FormularioNuevoVideo = ({cambiarMostrar, obtenerVideos }) => {
  const [url, setUrl] = useState('Ingresar url');
  const [titulo, setTitulo] = useState('Ingresar Titulo');
  const [categoria, setCategoria] = useState('')
  const [categories] = useState([
    { id: 'frontend', name: 'Front-End' },
    { id: 'backend', name: 'Back-End' },
    { id: 'innovation', name: 'Innovación y gestión' },
  ]);


  /*-------------GUARDAR------------------ */
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    try {
      console.log('submiting')
      const respuesta = await axios.post('http://localhost:3000/Videos',
        {
          url: url,
          titulo: titulo,
          categoria: categoria,
        });
      obtenerVideos();
      cambiarMostrar();
      

    } catch (error) {
      console.log(error);
    }

  }

  /*---------------LIMPIAR---------------- */


  const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setUrl('');
  }

  

  /*------------------------------- */

  return (
    <EstiloFormulario onSubmit={handleSubmit}>
      <img style={{ cursor: "pointer" }} src="src/Imagenes/delete1.png" alt="Imagen" onClick={cambiarMostrar}/>
      <h1>NUEVO VIDEO</h1>
      <h3>Complete el formulario para crear una nueva tarjeta de video</h3>

      <EstiloCampo>
        <label htmlFor="titulo">Titulo:</label>
        <input type="text" id="titulo" placeholder="Ingrese titulo" value={titulo}onChange={(e) => {
          setTitulo(e.target.value)
          console.log(titulo)
        }} required />

        <label htmlFor="categoria">Categoria:</label>

        <select
          id="categoria"
          value={categoria}
          onChange={(e) => {
            setCategoria(e.target.value);
            console.log(e.target.value); // Asegúrate de capturar el valor correcto
          }}
          required
        >
          <option value="">Seleccione Categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <label htmlFor="imagen">Video:</label>
        <input type="text" id="url_video" 
        placeholder="Ingresar url" 
        value={titulo}
        onChange={(e) => {
          setUrl(e.target.value)
          console.log(url)
        }} required />


      </EstiloCampo>

      <CuadroBoton>
        <EstiloBoton type='submit'>Guardar</EstiloBoton>
        <EstiloBoton type="button" onClick={handleClear}>Limpiar</EstiloBoton>
      </CuadroBoton>
    </EstiloFormulario>
  );
};

export default FormularioNuevoVideo;
