import React from 'react';
import styled from 'styled-components';

const EstiloFormulario = styled.div`
  position: absolute;
  margin-top: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background-color: #0611a7;
  border-radius: 15px;
  border: 2px solid aqua;
  padding: 5%;

  h1 {
    font-size: 3vw;
    color: #0077ff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    color: white;
    text-align: start;
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
    border: 1.5px solid #0059ff;
    color: #ffffffe2;
    padding: 0 10px;
  }
  select{
    width: 100%;
    height: 62px;
    background-color: transparent;
    border-radius: 10px;
    border: 1.5px solid #0059ff;
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
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

 select option {
    border-radius: 10px;
    background-color:  #0611a7;
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
  border: 1.5px solid #0059ff;
  cursor: pointer;

  &:hover {
    color: #00e1ff;
    border: 1.5px solid #ffffff;
  }
`;

const FormularioEditar = () => {
    return (
        <EstiloFormulario>
            <img src="src/Imagenes/delete.png" alt="Imagen" />
            <h1>EDITAR CARD:</h1>

            <EstiloCampo>
                <label htmlFor="titulo">Titulo:</label>
                <input type="text" id="titulo" placeholder="Ingresar Titulo" required />

                <label htmlFor="categoria">Categoria:</label>

                <select id="categoria" required>
                    <option value="">Seleccione Categoria</option>
                    <option value="categoria1">Categoría 1</option>
                    <option value="categoria2">Categoría 2</option>
                    <option value="categoria3">Categoría 3</option>
                </select>

                <label htmlFor="imagen">Imagen:</label>
                <input type="text" id="url_imagen" placeholder="Ingresar dirección" required />

                <label htmlFor="imagen">Video:</label>
                <input type="text" id="url_video" placeholder="Ingresar url" required />

                <label htmlFor="textoEntrada">Descripción:</label>
                <input type="text" id="textoEntrada" placeholder="Ingrese su descripción aquí" required />
    
            </EstiloCampo>

            <CuadroBoton>
                <EstiloBoton>Guardar</EstiloBoton>
                <EstiloBoton>Limpiar</EstiloBoton>
            </CuadroBoton>
        </EstiloFormulario>
    );
};

export default FormularioEditar;
