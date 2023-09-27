import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return (
        <div className="book">
            <h2 className="main-heading">{props.title}</h2>
            <img src={props.image} className="main-image" alt={props.title} />
            <p className="main-annotation">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <OrderButton />
        </div>
    )
}

export default Book