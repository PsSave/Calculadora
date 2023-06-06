import { Component } from "react";
import Botao from "../components/botao/index.jsx";
import Display from "../components/display/index.jsx";
import "./calculadora.css";

const initialState ={ 
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

class Calculadora extends Component{

  state = {...initialState}

  constructor(props) {
    super(props)
    this.Limpar = this.Limpar.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDig = this.addDig.bind(this)
  }

  Limpar(){
    this.setState({...initialState})
  }

  setOperation(operation){
    if(this.state.current == 0) {
      this.setState({current: 1, operation, clearDisplay: true});
    } else {
      const equals = operation == '='
      const opCorrente = this.state.operation

      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${opCorrente} ${values[1]}`)
        if (isNaN(values[0]) || !isFinite(values[0])) {
          this.clearMemory()
        return
        }
      } catch{
        values[0] = this.state.values[0]
      }

      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  addDig(n) {
    if(n === '.' && this.state.displayValue.includes('.')) {
      return 
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const valorCorrente = clearDisplay ? '' : this.state.displayValue
    const displayValue = valorCorrente + n
    this.setState({displayValue, clearDisplay: false});

    if(n !== '.') {
      const i = this.state.current
      const newValue =  parseFloat(displayValue) 
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
    }

  }

  render() {
    return <>
      <h1>CALCULADORA</h1>
      <div className="calculadora">
        <Display value={this.state.displayValue}/>
        <Botao value="AC" click={this.Limpar} triple />
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
        <Botao value="." click={this.addDig}/>
        <Botao value="=" click={this.setOperation} operation/>
      </div>
    </>;
  }
}

export default Calculadora;
