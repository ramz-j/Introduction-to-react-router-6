import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = useState([])

  const typeFilter = searchParams.get('type')
      
  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  // function genNewSearchParamString(key, value) {
  //   const sp = new URLSearchParams(searchParams)
  //   if (value === null) {
  //     sp.delete(key)
  //   } else {
  //     sp.set(key, value)
  //   }
  //   return `?${sp.toString()}`
  // }
  
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if(value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  const displayedVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter)
    : vans

  const vanElements = displayedVans.map(van => (
    <div key={van.id} className='van-tile'>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>

      {/* Filtrar Vans sin setSearchParams, mediante Link con el to definido alli mismo y no Button */}
      {/* <Link to='/vans' className='van-type clear-filters'>
          All types
        </Link>
        <Link to='?type=simple' className='van-type simple'>
          Simple
        </Link>
        <Link to='?type=luxury' className='van-type luxury'>
          Luxury
        </Link>
        <Link to='?type=rugged' className='van-type rugged'>
          Rugged
        </Link> */}

        {/* <Link to={genNewSearchParamString('type', null)} className='van-type clear-filters'>
          All types
        </Link>
        <Link to={genNewSearchParamString('type', 'simple')} className='van-type simple'>
          Simple
        </Link>
        <Link to={genNewSearchParamString('type', 'luxury')} className='van-type luxury'>
          Luxury
        </Link>
        <Link to={genNewSearchParamString('type', 'rugged')} className='van-type rugged'>
          Rugged
        </Link> */}

        {/* setSearchParams recibiendo un objeto */}
        {/* <button onClick={() => setSearchParams({})}>All Types</button>
        <button onClick={() => setSearchParams({type:'simple'})}>Simple</button> 
        <button onClick={() => setSearchParams({type:'luxury'})}>Luxury</button>
        <button onClick={() => setSearchParams({type:'rugged'})}>Rugged</button> */}

        {/* onClick definido alli mismo */}
        {/* <button 
          onClick={() => setSearchParams('')}
          className='van-type clear-filters'
        >
          All Types
        </button>
        <button 
          onClick={() => setSearchParams('?type=simple')}
          className='van-type simple'
        >
          Simple
        </button>   
        <button
          onClick={() => setSearchParams('?type=luxury')}
          className='van-type luxury'
        >
          Luxury
        </button>      
        <button
          onClick={() => setSearchParams('?type=rugged')}
          className='van-type rugged'
        >
          Rugged
        </button> */}

        <button 
          onClick={() => handleFilterChange('type', null)}
          className='van-type clear-filters'
        >
          All Types
        </button>
        <button 
          onClick={() => handleFilterChange('type', 'simple')}
          className='van-type simple'
        >
          Simple
        </button>   
        <button
          onClick={() => handleFilterChange('type', 'luxury')}
          className='van-type luxury'
        >
          Luxury
        </button>      
        <button
          onClick={() => handleFilterChange('type', 'rugged')}
          className='van-type rugged'
        >
          Rugged
        </button>

        <div className="van-list">
          {vanElements}
        </div>
      </div>
    </div>
  )
}
