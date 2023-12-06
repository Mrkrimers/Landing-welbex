import style from '../Svg/style.module.scss'

// eslint-disable-next-line react/prop-types
export default function Svg({ name }) {
    switch (name) {
        case 'telegram':
            return (
                <div className={style.telegram}></div >
            );
        case 'viber':
            return (
                <div className={style.viber}></div >
            );
        case 'whatsapp':
            return (
                <div className={style.whatsapp}></div >
            );
        case 'redBall':
            return (
                <div className={style.redBall}></div >
            );
        case 'redBallSm':
            return (
                <div className={style.redBallSm}></div >
            );
        case 'purpleBall':
            return (
                <div className={style.purpleBall}></div >
            );
        default:
            return;
    }
}