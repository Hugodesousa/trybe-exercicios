import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const test = ['Acordar', 'Tomar café', 'Escovar os dentes', 'trybe'];
class App extends Component {
  render() {
    return (
      <ol>
        {test.map(element => Task(element))}
      </ol>
    );
  }
}


export default App;
