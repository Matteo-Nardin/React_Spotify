import React from 'react'
import SingleAlbum from './SingleAlbum'

export default function DisplayAlbum() {
  return (
    <>
        <div className="row">
            <div className="col-10">
                <div id="rock">
                    <h2>Rock Classics</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                        <SingleAlbum></SingleAlbum>
                        {/* <div className="col text-center" id="538660022">
                            <a href="/album_page.html?id=70200002">
                            <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/1f0365311a9d03c267f175e0ef79f40c/250x250-000000-80-0-0.jpg" alt="1"/>
                            </a>
                            <p>
                            <a href="/album_page.html?id=70200002">
                                Album: "Slippery When We..."<br/>
                            </a>
                            <a href="/artist_page.html?id=637">
                                Artist: Bon Jovi
                            </a>
                            </p>
                        </div> */}
    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
