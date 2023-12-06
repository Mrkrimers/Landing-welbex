import style from '../Header/style.module.scss'
import Svg from '../Svg/Svg'

export default function Header() {

    const nav = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты']

    return (
        <header>
            <div className={style.logo}>
                <div className={style.logoImg}></div>
                <p>крупный интегратор CRM в России и ещё 8 странах</p>
            </div>

            <nav>
                {nav.map((el, i) => <p key={i}>{el}</p>)}
            </nav>

            <div className={style.contacts}>
                <p>+7 555 555-55-55</p>
                <Svg name={'telegram'} />
                <Svg name={'viber'} />
                <Svg name={'whatsapp'} />
                <Svg name={'purpleBall'} />
            </div>
        </header>
    )
}