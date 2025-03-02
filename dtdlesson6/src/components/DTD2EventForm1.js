import React,{Component} from "react";
class DTD2EventForm1 extends Component{
    constructor(props){
        super(props) ;
            this.state = {
                DTD2StudentName:'Tien Dung'
            }
        }
    DTD2HandleChange = (event)=>{
        this.setState({
            DTD2StudentName:event.target.value,
        })
    }
    DTD2HandleSubmit = (ev)=>{
        alert('xin chao:'+ this.state.DTD2StudentName );
        ev.preventDefault();
    }
    render(){
        return(
            <div className="alert alert-info">
                <h2>Form Input</h2>
                <form onSubmit={this.DTD2HandleChange} >
                    <label htmlFor="DTD2StudentName">
                        <input type='text' name='DTD2StudentName' id="DTD2StudentName"
                            value={this.state.DTD2StudentName}
                            onChange={this.DTD2HandleChange}
                        />
                    </label>
                    <button className="btn btn-primary">Click here</button>
                </form>

            </div>
        )
    }
}
export default DTD2EventForm1;