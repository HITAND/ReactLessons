import React from "react"
import "./index.scss"

class Toggler extends React.Component {
  constructor(props) {
    super(props)

    this.text = { text1: "Off" }
  }

  changeText = () => {
    this.setState({
      text1:
        this.text.text1 === "Off"
          ? (this.text.text1 = "On")
          : (this.text.text1 = "Off"),
    })
  }

  render() {
    return (
      <div class="toggler" onClick={this.changeText}>
        {this.text.text1}
      </div>
    )
  }
}

export default Toggler
