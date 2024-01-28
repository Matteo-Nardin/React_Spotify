import React from 'react'
import { getAlbum } from '../slice/songsSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function AlbumPage() {

    const dispatch = useDispatch()

    const { albumId } = useParams()
    console.log("albumId: ", useParams())

    useEffect(()=>{
        dispatch(getAlbum(albumId))
    },[])

  return (
    <>
     
        <div className="container-fluid">
            <div className="row">
                    {/* <!--SIDEBAR VERTICAL--> */}
                
                    {/* <!--END SIDEBAR VERTICAL--> */}

                    {/* <!--MAIN--> */}
                <div className="col-12 col-md-9 offset-md-3 mainPage">
                    <div className="row mb-3">
                        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a href="pippo">TRENDING</a>
                        <a href="pippo">PODCAST</a>
                        <a href="pippo">MOODS AND GENRES</a>
                        <a href="pippo">NEW RELEASES</a>
                        <a href="pippo">DISCOVER</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 pt-5 text-center" id="img-container">
                        <img src="https://api.deezer.com/album/340878/image" className="card-img img-fluid" alt="Album"/>
                        <div className="mt-4 text-center">
                            <p className="album-title">The Doors</p>
                        </div>
                        <div className="text-center">
                            <p className="artist-name">The Doors</p>
                        </div>
                        <div className="mt-4 text-center">
                            <button id="btnPlay" className="btn btn-success" type="button">Play</button>
                        </div></div>
                        <div className="col-md-8 p-5">
                            <div className="row">
                                <div className="col-md-10 mb-5" id="trackList">
                                        {/* tracce da  mappare */}
                                    <div>
                                        <div className="py-3 trackHover">
                                            <a href="pippo" className="card-title trackHover px-3" style={{color:"white"}}>Break on Through (To the Other Side)</a>
                                            <small className="duration" style={{color:"white"}}>2:25</small>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--END MAIN--> */}

        {/* <!--NAVBAR FLEX-BOTTOM--> */}
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
                <div className="col-lg-10 offset-lg-2">
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                        <div className="row">
                            <a href="pippo">
                            <img src="playerbuttons/Shuffle.png" alt="shuffle"/>
                            </a>
                            <a href="pippo">
                            <img src="playerbuttons/Previous.png" alt="shuffle"/>
                            </a>
                            <a href="pippo">
                            <img src="playerbuttons/Play.png" alt="shuffle"/>
                            </a>
                            <a href="pippo">
                            <img src="playerbuttons/Next.png" alt="shuffle"/>
                            </a>
                            <a href="pippo">
                            <img src="playerbuttons/Repeat.png" alt="shuffle"/>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-center playBar py-3">
                        <div className="col-8 col-md-6">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!--END NAVBAR BOTTOM--> */}

    </>
  )
}
