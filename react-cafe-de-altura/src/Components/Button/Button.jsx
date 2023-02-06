import './Button.css'

const Button = (props) => {
    const { className, text, bgColor, click } = props

    // Import syntax:
    // Large: <Button className="ButtonLarge" text=" XXXXXX " bgColor="#1F1815"(BLack) bgColor = "#2A5B45"(Green) bgColor = "#515051"(Grey) />
    // Small: <Button className="ButtonSmall" text=" XXXXXX " bgColor="#1F1815"(BLack) bgColor = "#2A5B45"(Green) bgColor = "#515051"(Grey) />

    const pablo = () => {
        if (click) {
            click()
        } else {
            return
        }
    }
    return (
        <button
            onClick={pablo}
            className={className}
            style={{ backgroundColor: `${bgColor}` }}
        >
            <p>{text}</p>
        </button>
    )
}

export default Button