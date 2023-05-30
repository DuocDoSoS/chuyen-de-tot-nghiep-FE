import style from './Header.module.scss'
import classNames from 'classnames/bind';
import logo from "../../../asset/logo_500x.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style)
const categories = [
    {
        id: 1,
        name: "Jewelry",
        option: [

        ]
    },
    {
        id: 2,
        name: "Sale",
        option: [
            
        ]
    },
    {
        id: 3,
        name: "Gift",
        option: [
            
        ]
    }
]
function Header() {
    return <header className={cx("wrapper")}>
        <div className={cx("content")}>
            <div className={cx("logo")}>
                <img src={logo} alt="helios.vn"/>
            </div>
            <div className={cx("categories")}>
                {categories.map((category, index)=>{
                    return <div key={index} className={cx("category")}>
                        {category.name}
                    </div>
                })}
            </div>
            <div className={cx("cart")}>
                <div className={cx("search")}>
                    <FontAwesomeIcon className={cx("searchIcon")} icon={faMagnifyingGlass}/>
                </div>
                <div className={cx("cartItem")}>
                    <FontAwesomeIcon className={cx("iconCart")} icon={faCartShopping}/>
                    <div className={cx("qtyCart")}>0</div>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;