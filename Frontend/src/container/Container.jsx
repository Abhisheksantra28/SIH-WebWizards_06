import React from 'react'

const Container = ({children,className=""}) => {
  return (
    <div className= {`max-w-screen-2xl mx-auto md:px-14 p-4 ${className}`}>
        {children}
    </div>
  )
}

export default Container