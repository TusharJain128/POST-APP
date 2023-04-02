import React from 'react';
import { createRoot } from 'react-dom/client';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LoginPage from './Components/LoginPage'
import CreatePost from './Components/CreatePost'
import GetPost from './Components/getPost'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path = '/' element= {<LoginPage/>}/>
  <Route path = '/CreatePost' element= {<CreatePost/>}/>
  <Route path = '/getPost' element= {<GetPost/>}/>
  </Routes>
  </BrowserRouter>
  </>
);
