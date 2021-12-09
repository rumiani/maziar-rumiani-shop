import react from 'react';
import './App.css';
import styled from 'styled-components'
let StyledDiv = styled.div`
background: blue;
cursor:pointer;
@media (min-width: 500px){
  background: red;
  
}
&:hover {
  background: ${props => props.alt?'red':'black'};
}
`
class App extends react.Component {
  state = {
    changeColor: false
  }
changeColorHandler = () => {
  this.setState({changeColor: !this.state.changeColor})
}
  render() { 
    return <StyledDiv alt={this.state.changeColor} onClick={this.changeColorHandler}>
      Maziar rumiani shop
      </StyledDiv>;
  }
}
 
export default App;