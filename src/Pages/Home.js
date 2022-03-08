import { Link } from 'react-router-dom';

//Component Imports
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import MyForm from '../Components/MyForm';

function Home() {
    return (
        <div>
            <TopNav />

            <div className='container mission-home'>
                <p className='h1 text-white text-decoration-underline'>OUR MISSION</p>
                <article>
                    Our Mission is to blah blah, na fimbi fimbi......................
                </article>
            </div>
            <div className='container'>
                <div className='container donation-home'>
                    <p className='h3'>Make a Donation</p>
                    <div className='row'>
                        <div className='col'>
                            <MyForm />
                            <button className='btn btn-warning'>Donate</button>
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
            </div>
            <Footer />
        </div>
    )
}



export default Home;