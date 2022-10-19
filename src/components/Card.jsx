import "./Card.css"
const expens = new Date().getFullYear()
function Card({title, price, color, date}) {
    return(
        <div className="container">
            <div className="Card">
                <div>{title}</div>
                <div>${price}</div>
                <div>{color}</div>
                <div>
                    {expens == date.getFullYear() ? (
                        <div>
                            {String(date.getDate()).padStart(2, 0)}-
                            {String(date.getMonth()).padStart(2, 0)}-{date.getFullYear}
                        </div>
                    ) : (
                        `${expens - date.getFullYear()} years ago`
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;