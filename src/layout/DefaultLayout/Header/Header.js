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
        options: [
            {
                kind: "Nhẫn",
                option: [
                        "nhẫn bạc",
                        "nhẫn vàng",
                        "nhẫn kim loại"
                ]
            },
            {
                kind: "dây chuyền",
                option: [
                        "dây chuyền bạc",
                        "dây chuyền vàng",
                        "dây chuyền kim loại"
                ]
            },
            {
                kind: "khuyên tai",
                option: [
                        "dây chuyền bạc",
                        "dây chuyền vàng",
                        "dây chuyền kim loại"
                ]
            }
        ],
    },
    {
        id: 2,
        name: "Sale",
    },
    {
        id: 3,
        name: "Gift",
        select: [
            "quà tặng cho nam",
            "quà tặng cho nữ",
            "quà tặng cho nữ",
            "quà tặng cho nữ"
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
                    let OptionElement = <div></div>
                    let SelectElement = <div></div>
                    if(category.options !== undefined){
                        OptionElement = <div className={cx("wrapperTable")}>
                                            <div className={cx("table")}>
                                                {category.options.map((option, index)=> {
                                                    return <div key={index} className={cx("item")}>
                                                                <div className={cx("title")}>{option.kind}</div>
                                                                {option.option.map((value, key)=> {
                                                                    return <div key={key} className={cx("material")}>{value}</div>
                                                                })}
                                                            </div>
                                                })}
                                            </div>
                                        </div>
                    }
                    if(category.select !== undefined){
                        SelectElement = <div className={cx("columns")}>
                            {category.select.map((value, key) => {
                                return <div key={key} className={cx("column")}>
                                    {value}
                                </div>
                            })}
                        </div>
                    }
                    return <div key={index} className={cx("category")}>
                                    {category.name}
                                    {OptionElement}
                                    {SelectElement}
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