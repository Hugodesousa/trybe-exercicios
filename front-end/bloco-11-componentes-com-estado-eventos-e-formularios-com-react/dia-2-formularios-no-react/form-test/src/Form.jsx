import React from "react";

class Form extends React.Component {
  constructor() {
    super (); 
    
    this.campName = this.campName.bind(this)
    this.campAge = this.campAge.bind(this)

    this.state = {
      name: '',
      idade: 0,
    }

  }
  
  campName(event) {
    this.setState({
      idade: event.target.value,
    });
  }
  campAge(event) {
    this.setState({
      idade: event.target.value,
    });
  }
  
  
  render() {
    return (
      <div>
        <select name="estado" id="UF"></select>
        <input type="text" name='nome' value={this.state.name} onChange={this.campName}/>
        <input type="number" name="idade" value={this.state.idade} onChange={this.campAge}/>
      </div>
    )
  }
}
export default Form;