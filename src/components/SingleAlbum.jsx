import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function SingleAlbum() {



    const navigate = useNavigate();

  return (
    <>
        {/* dovrò ciclarlo 4 volte */}
        <div className="col text-center" id="538660022">
            <a href="/album_page.html?id=70200002">
                <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/1f0365311a9d03c267f175e0ef79f40c/250x250-000000-80-0-0.jpg" alt="1"/>
            </a>
            <p style={{cursor: "pointer"}} onClick={ ()=> navigate("/album")  }>Album</p>
            <p style={{cursor: "pointer"}} onClick={ ()=> navigate("/artist")  }>Artista</p>
            {/* <p>
                <a href="/album_page.html?id=70200002">
                    Album: "Slippery When We..."<br/>
                </a>
               
                <a href="/artist_page.html?id=637">
                    Artist: Bon Jovi
                </a>
            </p> */}
        </div>
    </>
  )
}
