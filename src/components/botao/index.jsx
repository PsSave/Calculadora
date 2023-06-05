import './style.css';

function botao(props){
  return <button className={`botao 
                                  ${props.operation ? 'operation' : ''}
                                  ${props.double ? 'double' : ''}
                                  ${props.triple ? 'triple' : ''}`}      
                          onClick={(e) => props.click && props.click(e.target.innerHTML)}> 
      {props.value}
    </button>
}

export default botao;