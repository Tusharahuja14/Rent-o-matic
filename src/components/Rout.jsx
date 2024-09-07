import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
import Navbar from './Navbar';
import Item from './Item';
import Login from './Login';
import Signup from './Signup';
import RentNow from './RentNow';
const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="/rent-now/:categoryId" element={<RentNow />} />
          <Route path="*" element={<NoPage />} />
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
