import { Link } from 'react-router-dom';
//Images imports
import fb from '../Images/facebook.png';
import insta from '../Images/instagram.png';
import tweet from '../Images/twitter.png';


function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0 row">
                <p className='h3 text-decoration-underline'>Connect with us via Social Media</p>
                <div className='col'>
                    <section className="mb-4">
                        <img src={fb} className="footer-icon" />
                        <br />
                        <Link to='/'>Facebook</Link>
                    </section>
                </div>
                <div className='col'>
                <section className="mb-4">
                    <img src={insta} className="footer-icon" />
                    <br />
                    <Link to='/'>Instagram</Link>
                </section>
                </div>
                <div className='col'>
                <section className="mb-4">
                    <img src={tweet} className="footer-icon" />
                    <br />
                    <Link to='/'>Twitter</Link>
                </section>
                </div>

                
                

            </div>
            <div>
                <p>
                    Developed By <a href='https:://kunda-sakala-portfolio-herokuapp.com'>Kunda Sakala</a>
                </p>
            </div>
        </footer>
    )
}
export default Footer;