import React, { Component } from 'react';

class DTD2EventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            DTD2Name:'Dung',
            DTD2Age:19,
            DTD2Gender:'Female',
            DTD2Course:'CSS3'
        }
    }

   
    DTD2HandleChange = (event)=>{
 
        let name = event.target.name;
     
        let value = event.target.value;

   
        this.setState({
            [name]:value,
        })
    }
  
    DTD2HandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.tvcName + "\n" + this.state.tvcAge);

        
        this.props.onDTD2HandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='tvcName'>Student Name:</label>
                        <input type='text' name='tvcName' id='tvcName' 
                            value={this.state.DTD2Name}
                            onChange={this.DTD2HandleChange} />
                    </div>
                    <div>
                        <label htmlFor='tvcAge'>Student Age:</label>
                        <input type='text' name='DTD2Age' id='DTD2Age' 
                            value={this.state.DTD2Age}
                            onChange={this.DTD2HandleChange} />
                    </div>
                    <div>
                        <label htmlFor='tvcGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='DTD2Gender' id='DTD2Male' className='mx-2'
                                value={'Male'}
                                checked={this.state.DTD2Gender === 'Male'}
                                onChange={this.DTD2HandleChange} />
                            <label htmlFor='tvcMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='DTD2Gender' id='DTD2Female' className='mx-2'
                                value={'Female'}
                                checked={this.state.DTD2Gender === 'Female'}
                                onChange={this.DTD2HandleChange} />
                            <label htmlFor='tvcFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='DTD2Gender' id='DTD2None' className='mx-2'
                                value={'None'}
                                checked={this.state.DTD2Gender === 'None'}
                                onChange={this.DTD2HandleChange} />
                            <label htmlFor='DTD2None'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='DTD2Course'>
                            <select name='DTD2Course' id='DTD2Course' 
                                    value={this.state.DTD2Course}
                                    onChange={this.DTD2HandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.DTD2HandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DTD2EventForm5;