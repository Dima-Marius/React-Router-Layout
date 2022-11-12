import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './addItem.module.css';

function AddItem() {

  const navigate = useNavigate();

  return (
    <div className={style.add}>
      Add a new item!
      <br/>
      <button className={style['navigation-btn']} onClick={() => navigate(-1)}>Go to previous item</button>
      </div>
  )
}

export default AddItem