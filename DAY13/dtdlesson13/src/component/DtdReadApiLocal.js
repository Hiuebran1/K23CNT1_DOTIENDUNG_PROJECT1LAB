import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function DtdReadApiLocal() {
    const [dtdListUser, setDtdListUser] = useState([])
    const apiUrl = "http://localhost:3001/users"
    useEffect  (() => {
        axios.get(apiUrl)
        .then((dtdResponse) => {
            setDtdListUser(dtdResponse.data)
        })
        .catch((error) => {
            console.log("Loi");
        })
    },[])
  return (
    <div>
        <h2>Doc du lieu tu API Local</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                     
                </tr>
            </thead>
            <tbody>
                {dtdListUser.map((dtdItem, index) => {
                    return (
                        <tr>
                            <td>{dtdItem.fullname}</td>
                            <td>{dtdItem.age}</td>
                        </tr>
                    )
                }
                    
                )}
            </tbody>
        </table>
    </div>
  )
}
