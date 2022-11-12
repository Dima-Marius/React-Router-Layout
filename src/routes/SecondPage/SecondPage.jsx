import React, { useEffect } from 'react'
import PageContent from '../../components/PageContent/PageContent';
import style from './SecondPage.module.css'

function SecondPage() {
  const pageName = 'second'

  useEffect(() => {
    document.title = pageName.charAt(0).toUpperCase() + pageName.slice(1) + ' page'
  }, []);

  return (
    <div className={style.secondPage}>
        <PageContent pageName={pageName} />
    </div>
  )
}

export default SecondPage