import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation'
import Char from './CharComponent/CharComponent'

class App extends Component {
  state = {
    otherState: 'some other value',
    showPersons: false,
    inputText: '',
    textLength: 0,
    charArray: []
  }

  inputChangedHandler = (event) => {
    console.log('input changed')
    const newInput = event.target.value;
    const newLength = newInput.length;
    const newCharArray = newInput.split("")
    // const charArrayNew = newInput;
    console.log('new input', newInput, newLength, newCharArray);
    
    this.setState(
      {inputText: newInput,
      textLength: newLength,
      charArray: newCharArray}
    )
  }

  deleteCharHandler = (id) => {
    console.log(id)
    const newInput = this.state.inputText.slice(0, id) + this.state.inputText.slice(id+1)
    const newLength = newInput.length;
    const newCharArr = this.state.charArray
    newCharArr.splice(id, 1)
    console.log(newCharArr, newInput)
    this.setState({
      charArray: newCharArr,
      textLength: newLength,
      inputText: newInput,
      
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let inputLength = <p>Text length: {this.state.textLength}</p>

    //create list of chars to be rendered by the charComponent
    let charList = (
      <div>
        {this.state.charArray.map((char, index) => {
          return <Char 
          id={index}
          click={() => this.deleteCharHandler(index)}
          char={char}
          />
        })}
      </div>
    )

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <div>
          <input type='text' onChange={(event) => this.inputChangedHandler(event)} value={this.state.inputText} />
        </div>
        {inputLength}
        <Validation length={this.state.textLength} />
        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
