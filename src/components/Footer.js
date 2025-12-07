
import {Link} from 'react-router-dom';
export const Footer = () => {
  return (
    

        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-neutral-primary-soft border-t border-default shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Instagram</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">LinkedIn</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">X</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">YouTube</Link>
                </li>
            </ul>
        </footer>

  )
}
