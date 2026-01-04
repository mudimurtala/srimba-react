import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

const root = createRoot(document.getElementById("root"))

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function Page() {
    return(
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    )
}

root.render(
    <Page/>
)
