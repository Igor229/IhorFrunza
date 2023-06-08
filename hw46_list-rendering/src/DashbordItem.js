import './DashbordItem.css'
import userIcon from './icons/user-icon.svg'

const reviews = [
    {
        avatar: userIcon,
        info: 'Great product, excellent service, highly recommended!'
    },
    {
        avatar: userIcon,
        info: 'Tolles Produkt, ausgezeichneter Service, sehr empfehlenswert!'
    },
    {
        avatar: userIcon,
        info: 'Prodotto fantastico, servizio eccellente, altamente consigliato!'
    },
]

const users = [
    { avatar: userIcon, name: "John Smith" },
    { avatar: userIcon, name: "Emma Johnson" },
    { avatar: userIcon, name: "Michael Williams" },
    { avatar: userIcon, name: "Olivia Brown" },
    { avatar: userIcon, name: "William Jones" },
    { avatar: userIcon, name: "Sophia Davis" },
    { avatar: userIcon, name: "James Miller" },
    { avatar: userIcon, name: "Ava Wilson" },
    { avatar: userIcon, name: "Alexander Taylor" }
];


function DashbordItem (props) {
    const {icon, iconColor, title, action} = props
    let {value} = props
    let cardAction

    
    if (action === 'reviewers') {
        cardAction = <ReviewsAction />
        value = reviews.length
    }
    if (action === 'newUsers') {
        cardAction = <NewUsersAction />
        value = users.length
    }
    
    return (
        <div className='dashbord-item'>
            <div className='dashbord-card' >
                <div className='dashbord-card__icon'style={{backgroundColor: iconColor}}>
                    <img src={icon} className ='icon'/>
                </div>
                
                <div className='dashbord-card__info'>
                    <p className='dashbord-card__info-title'>{title}</p>
                    <span className='dashbord-card__info-value'>{value}</span>
                </div>
                
            </div>
            <div className='action'>{cardAction}</div>
        </div>
    )
}



function ReviewsAction () {
    return (
        <>
        {reviews.map(data => {
            return (
                <div className='action-card'>
                    <img src={data.avatar} className='action-card__icon'/>
                    <p className='action-card__info'>{data.info}</p>
                </div>
            )    
        })}
        </>
    )
}



function NewUsersAction () {
    return (
        <>
        {users.map(data => {
            return (
                <div className='action-card'>
                    <img src={data.avatar} className='action-card__icon'/>
                    <p className='action-card__info'>{data.name}</p>
                </div>
            )
        })}
        </>
    )
}

export default DashbordItem