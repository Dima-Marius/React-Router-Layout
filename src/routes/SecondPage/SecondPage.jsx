import React, { useEffect } from 'react'
import ContextSettings from '../../components/ContextSettings/ContextSettings';
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
        <ContextSettings/>
    </div>
  )
}

export default SecondPage