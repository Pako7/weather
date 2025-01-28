import { React, Suspense } from 'react'
import { Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <>
      
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='container m-auto p-2'>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  )
}

export default Layout;