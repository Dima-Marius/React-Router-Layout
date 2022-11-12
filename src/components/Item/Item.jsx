import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../routes/NotFound/NotFound';
import style from './item.module.css'

function Item() {

    const { id } = useParams();
    const navigate = useNavigate();

  return (
    <div className={style.item}>
      {id <= 4
      ?
      <div className={style.item}>
        This is the page with the item {id}
        <button className={style['navigation-btn']} onClick={() => navigate(-1)}>Go to previous item</button>
        </div>
      :
      <NotFound />}
    </div>
  )
}

export default Item