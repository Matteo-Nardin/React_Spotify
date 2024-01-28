import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSearchedSong } from '../slice/songsSlice'
import { useSelector } from 'react-redux';

export default function MyForm() {

  const songs = useSelector(state => state)
  const dispatch = useDispatch();
  const [query, setQuery] = useState("")

  const handleChange = (e) =>{
    setQuery(e.target.value)
  }

  const handleSearch = () =>{
    dispatch(getSearchedSong(query))
    console.log(songs)
  }

  return (
    <>
        <input onChange={handleChange} type="text" className="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
        <div className="input-group-append" style={{marginBottom: "4%"}}>
          <button onClick={handleSearch} className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" >
              GO
          </button>
        </div>
    </>
  )
}
