import React from 'react';
import './App.css';
import { URL_GET_OPEN_REGISTER } from './constants';
import OpenCashRegister from './OpenCashRegister';
import CloseCashRegister from './CloseCashRegister';



class App extends React.Component {

  state = {
    loading:true,
    render: ''
  }

  async componentDidMount() {
    let response = await fetch(URL_GET_OPEN_REGISTER);
    let { data } = await response.json();
    this.setState({loading:false})
    if (data.opening_value != null ) {
      this.setState({render: 'close'});
    } else {
      this.setState({render: 'open'});
    }
  }

  render() { 
    if(this.state.loading){
      return 'loading...'
    }

    return this.state.render === 'open' ? <OpenCashRegister /> : <CloseCashRegister />
  };
}

export default App;
