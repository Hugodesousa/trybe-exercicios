import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="card">
        <div className="cardText">
          <p> {name} </p>
          <p> {type} </p>
          <p> {`${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
        </div>
        <img src={image} alt='pokemon' />
      </div>
    )
  }
}
export default Pokemon;