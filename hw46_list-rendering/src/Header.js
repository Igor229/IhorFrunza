import logo from './logo.svg';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <button className="header__button button">MENU</button>
            <img src={logo} className="App-logo header__logo" alt="logo" />
            <div className="header__actions">
                <button className="header__actions-refresh button">REFRESH</button>
                <button className="header__actions-logout button">LogOut</button>
            </div>
        </div>
    )
}

export default Header