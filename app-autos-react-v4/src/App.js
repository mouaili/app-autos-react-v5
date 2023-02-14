import React, { Component } from 'react';
import './App.css';
import { MyCars } from './components/MyCars';
import Button from './components/buttons/Button';

class App extends Component {
  state = {
    title: " First Cars's Catalog",
    color: '#f1aadd',
  };

  changeTheTitle = () => {
    this.setState({
      title: 'Catalogue des premières voitures',
    });
  };

  changeViaParams = title => {
    this.setState({ title: title });
    console.log(title);
  };

  changeViaBind = param => {
    this.setState({ title: param });
    console.log(param);
  };

  giveAnatherTitle = event => {
    const value = event.target.value;
    this.setState({ title: value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div className='App'>
        <MyCars color={this.state.color} title={this.state.title} />
        <Button changeTheTitle={this.changeTheTitle}>
          Translate the Title
        </Button>
        <Button
          changeTheTitle={() => this.changeViaParams('Le Prochain Catalogue')}
        >
          changeViaParams
        </Button>
        <Button
          changeTheTitle={this.changeViaBind.bind(this, 'Le Futur Catalogue')}
        >
          changeViaBind
        </Button>

        {/* Inupt text */}
        <div>
          <label htmlFor=''>Changer de titre : </label>
          <input
            type='text'
            onChange={this.giveAnatherTitle}
            value={this.state.title}
          />
        </div>
      </div>
    );
  }
}

export default App;
