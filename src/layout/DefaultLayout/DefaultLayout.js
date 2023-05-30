import { useSearchParams } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
function DefaultLayout({children}) {
    return <div>
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
    </div>
}

export default DefaultLayout;