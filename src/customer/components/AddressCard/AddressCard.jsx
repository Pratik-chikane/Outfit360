import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div className='text-left'>
    <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName+" "+address?.lastName}</p>
        <p>{address?.streetAddress},{address?.city},{address?.state},{address?.zipCode}</p>
        <div className='space-y-1'>
            <p className='font-semibold'>phone number</p>
            <p>{address?.mobile}</p>
        </div>
    </div>
    </div>
  )
}

export default AddressCard