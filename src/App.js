import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/Validation'
import Char from './CharComponent/CharComponent'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    inputText: '',
    textLength: 0,
    charArray: []
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  inputChangedHandler = (event) => {
    console.log('input changed')
    const newInput = event.target.value;
    const newLength = newInput.length;
    console.log(newInput, newLength);
    this.setState(
      {inputText: newInput,
      textLength: newLength}
    )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind( this, 'Max!' )}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    let inputLength = <p>Text length: {this.state.textLength}</p>

    //split input text into a string
    let inputArr = this.state.inputText.split("")
    console.log(inputArr)
    //create list of chars to be rendered by the charComponent
    let charList = (
      <div>
        {inputArr.map((char, index) => {
          return <Char 
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
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
