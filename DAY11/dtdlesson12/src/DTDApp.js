import React from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import DTDHome from './component/DTDHome'
import DTDAbout from './component/DTDAbout'
import DTDContact from './component/DTDContact'
import DTDGioiThieu from './component/DTDGioiThieu'
import DTDLienHe from './component/DTDLienHe'
import DTDSanPham from './component/DTDSanPham'
import DTDTinTuc from './component/DTDTinTuc'

export default function DTDApp() {
  return (
    <div className='container border my-3'>
      <h1>React router demo</h1>
      <hr/>
      <Router>
        <nav>
          <ul className='list-unstyled'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gioithieu">GioiThieu</Link></li>
            <li><Link to="/lienhe">LienHe</Link></li>
            <li><Link to="/sanpham">SanPham</Link></li>
            <li><Link to="/tintuc">TinTuc</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DTDHome/>} />
          <Route path="/about" element={<DTDAbout/>} />
          <Route path="/contact" element={<DTDContact />} />
          <Route path="/gioithieu" element={<DTDGioiThieu />} />
          <Route path="/lienhe" element={<DTDLienHe />} />
          <Route path="/sanpham" element={<DTDSanPham />} />
          <Route path="/tintuc" element={<DTDTinTuc />} />
        </Routes>
      </Router>
    </div>
  )
}