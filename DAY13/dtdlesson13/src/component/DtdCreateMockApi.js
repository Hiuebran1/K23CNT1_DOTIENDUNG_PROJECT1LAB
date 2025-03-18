import React,{useState} from 'react'
import axios from 'axios'

export default function DtdCreateMockApi() {
    const [dtdFullname, setDtdFullname] = useState('')
    const [dtdAge, setDtdAge] = useState(0)
    const [dtdActive, setDtdActive] = useState(true)
    const dtdCreateUser = "https://67d962bb00348dd3e2aad94d.mockapi.io/k23cnt1-dotiendung/dtd-users"
    const dtdHandleSubmit = (event) => {
        event.preventDefault();
        console.log('dtdActive', dtdActive);
        let dtdNewUser = {dtdFullname, dtdAge, dtdActive};
        console.log( dtdNewUser);
        axios.post(dtdCreateUser, dtdNewUser)
        .then((dtd_response) => {
         
    }  )}
  return (
    <div className='alert alert-info'>  
        <h2>Them Moi Users</h2>
        <hr/>
        <form>
            <div className='row mb-1'>
                <label for="dtdFullname" >Fullname</label>
                <input type="text" name="dtdFullname" id='dtdFullname' 
                    value  = {dtdFullname}
                    onChange = {(ev) => setDtdFullname(ev.target.value)}/>
            </div>
            <div className='row mb-1'>
                <label for="dtdAge" >Age</label>
                <input type="text" name="dtdAge" id='dtdAge' 
                    value  = {dtdAge}
                    onChange = {(ev) => setDtdAge(ev.target.value)}/>
            </div>
            <div className='row mb-1'>
                <label for="dtdActive" >Active</label>
                <input type="radio" name="dtdActive" id='dtdActive_hd' value={'true'}
                 
                
                onChange={(ev) => setDtdActive(ev.target.value)} />
                    <label for ="dtdActive_hd">Hoat Dong</label>
                <input type="radio" name="dtdActive" id='dtdActive_kh' value={'false'} onChange = {(ev) => 
                    setDtdActive(ev.target.value)}/>
                    <label for ="dtdActive_kh">Khoa</label>
            </div>
            <button onClick={dtdHandleSubmit} >Create</button>
        </form>
    </div>
  )
}
