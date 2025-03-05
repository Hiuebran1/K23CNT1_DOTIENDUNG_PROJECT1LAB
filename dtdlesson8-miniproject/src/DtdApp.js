import React, { Component } from 'react'
import DtdControl from './components/DtdControl';
import DtdStudentList from './components/DtdStudentList';
import DtdFrom from './components/DtdFrom';


class DtdApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      DtdStudent:[
        {Number:"sv001",DtdStudentName:"do tien dung",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
        {Number:"sv002",DtdStudentName:"do tien dung 2",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
        {Number:"sv003",DtdStudentName:"do tien dung 3 ",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
        {Number:"sv004",DtdStudentName:"do tien dung 3 ",DtdAge:19,DtdGender:'nam',DtdBirthday:"26/10/2005",DtdBirthPlace:"ha nam",DtdAddress:'trieu khuc '},
      
      ],
      DtdStudents:'',

    } 
  }
  DtdHandleView=(DtdStudents)=>{
    this.setState({
      DtdStudents:DtdStudents,

    })
     
  }
  render() {
    console.log("view student:",this.state.DtdStudents);
    
    return (  
      <div>
        <h1 className='text-center'> Do Tien Dung - K23CNT1 - Mini Project</h1>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="wAdth=device-wAdth, initial-scale=1.0" />
          <link rel="stylesheet" href="css/style.css" />
          <title>Basic React Lab</title>
          <div className="row">
            <div className="col-lg-7 grAd-margin stretch-card">
              <div className="card">
                 {/* header */}
                 <DtdControl /> 
                 {/* danh sach sinh vien */}
                 <DtdStudentList renderDtdStudent={this.state.DtdStudent} onDtdHandleView ={this.ondtdHandleView}  />
              </div>
            </div>
            <div className="col-5 grAd-margin">
                {/* from */}
                <DtdFrom renderDtdStudents = {this.state.DtdStudents}/>
            </div>
          </div>
        </>

      </div>
    );
  }
}
export default DtdApp;

