import React from "react"
import "./index.scss"

export class ColorPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "",
    }
  }
  setColor = text => {
    this.setState({
      color: text,
    })
  }

  cleanTitle = () => {
    this.setState({
      color: "",
    })
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setColor("Coral")}
            onMouseLeave={() => this.cleanTitle()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setColor("Aqua")}
            onMouseLeave={() => this.cleanTitle()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setColor("Bisque")}
            onMouseLeave={() => this.cleanTitle()}
          ></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker
