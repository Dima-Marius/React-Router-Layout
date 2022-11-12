import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from './notFound.module.css'

function NotFound() {
  const [countdown, setCountdown] = useState(3)
  const pageName = '404';
  const navigate = useNavigate();
  const { urlParams } = useParams();



useEffect(() => {
    document.title = pageName
    const countDownTimer = setInterval(() => {
      setCountdown(prev => prev - 1)
    },1000)
    const redirectTimer = setTimeout(() => {
      navigate(-1)
      }, 3000)
       return () => {
        clearTimeout(redirectTimer)
        clearInterval(countDownTimer)
      }
  }, [navigate]);



  return (
    <div className={style['error-message']}>
        <h2>
            Error 404 { urlParams } not found.
            <br/><br/>
            <p className={style.p}>Redirecting in {countdown} {`${countdown === 1 ? 'second' : 'seconds'}`}</p>
            <br/>
            <button onClick={() => navigate(-1)} className={style['back-btn']}>Go back one page</button>
        </h2>
        
    </div>
  )
}

export default NotFound