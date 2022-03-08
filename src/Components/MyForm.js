//bootstrap component
import {Form} from 'react-bootstrap';

function MyForm() {
    return (
        <Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Kwacha"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Bit-Coin"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        label="Dollar"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    
                </div>
            ))}
        </Form>
    )
}

export default MyForm;