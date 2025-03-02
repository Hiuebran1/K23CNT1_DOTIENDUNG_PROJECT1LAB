import React, { Component } from "react";

class DTD2EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            DTD2SelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    DTD2HandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.DTD2SelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            DTD2SelectCheckBox:selectedOptions
        });
    }

    // Submit form
    DTD2HandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.DTD2SelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.DTD2SelectCheckBox.includes("Apple")}
              onChange={this.DTD2HandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.DTD2SelectCheckBox.includes("Banana")}
              onChange={this.DTD2HandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.DTD2SelectCheckBox.includes("Orange")}
              onChange={this.DTD2HandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.DTD2HandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default DTD2EventForm4;