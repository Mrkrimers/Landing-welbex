import style from '../Footer/style.module.scss'
import Svg from '../Svg/Svg'

export default function Footer() {
    const nav = ['Расчёт стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты', 'Кейсы', 'Благодарственные письма', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ']

    return (
        <footer>

            <div className={style.aboutCompany}>
                <h3>O компании</h3>

                <p>Партнёрская программа</p>
                <p>Вакансии</p>
            </div>

            <div className={style.menu}>
                <h3>Меню</h3>

                <nav>
                    {nav.map((el, i) => <p key={i}>{el}</p>)}
                </nav>
            </div>

            <div className={style.contacts}>
                <h3>Контакты</h3>

                <p>+7 555 555-55-55</p>

                <div className={style.svg}>
                    <Svg name={'telegram'} />
                    <Svg name={'viber'} />
                    <Svg name={'whatsapp'} />
                </div>

                <p>Москва, Путевой проезд 3c1, к 902</p>

                <div className={style.copyright}>
                    <p>©WELBEX 2022. Bce права защищены.</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>

        </footer>
    )
}