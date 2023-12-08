import style from '../NotFoundPage/style.module.scss'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className={style.wrapper}>

            <div className={style.content}>
                <h1>404</h1>
                <h4>Sorry, we were unable to find that page</h4>
                <p>
                    <span>Start from</span>
                    <span>
                        <Link to={"/"}>home page</Link>
                    </span>
                </p>
            </div>

            <div className={style.imgGost}></div>
        </div>
    )
}

export default NotFoundPage;