import React, { Component } from 'react';

class DTD2EventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            DTD2Course: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    DTD2HandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            DTD2Course:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    DTD2HandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.DTD2Course);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='tvcCourse' id='tvcCourse' 
                            value={this.state.DTD2Course}
                            onChange={this.DTD2HandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.DTD2HandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default DTD2EventForm2;