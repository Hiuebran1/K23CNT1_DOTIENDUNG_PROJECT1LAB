import React, { Component } from 'react'
import DtdStudent from './DtdStudent'

export default class DtdStudentList extends Component {
    constructor(props){
        super(props);


    }
    DtdHandleView =(DtdStudents)=>{
        this.props.ondtdHandleView(DtdStudents);

    }
  render() {
    let {renderDtdStudent} = this.props;
    console.log('List:',renderDtdStudent);
    let DtdElementStudent = renderDtdStudent.map((DtdItem,index)=>{
        return <DtdStudent key={index} renderDtdStudents={DtdItem} ondtdHandleView={this.DtdHandleView}/>
    })
    

    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
            {DtdElementStudent}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
