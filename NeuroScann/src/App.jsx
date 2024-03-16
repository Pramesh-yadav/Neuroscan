import {Routes, Route} from 'react-router-dom';
import { useState } from 'react'

import React from "react";
import Login from './Login';
import PageNotFound from './PageNotFound';
import Layout from './Layout';
import Signup from './Signup';
import Welcome from './Welcome';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';
import Predict from './Predict';
import Example from './components/Dashboard';
import MainDashboard from './components/MainDashboard';
import Users from './components/Users';
import Blogs from './components/Blog';

export default function App() {
  return (
<Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Welcome/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Predict' element={<Predict/>}/>
      </Route>
      <Route path='/admin' element={<Example/>}>
        <Route index element={<MainDashboard/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/blogs" element={<Blogs/>}/>
      </Route>
    </Routes>

  )
}