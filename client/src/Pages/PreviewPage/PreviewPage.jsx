import style from '../PreviewPage/style.module.scss';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Svg from '../../components/Svg/Svg';

export default function PreviewPage() {
    const giftArr = [{
        gift: 'Виджеты',
        description: '30 готовых решений',
        mobile: 'Skype аудит'
    }, {
        gift: 'Dashboard',
        description: 'c показателями вашего бизнеса',
        mobile: '30 виджетов'
    }, {
        gift: 'Skype Аудит',
        description: 'отдела продаж и CRM системы',
        mobile: 'Dashboard'
    }, {
        gift: '35 дней',
        description: 'использования CRM',
        mobile: 'Месяц amoCRM'
    }]

    return (
        <>
            <Header />

            <main>
                <div className={style.redLigth}></div>
                <div className={style.purpleLigth}></div>
                <Svg name={'redBall'} />
                <Svg name={'redBallSm'} />

                <section className={style.preview}>
                    <h1>Зарабатывайте больше <span></span></h1>
                    <p>Развиваем и контролируем продажи за вас</p>
                </section>

                <section className={style.login}>
                    <div className={style.wrapperText}>
                        <h2>Вместе c <span>бесплатной консультацией</span>  мы дарим:</h2>
                    </div>

                    <div className={style.wrapperGift}>
                        {giftArr.map((el, i) =>
                            <div key={i} className={style.mapContext}>
                                <p>{el.gift}</p>
                                <p>{el.description}</p>
                            </div>)}
                    </div>

                    <div className={style.mobileGift}>
                        {giftArr.map((el, i) =>
                            <div key={i} className={style.mapContext}>
                                <div className={style.line}></div>
                                <p>{el.mobile}</p>
                            </div>)}
                    </div>

                    <div className={style.btn}>Получить консультацию</div>

                </section>
            </main>

            <Footer />
        </>
    )
}