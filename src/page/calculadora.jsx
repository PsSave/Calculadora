import Botao from "../components/botao/index.jsx";
import Display from "../components/display/index.jsx";
import "./calculadora.css";

function Calculadora() {
  return <>
    <h1>CALCULADORA</h1>
    <div className="calculadora">
      <Display value="100"/>
      <Botao value="AC"/>
      <Botao value="/"/>
      <Botao value="9"/>
      <Botao value="8"/>
      <Botao value="7"/>
      <Botao value="*"/>
      <Botao value="6"/>
      <Botao value="5"/>
      <Botao value="4"/>
      <Botao value="-"/>
      <Botao value="3"/>
      <Botao value="2"/>
      <Botao value="1"/>
      <Botao value="+"/>
      <Botao value="0"/>
      <Botao value="="/>
      <Botao value="."/>
    </div>
  </>;
}

export default Calculadora;
