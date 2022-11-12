import React from 'react';
import style from './itemspage.module.css';
import { Link,Outlet } from 'react-router-dom';

function ItemsPage() {
  return (
    <React.Fragment>
    <div className={style.pagetitle}>
        Items Page
    </div>
    <div>
        <Link to='/ItemsPage/1'>Item 1</Link>
        <Link to='/ItemsPage/2'>Item 2</Link>
        <Link to='/ItemsPage/3'>Item 3</Link>
        <Link to='/ItemsPage/4'>Item 4</Link>
        <Link to='/ItemsPage/create'>Create</Link>
     </div>
     <br/>
     <Outlet/>
    </React.Fragment>
  )
}

export default ItemsPage