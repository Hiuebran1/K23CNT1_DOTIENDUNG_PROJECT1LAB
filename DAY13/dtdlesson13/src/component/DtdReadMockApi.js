import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function DtdReadMockApi() {
    const [dtdListUser, setDtdListUser] = useState([])
    const dtdApiOnline="https://67d962bb00348dd3e2aad94d.mockapi.io/k23cnt1-dotiendung/dtd-users"
    useEffect(() => {
        axios.get(dtdApiOnline)
        .then((dtd_response) => {
            setDtdListUser(dtd_response.data)
        })
        .catch((error) => {
            console.log("Loi phat sinh")
        })
    })
    const dtdelementUser=dtdListUser.map((dtd_Item, index) => {
        return (
            <tr>
                <td>{dtd_Item.dtdId}</td>   
                <td>{dtd_Item.dtdFullname}</td>
                <td>{dtd_Item.dtdAge}</td>
                <td>{dtd_Item.dtdActive?'Hoat Dong' : 'Khoa'}</td>
                <td>
                    <button>Sua</button>
                    <button>Xoa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sach</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {dtdelementUser}
                 
            </tbody>
        </table>
    </div>
  )
}
