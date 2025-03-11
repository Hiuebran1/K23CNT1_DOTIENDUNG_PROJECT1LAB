import React,{useState} from 'react'

export default function DUseState() {
    const [DCount,setDCount]= useState(0);
    const DArr=[10,12,20,22];
    const[DArray,setDArray]=useState(DArr);
    const DStudnets = [
        {Did:'SV001',DName:"Do Dung",DAge:19},
        {Did:'SV002',DName:"Do Khanh",DAge:191}   ,
    ];
    const [DStudnetList,setDStudentList]=useState(DStudnets);
    const DHandleAddList=()=>
    {
        setDArray([
            ...DArray,
            parseInt(Math.random()*100),
        ])
        
    }
    const DHandleAddNewStudent=()=>{
         let DStudnets ={
            Did:'SV003',
            DName:"Do Khai",
            DAge:18
         };
         setDStudentList ([
            ...DStudnetList ,
            DStudnets

         ])
         console.log('List ',DStudnetList);
         
    }
  return (
    <div className='alert alert-danger'>
        <h2>useState Demo</h2>
        <div>
            <h3>Count:{DCount}</h3>
            <button onClick={()=>setDCount(DCount+1)}> Tang +</button>
            <button onClick={()=>setDCount(DCount-1)}> Giam -</button>
            
        </div>
        <div>
            <h3>Array:{DArray.toString()}</h3>
            <button onClick={DHandleAddList}> Them Phan Tu</button>
        </div>
        <div>
            <h3>Danh Sach Sinh Vien</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DStudnetList.map((DStudnets,index)=>{
                            return <>
                                <td>{DStudnets.Did}</td>
                                <td>{DStudnets.DName}</td>
                                <td>{DStudnets.DAge}</td>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <button onClick={DHandleAddNewStudent}>
                        Them sinh vien moi
                    </button>
                </tfoot>
            </table>
        </div>
    </div>
  )
}
