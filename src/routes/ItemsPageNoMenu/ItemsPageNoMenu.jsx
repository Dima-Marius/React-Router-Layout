import React from 'react';
import style from './itemsPageNoMenu.module.css';
import { Link,Outlet } from 'react-router-dom';

function ItemsPage() {

  return (
    <React.Fragment>
    <div className={style.pagetitle}>
        Items Page
    </div>
    <div>
        <Link to='/ItemsPageWithoutMenu/1'>Item 1</Link>
        <Link to='/ItemsPageWithoutMenu/2'>Item 2</Link>
        <Link to='/ItemsPageWithoutMenu/3'>Item 3</Link>
        <Link to='/ItemsPageWithoutMenu/4'>Item 4</Link>
        <Link to='/ItemsPageWithoutMenu/create'>Create</Link>
     </div>
     <br/>
     <Outlet/>
    </React.Fragment>
  )
}

export default ItemsPage