import React, { Component } from 'react'

export default class DtdStudent extends Component {
    constructor(props){
        super(props);

    }
    DtdHandleView=(DtdStudents)=>{
        this.props.onDtdHandleView(DtdStudents);

    }
    render() {
        let {renderDtdStudents, key} =this.props;
        console.log("Student:",renderDtdStudents);
        
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderDtdStudents.Number}</td>
                    <td>{renderDtdStudents.DtdStudentName}</td>
                    <td>{renderDtdStudents.DtdAge}</td>
                    <td>{renderDtdStudents.DtdGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={()=>this.DtdHandleView(renderDtdStudents)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>

            </>
        )
    }
}
