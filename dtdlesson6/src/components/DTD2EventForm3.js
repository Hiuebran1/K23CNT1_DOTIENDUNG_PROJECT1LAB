import React, { Component } from 'react';

class DTD2EventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            DTD2GioiTinh:'Nam',
        }
    }


    DTD2HandleChange = (event)=>{
        this.setState({
            DTD2GioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    DTD2HandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.DTD2GioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='DTD2GioiTinh'  id='DTD2Nam' className='mx-2'
                            value="Nam" checked={this.state.DTD2GioiTinh === 'Nam'} onChange={this.DTD2HandleChange}/> 
                            <label htmlFor='tvcNam'>Nam</label>  
                        <input type='radio' name='DTD2GioiTinh'  id='DTD2Nu' className='mx-2'
                            value="Nữ" checked={this.state.DTD2GioiTinh === 'Nữ'} onChange={this.DTD2HandleChange}/> 
                            <label htmlFor='DTD2Nu'>Nữ</label>  
                        <input type='radio' name='DTD2GioiTinh' id='DTD2Khac' className='mx-2'
                            value="Khác" checked={this.state.DTD2GioiTinh === 'Khác'} onChange={this.DTD2HandleChange}/> 
                            <label htmlFor='DTD2Khac'>Khác</label>
                    </div>
                    <button onClick={this.DTD2HandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DTD2EventForm3;