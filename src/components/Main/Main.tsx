import "./Main.css"
import Header from "../Header/Header"

const Main = (props: {
    className?: string
}) => {
    return (
        <div className="Main">
            <Header className="Header" />
        </div>
    )
}

export default Main