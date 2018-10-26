import React, { Component } from 'react';
import _ from 'lodash';
import ActionBar from './components/ActionBar/index';
import './App.css';

// @MOCKS
import ActionBarMock from './mocks/ActionBarMock';

class App extends Component {

    constructor() {
      super();

      this.state = {
        data: null,
        timer: 0,
        error: null
      }
    }


    dlyaSashi = () => {
        console.log('DATA DLYA SASHI');
        console.log('DATA POMENYALAS NADO SDELAT RENDER()');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json =>  {
                console.log('POLUCHENO ' + json.length + 'elementov');
                this.setState({
                    data: json,
                    timer: this.state.timer + 1
                })
            })
            .catch(error => console.warn(error))


    }

    componentWillMount() {
        // TODO SAVE MOCK INTO STATE
           setTimeout(this.dlyaSashi, 1000);
    }

    render() {
      console.log('[App][Render]')
      const { data, error, timer } = this.state;
      const status = _.isArray(data) ? "Success" : "error"
    return (
      <div className="App">
        <h1>{status}</h1>
        <h1>{timer}</h1>
        <ActionBar
            actionBarItems={ActionBarMock}
            activeStyles="rolldown-list"
        />
      </div>
    );
  }
}

export default App;
