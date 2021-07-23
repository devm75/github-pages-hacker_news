import React from 'react'
import { HANDLE_PAGE } from './actions';
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return <div className="btn-container">
    <button disable={isLoading} onClick={() => handlePage('dec')}>prev</button>
    <p>{page + 1}of { nbPages}</p>
    <button disable={isLoading} onClick={() => handlePage('inc')}>next</button>
  </div>
}

export default Buttons
