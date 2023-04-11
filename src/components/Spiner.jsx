import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Spiner({variant}) {
  return (
    <div className='mt-5'>

        <Spinner animation="border" variant={variant} />
    </div>
  )
}

export default Spiner