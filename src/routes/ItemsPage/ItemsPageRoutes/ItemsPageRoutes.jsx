import React from 'react'
import { Routes, Outlet, Route } from 'react-router-dom'
import AddItem from '../../../components/AddItem/AddItem'
import Item from '../../../components/Item/Item'

function ItemsPageRoutes() {
  return (
    <React.Fragment>
     <Routes>
          <Route path=':id' element={<Item/>} />
          <Route path='create' element={<AddItem/>} />
     </Routes>
     <Outlet/>
    </React.Fragment>
  )
}

export default ItemsPageRoutes