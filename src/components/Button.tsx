import React from 'react'

export const Button = (text: {text: string} ) => {
  return (
    <button className='w-64 rounded-lg py-2 text-slate-700 font-bold text-xl bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300  dark:bg-gradient-to-b dark:from-slate-200 dark:via-slate-300 dark:to-slate-500 dark:black'>{text.text}</button>
    )
}
