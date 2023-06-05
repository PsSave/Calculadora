import { Component } from "react";
import Botao from "../components/botao/index.jsx";
import Display from "../components/display/index.jsx";
import "./calculadora.css";

class Calculadora extends Component{

  constructor(props) {
    super(props)
    this.Limpar = this.Limpar.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDig = this.addDig.bind(this)
  }

  Limpar(){
    console.log('limpar');
  }

  setOperation(operation){
    console.log(operation);
  }

  addDig(n) {
    console.log(n);
  }

  render() {
    return <>
      <h1>CALCULADORA</h1>
      <div className="calculadora">
        <Display value="100"/>
        <Botao value="AC" click={this.Limpar} triple/>
        <Botao value="/" click={this.setOperation} operation/>
        <Botao value="7" click={this.addDig}/>
        <Botao value="8" click={this.addDig}/>
        <Botao value="9" click={this.addDig}/>
        <Botao value="*" click={this.setOperation} operation/>
        <Botao value="4" click={this.addDig}/>
        <Botao value="5" click={this.addDig}/>
        <Botao value="6" click={this.addDig}/>
        <Botao value="-" click={this.setOperation} operation/>
        <Botao value="1" click={this.addDig}/>
        <Botao value="2" click={this.addDig}/>
        <Botao value="3" click={this.addDig}/>
        <Botao value="+" click={this.setOperation} operation/>
        <Botao value="0" click={this.addDig} double/>
        <Botao value="." click={this.setOperation}/>
        <Botao value="=" click={this.addDig} operation/>
      </div>
    </>;
  }
}

export default Calculadora;
