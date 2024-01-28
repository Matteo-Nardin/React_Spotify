import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArtist } from '../slice/songsSlice';
import { useDispatch } from 'react-redux';

export default function DisplaySearch() {

    const songs = useSelector(state => state.songSearch.songSearch)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //dispatch(getArtist)


  return (
    <>
        <div>DisplaySearch:</div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {songs.map((x, i)=> 
                <div key={i} className="col text-center" id="538660022">
                    <div onClick={ ()=> navigate("/album/" + x.album.id )}>
                        <img className="img-fluid" src={x.album.cover_medium} alt=""/>
                    </div>
                    <p style={{cursor: "pointer"}} onClick={ ()=> navigate("/album/" + x.album.id )}>Album: {x.album.title}</p>
                    <p style={{cursor: "pointer"}} onClick={ ()=> navigate("/artist")  }>Artista: {x.artist.name}</p>        
                </div>
            )}
        </div>
    </>
  )
}
