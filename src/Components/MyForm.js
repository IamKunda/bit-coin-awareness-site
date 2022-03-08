//Hook Import
import { useState } from 'react';
//bootstrap component
import { Form } from 'react-bootstrap';

function MyForm() {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('');

    const [symbol, setSymbol] = useState("K");
    function btnHandler(e) {
        e.preventDefault();//Prevent Browser from reloading
        /**
         * variables that you need are:
         * amount and 
         * currency.
         */
        if(amount===0){
            alert('Please enter an amount')
        }
        else{
            if(currency===''){
                alert("Please choose a currency")
            }
            else{

            /** If you are writing any Backend(semi) code, do it below */
            alert("Amount: " + amount + " and Currency: " + currency);
            }
        }
    }

    return (
        <div className='row'>
            <div className='col'>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Kwacha"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                onChange={(e) => {
                                    setCurrency("Kwacha");setSymbol("K")
                                }}
                            />
                            <Form.Check
                                inline
                                label="Bit-Coin"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onChange={() => {
                                    setCurrency("Bit-Coin"); setSymbol("B")
                                }}
                            />
                            <Form.Check
                                inline
                                label="Dollar"
                                name="group1"
                                type={type}
                                id={`inline-${type}-3`}
                                onChange={() => {
                                    setCurrency("Dollar"); setSymbol("$");
                                }
                                }
                            />

                        </div>
                    ))}
                    <button className='btn btn-warning' onClick={btnHandler}>Donate</button>
                </Form>
            </div>
            <div className='col'>
                <div className="input-group mb-3">
                    <span className="input-group-text">{symbol}</span>
                    <span className="input-group-text">{amount}.00</span>
                    <input type="number" class="form-control" onChange={(e) => setAmount(e.target.value)} />
                </div>
            </div>

        </div>

    )
}

export default MyForm;