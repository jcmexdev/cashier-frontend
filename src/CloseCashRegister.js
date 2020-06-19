import React from 'react';
import { URL_STORE_CLOSE_REGISTER } from './constants';

class CloseCashRegister extends React.Component {

    state = {
        'closing_date': null,
        'closing_hour': null,
        'card_value': null,
        'cash_value': null,
        'closing_value': null,        
        'sales_value': null        
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(URL_STORE_CLOSE_REGISTER, {
            method: 'POST',
            body: new FormData(event.target)
        });
        if(response.status === 200) {
            window.location.href= '/';
        }
        // show feedback
    }

    render() {
        return <>
            <h3>Formulario de cierre de caja</h3>
            <form action="" method="POST" className='form' onSubmit={ (event)=> this.handleSubmit(event) }>
                <div className="form-group">
                    <label htmlFor="closing_date">Fecha de Cierre</label>
                    <input type="date" 
                        name="closing_date" 
                        id="closing_date" 
                        required
                        
                        />
                        <span className='feedback'></span>
                </div>
                <div className="form-group">
                    <label htmlFor="closing_hour">Hora de Cierre</label>
                    <input type="time" name="closing_hour" id="closing_hour" required  />
                    <span className='feedback'></span>
                </div>

                <div className="form-group">
                    <label htmlFor="card_value">Ventas Tarjeta</label>
                    <input type="number" name="card_value" id="card_value" required  />
                    <span className='feedback'></span>
                </div>

                <div className="form-group">
                    <label htmlFor="cash_value">Ventas Efectivo</label>
                    <input type="number" name="cash_value" id="cash_value" min="0" step="1" required   />
                    <span className='feedback'></span>
                </div>

                <div className="form-group">
                    <label htmlFor="sales_value">Total Ventas</label>
                    <input type="number" name="sales_value" id="sales_value" min="0" step="1" required   />
                    <span className='feedback'></span>
                </div>

                <div className="form-group">
                    <label htmlFor="closing_value">Total en caja</label>
                    <input type="number" name="closing_value" id="closing_value" min="0" step="1" required   />
                    <span className='feedback'></span>
                </div>
            
                <input type="submit" value="Cerrar caja"/>
            </form>;
        </>
    }
}


export default CloseCashRegister;