import './App.css';
import React from 'react';
import Home from './routes/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SecondPage from './routes/SecondPage/SecondPage';
import ThirdPage from './routes/ThirdPage/ThirdPage';
import Navbar from './components/Navbar/Navbar';
import ItemsPage from './routes/ItemsPage/ItemsPage';
import NotFound from './routes/NotFound/NotFound';
import ItemsPageRoutes from './routes/ItemsPage/ItemsPageRoutes/ItemsPageRoutes';
import ItemsPageNoMenu from './routes/ItemsPageNoMenu/ItemsPageNoMenu.jsx'


function App() {

  return (
    <React.Fragment>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='*' element={<NotFound/>} />
       <Route path='/SecondPage' element={<SecondPage/>} />
       <Route path='/ThirdPage' element={<ThirdPage/>} />
       <Route path='/ItemsPageWithoutMenu'>
          <Route index element={<ItemsPageNoMenu/>}/>
          <Route path='*' element={<ItemsPageRoutes/>}/>
       </Route>
       <Route path='/ItemsPage' element={<ItemsPage/>}>
          <Route path='*' element={<ItemsPageRoutes/>}/>
       </Route>  

      </Routes>
    </React.Fragment>
  );
}

export default App;
