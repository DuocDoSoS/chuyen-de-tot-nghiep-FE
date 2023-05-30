import style from './GlobalStyle.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)
function GlobalStyle({children}) {
    return children;
}

export default GlobalStyle;