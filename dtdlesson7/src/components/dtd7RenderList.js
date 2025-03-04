import React from 'react'

export default function dtd7RenderList() {
    const dtd7Names = ["Hùng","Dũng","Sang","Trọng"];

    // Hiển thị giá trị của mảng
    const dtd7ElementName = dtd7Names.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div>
      <h2>Danh sách các anh hùng thời đại</h2>
      {dtd7ElementName}
    </div>
  )
}