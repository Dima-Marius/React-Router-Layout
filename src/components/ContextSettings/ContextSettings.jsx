import React, { useContext } from 'react';
import ThemeContext from '../../context/theme-context';
import style from './contextSettings.module.css';

function ContextSettings() {
  const ctx = useContext(ThemeContext)

  const counterHandler = () => {
    ctx.setPrefferences({...ctx.prefferences, counter: ctx.prefferences.counter + 1})
  }

  const themeHandler = () => {
    ctx.prefferences.theme === 'off'
    ?
    ctx.setPrefferences({...ctx.prefferences, theme: 'on'})
    :
    ctx.setPrefferences({...ctx.prefferences, theme: 'off'});
  }

  return (
    <div className={style.container}>
        <p>Theme: {ctx.prefferences.theme}</p>
        <p>Counter: {ctx.prefferences.counter}</p>
        <button className={style['ctx-btn']} name='counter' onClick={counterHandler} type='text'>Increase!</button>
        <button className={style['ctx-btn']} name='theme' onClick={themeHandler} type='text'>Change Theme</button>
    </div>
  )
}

export default ContextSettings