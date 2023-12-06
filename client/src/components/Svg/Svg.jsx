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
        default:
            return;
    }
}