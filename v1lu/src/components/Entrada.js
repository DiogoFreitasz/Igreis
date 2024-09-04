import {useState} from "react"; 
import './Entrada.css'

function Entrada(){ 
    const [numero, setNumero] = useState("");
    const [numeros, setNumeros] = useState([]); 

    const adicionarNumero = (e) => { 
        if(numero !== ""){ 
            e.preventDefault();
            setNumeros([...numeros, numero]);
            setNumero("");
        } 
        console.log("FLAMENGO")
    } 

    return(
        <div>
          <form onSubmit={adicionarNumero}>
              <div>
                  <label htmlFor="numero">
                      <input 
                      type="text"
                      id="numero"
                      name="numero"
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      placeholder="Digite um número..."
                      />
                  </label>
              </div>
              <div>
                  <input
                  type="submit"
                  value="Adicionar um número"/>
              </div>
          </form>

        <div>
            <h2>Números Adicionados:</h2>
            <ul>
                {numeros.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>

        </div> 
      );

} //FECHA O BLOCO DA FUNCTION ENTRADA 

    
export default Entrada; //AQUI EU TO EXPORTANTO O COMPONENTE ENTRADA PARA O APP.JS