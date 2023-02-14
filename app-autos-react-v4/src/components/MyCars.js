import React, { Component } from 'react';
import Car from './Car';
import Title from './head/Title';
//import Wrapper from './Wrapper';

export class MyCars extends Component {
  state = {
    cars: [
      { name: 'Ford', color: 'green' },
      { name: 'Mercedes', color: 'red' },
      { name: 'Peugeot', color: '' },
    ],
  };

  noCopy = () => {
    alert('Merci de ne pas coiper le text');
  };

  addStyle = event => {
    if (event.target.classList.contains('styled')) {
      event.target.classList.remove('styled');
    } else {
      event.target.classList.add('styled');
    }
  };

  render() {
    const { title, color } = this.props;
    return (
      <div>
        <Title onChangeStyle={this.addStyle} color={color}>
          {title}
        </Title>
        <p onCopy={this.noCopy}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        {this.state.cars &&
          this.state.cars.map((car, index) => {
            return (
              <Car key={index} color={car.color}>
                {car.name}
              </Car>
            );
          })}
      </div>
    );
  }
}
