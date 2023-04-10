import PageNF from '../assets/PageNotFound.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { useEffect } from 'react'


export const PageNotFound = () => {

  useEffect(()=>{
    document.title = 'Page Not Found / Cinemate'

  },[])

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
            <p className='text-7xl font-bold my-10 text-gray-700 dark:text-white'>404, Oops!</p>

            <div className='max-w-xl'>
                <img className='rounded-lg' src={PageNF} alt="Page Not Found"></img>
            </div>
            <p className='text-3xl font-bold mt-10 mb-5 text-gray-700 dark:text-white'>Page does not exist</p>

        </div>
        <div className='flex justify-center my-3'>
          <Link to="/">
            <Button text="Back to Cinemate"></Button>
          </Link>
        </div>
      </section>

    </main>
  )
}
