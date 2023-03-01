import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout({children}){
    return(
        <div className="bg-gray-800 h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    )
}