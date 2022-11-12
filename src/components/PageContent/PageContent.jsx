import React from 'react';
import style from './pageContent.module.css'

function PageContent({ pageName }) {
  return (
    <section className={style.content}>
        <h2>You are now on the {pageName} page!</h2>
    </section>
  )
}

export default PageContent