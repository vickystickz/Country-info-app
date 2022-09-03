import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div >
      <header className='h-24 p-6 lg:px-28  flex justify-between bg-azure-blue '>
          <div>
              <Link to="/"><h2 className='text-2xl font-bold'>Country info</h2></Link>
          </div>
          <nav>
            <ul>
              <Link to="/about"><li className='p-3 rounded-md justify-center bg-blue-black hover:p-2.5'>About</li></Link>
            </ul>
          </nav>
      </header>
    </div>
  )
}

export default header
