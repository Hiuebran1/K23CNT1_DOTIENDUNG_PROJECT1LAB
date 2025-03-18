import React from 'react'
import DtdReadApiLocal from './component/DtdReadApiLocal'
import DtdReadMockApi from './component/DtdReadMockApi'
import DtdCreateMockApi from './component/DtdCreateMockApi'

export default function DtdApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1> ReactJS - API - Do Tien Dung</h1>
      <hr/>
      <DtdReadApiLocal/>
      <hr/>
      <h2>Doc du lieu tu MockAPi (mockapi.io)</h2>
      <DtdReadMockApi/>

      <DtdCreateMockApi/>
    </div>
  )
}
