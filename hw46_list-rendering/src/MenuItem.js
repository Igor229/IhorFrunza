
function MenuItem(props) {
    const {icon, name, isActive} = props


    return (
        <li className='menu__item' id = {isActive}>
            <img src={icon} className='menu__item-logo'/>
            <span>{name}</span>
        </li>
    )
}

export default MenuItem