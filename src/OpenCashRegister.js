import React from 'react';
import { URL_STORE_OPEN_REGISTER } from './constants';
import { showFeedBack } from './functions';

class OpenCashRegister extends React.Component {

    handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(URL_STORE_OPEN_REGISTER, {
            method:'POST',
            body: new FormData(event.target)
        });
        
        if(response.status === 200) {
            window.location.href = "/";   
        } else if (response.status === 400) {
            response = await response.json();
            let { errors } = response;
            showFeedBack(errors);
        } else {
            alert('Something unexpected has occurred');
        }
    }

    render() {
        return <section className='content'>
            <h3>Formulario de apertura de caja</h3>
            <form action="" method="POST" className='form' onSubmit={ (event)=> this.handleSubmit(event) }>
                <div className="form-group">
                    <label htmlFor="opening_date">Fecha de Apertura</label>
                    <input type="date" 
                        name="opening_date" 
                        id="opening_date" 
                        required
                        />
                        <span className='feedback'></span>
                </div>
                <div className="form-group">
                    <label htmlFor="opening_hour">Hora de Apertura</label>
                    <input type="time" name="opening_hour" id="opening_hour" required />
                    <span className='feedback'></span>
                </div>
                <div className="form-group">
                    <label htmlFor="previous_closing_value">Cierre anterior</label>
                    <input type="number" min="0" name="previous_closing_value" id="previous_closing_value" required />
                    <span className='feedback'></span>
                </div>
                <div className="form-group">
                    <label htmlFor="opening_value">Base</label>
                    <input type="number" min="0" name="opening_value" id="opening_value" required />
                    <span className='feedback'></span>
                </div>
                <input type="submit" value="Abrir caja"/>
            </form>
        </section>;
    }
}


export default OpenCashRegister;