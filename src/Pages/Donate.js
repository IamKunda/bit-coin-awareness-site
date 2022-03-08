//Component Imports
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import MyForm from '../Components/MyForm';

function Donate() {
    return (
        <div>
            <TopNav />
            <div className='container donate-container'>
                <p className='h2 text-decoration-underline'>Please Support Our Work</p>
                <div className='row'>
                    <div className='col'>
                        <MyForm />
                    </div>
                    <div className='col'>
                        <div className="input-group mb-3">
                            <span className="input-group-text">K</span>
                            <span className="input-group-text">0.00</span>
                            <input type="number" class="form-control" id='user-donation' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='custom-container'>
                <Footer />
            </div>
        </div>
    )
}


export default Donate;