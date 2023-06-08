import bracketsIcon from './icons/brackets.svg'
import homeIcon from './icons/home.svg'
import mainBG from './img/wolf.webp'
import './Preview.css'

function PreviewItem () {
    return (
        <div className="preview__item">
            <img src={mainBG} className="preview__item-image"/>
            <h2 className="preview__item-title">Welcome To Gulaag!</h2>
            <p className="preview__item-subtitle">
                This is the admin of an imaginary poster shop.
                Fell free to explore and modify the data - it's local to
                your computer, and will reset wach time you reload
            </p>

            <div className="preview__actions">
                <div className="preview__actions-item">
                    <img src={homeIcon} className="actions-icon"/>
                    <a href='#' className="action-text">React-admin site</a>
                </div>

                <div className="preview__actions-item">
                    <img src={bracketsIcon} className="actions-icon"/>
                    <a href='#' className="action-text">Source for this demo</a>
                </div>
            </div>
        </div>
        
    )
}

export default PreviewItem