import React, { Component } from 'react';

class dtd7RenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dtd7Students:[
                {dtd7Id:"SV001",dtd7Name:"Trịnh Văn Chung", dtd7Age:45, dtd7Class:"K23CNT1"},
                {dtd7Id:"SV002",dtd7Name:"Nguyễn Quang A", dtd7Age:22, dtd7Class:"K23CNT1"},
                {dtd7Id:"SV003",dtd7Name:"Nguyễn Quang B", dtd7Age:21, dtd7Class:"K23CNT1"},
                {dtd7Id:"SV004",dtd7Name:"Nguyễn Quang C", dtd7Age:23, dtd7Class:"K23CNT1"},
            ],
        }
    }
    
    render() {
        // render data
        const dtd7Element = this.state.dtd7Students.map((dtd7Item, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{dtd7Item.dtd7Id}</td>
                    <td>{dtd7Item.dtd7Name}</td>
                    <td>{dtd7Item.dtd7Age}</td>
                    <td>{dtd7Item.dtd7Class}</td>
                    <td>
                        <button className='btn btn-primary mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2>Danh sách sinh viên</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>dtd7ID</th>
                                <th>dtd7Name</th>
                                <th>dtd7Age</th>
                                <th>dtd7Class</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dtd7Element}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default dtd7RenderListStudent;