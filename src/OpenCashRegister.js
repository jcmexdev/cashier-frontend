import React from 'react';
import { URL_STORE_OPEN_REGISTER } from './constants';

class OpenCashRegister extends React.Component {

    state = {
        'opening_date': null,
        'opening_hour': null,
        'previous_closing_value': null,
        'opening_value': null        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(URL_STORE_OPEN_REGISTER, {
            method:'POST',
            body: new FormData(event.target)
        });
        
        if(response.status === 200) {
            window.location.href = "/";   
        } 

        //show feedback
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return <form action="" method="POST" className='form' onSubmit={ (event)=> this.handleSubmit(event) }>
            <div className="form-group">
                <label htmlFor="opening_date">Fecha de Apertura</label>
                <input type="date" 
                    name="opening_date" 
                    id="opening_date" 
                    required
                    onChange={this.handleChange}/>
                    <span className='feedback'></span>
            </div>
            <div className="form-group">
                <label htmlFor="opening_hour">Hora de Apertura</label>
                <input type="time" name="opening_hour" id="opening_hour" required onChange={this.handleChange}/>
                <span className='feedback'></span>
            </div>
            <div className="form-group">
                <label htmlFor="previous_closing_value">Cierre anterior</label>
                <input type="number" min="0" name="previous_closing_value" id="previous_closing_value" required onChange={this.handleChange}/>
                <span className='feedback'></span>
            </div>
            <div className="form-group">
                <label htmlFor="opening_value">Base</label>
                <input type="number" min="0" name="opening_value" id="opening_value" required onChange={this.handleChange}/>
                <span className='feedback'></span>
            </div>
            <input type="submit" value="Abrir caja"/>
        </form>;
    }
}


export default OpenCashRegister;