
import { useTitle } from "../hooks/useTitle";
import { Link } from 'react-router-dom'
import { Button } from '../components'

export const PageNotFound = () => {
useTitle(`Page Not Found`);
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops</p>
          <img className='rounded' src="/path/to/404-image.jpg" alt="Page not found"/>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
        </main>
  )
}
