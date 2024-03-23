import './Header.css'
import imagelogo from '../images/logo.png'



const Header = () => {
    return (
        <nav className="navbar">
            <img src={imagelogo} alt="Logo da Empresa" className='logo'/>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">LOGIN</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" id="registrar">REGISTRAR</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
