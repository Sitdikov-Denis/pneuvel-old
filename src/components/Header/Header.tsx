import "./Header.css"

const Header = (props: {
    className?: string
}) => {
    return (
        <header className="Header">
            <img className="Header-logo" src="images/logo.png" alt="Pneuvel" />
            <div className="Header-phone">
                <a className="Header-button" href={`tel:${+749555555555}`} target="blank">
                    ПОЗВОНИТЬ
                </a>
                <p className="Header-phone-number">8-800-200-00-00</p>
                <div className="Header-icons">
                    <a href={`tel:${+749555555555}`} target="blank">
                        <img className="Header-icon" src="images/2.png" alt="phone" />
                    </a>
                    <a href={`tg://resolve?domain=@begleiten`} target="blank">
                        <img className="Header-icon" src="images/3.png" alt="telegram" />
                    </a>
                    <a href={`https://wa.me/79260584903`} target="blank">
                        <img className="Header-icon" src="images/4.png" alt="whatsapp" />
                    </a>
                    <a href={`mailto:gagne79@yandex.ru`} target="blank">
                        <img className="Header-icon Header-icon-white Header-icon-letter" src="images/mail.png" alt="letter" />
                    </a>
                </div>
            </div>
            <ul className="Header-nav">
                <a href="#"><li className="Header-nav-li">О КОМПАНИИ</li></a>
                <a href="#"><li className="Header-nav-li">УСЛУГИ</li></a>
                <a href="#"><li className="Header-nav-li">КАТАЛОГ ГОТОВЫХ РЕШЕНИЙ</li></a>
                <a href="#"><li className="Header-nav-li">ИНТЕРНЕТ-МАГАЗИН</li></a>
                <a href="#"><li className="Header-nav-li">ДОСТАВКА И ОПЛАТА</li></a>
                <a href="#"><li className="Header-nav-li">КОНТАКТЫ</li></a>
            </ul>
        </header>

    )
}

export default Header