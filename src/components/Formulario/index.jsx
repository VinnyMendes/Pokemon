import React, { useContext } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import { useQuery } from "react-query";
import { obterTipos } from "../../services/tipos";
import { ContextoFormulario } from "../../context/contextoFormulario";

/**
 * Componente que exibe os inputs do formulário.
 *
 * @returns {JSX.Element}
 */
const Formulario = () => {

  const { handleInputBlur } = useContext(ContextoFormulario);

  const { data, isLoading, error } = useQuery(
    "obterTipos",
    obterTipos
  );

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">

            <div className="inputs">
              <div>
                <p className="nome-secao">
                  <img src={treinador} alt="treinador" />
                  <span>Treinador</span>
                </p>
                <Input name="nome" label="Nome" shouldFocus={true} />
                <Input name="apelido" label="Apelido" />
                <Input name="email" label="Email" type="email" />
              </div>
              <div>
                <p className="nome-secao">
                  <img src={pikachu} alt="pikachu" />
                  <span>Pokémon</span>
                </p>
                <Input name="nomePokemon" label="Nome" isPokemon={true} />

                <Input select name="nomePokemon" label="Nome" isPokemon={true} />

                <div className="input-receptor">
                  <label htmlFor='tipoPokemon'>Tipo</label>
                  <select name="tipoPokemon" label="Tipo" 
                  onBlur={(e)=> handleInputBlur("ATUALIZAR_POKEMON", {
                      campo: 'tipoPokemon',valor: e.target.value})}>

                    {isLoading? <option>Carregando personagens...</option> : 
                    error ? <option>Algo deu errado...</option> : 
                    data?.results?.length ? data.results.map(tipo=>(
                      <option key={tipo.name}  value={tipo.name}>
                        {tipo.name}
                      </option>
                    )) : null}
                  </select>
                </div>

                <Input name="elementoPokemon" label="Elemento" isPokemon={true} />
                <Input name="alturaPokemon" label="Altura" isPokemon={true} />
                <Input name="idadePokemon" label="Idade" isPokemon={true} />
              </div>
            </div>
            <Detalhe />

        </div>
      </div>
    </>
  );
};

Formulario.propTypes = {};

export default Formulario;
