function Header(props) {
    const {title} = props
    return (
        <header className='header'>
        <div className='wrapper header__wrapper'>
            <Logo logoText = 'My Blog Logo'/>
            <div className='header__title'>
            <h2 className='header__title-text'>{title}</h2>
            </div>
            <NavBar/>
        </div>
        </header>
    )
}
  
function Logo(props) {
    const { logoText } = props

    return (
        <div className='header__logo'>
        {logoText}
        </div>
    )
}
  
function NavBar() {
    return (
        <ul className="header__nav">
        <li className="header__nav-item"></li>
        <li className="header__nav-item"></li>
        <li className="header__nav-item"></li>
        <li className="header__nav-item"></li>
        <li className="header__nav-item"></li>
        </ul>
    )
}

export default Header;