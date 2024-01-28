import React from 'react'
//images
import next from "../assets/playerbuttons/Next.png"
import play from "../assets/playerbuttons/Play.png"
import previous from "../assets/playerbuttons/Previous.png"
import repeat from "../assets/playerbuttons/Repeat.png"
import shuffle from "../assets/playerbuttons/Shuffle.png"
//components
import DisplayAlbum from '../components/DisplayAlbum'
import DisplaySearch from '../components/DisplaySearch'


export default function HomePage() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                {/* <!--SIDEBAR VERTICAL--> */}
                <div className="col-2">
                    {/* <MyNavbar></MyNavbar> */}
                </div>
                {/* <!--END SIDEBAR VERTICAL-->

                <!--MAIN--> */}
                <div className="col-12 col-md-9 offset-md-3 mainPage">
                    <div className="row">
                        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a href="pippo">TRENDING</a>
                        <a href="pippo">PODCAST</a>
                        <a href="pippo">MOODS AND GENRES</a>
                        <a href="pippo">NEW RELEASES</a>
                        <a href="pippo">DISCOVER</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                        <div id="searchResults" style={{display: "none"}}>
                            <h2>Search Results</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                        </div>
                        </div>
                    </div>
                    <DisplaySearch></DisplaySearch>
                    <DisplayAlbum></DisplayAlbum>
                    {/* <div className="row">
                            <div className="col-10">
                                <div id="rock">
                                    <h2>Rock Classics</h2>
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                                        <div className="col text-center" id="538660022">
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
                                        </div>
                                        <div className="col text-center" id="985722002">
                                            <a href="/album_page.html?id=153399712">
                                            <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/c4368c79bbe5c88b38b5c2a2527c51e5/250x250-000000-80-0-0.jpg" alt="1"/>
                                            </a>
                                            <p>
                                            <a href="/album_page.html?id=153399712">
                                                Album: "Don't Look Back ..."<br/>
                                            </a>
                                            <a href="/artist_page.html?id=927">
                                                Artist: Oasis
                                            </a>
                                            </p>
                                        </div>
                                        <div className="col text-center" id="665714262">
                                            <a href="/album_page.html?id=93733532">
                                            <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/e9d3dbc325eebdaf6bc442c2f9a05daa/250x250-000000-80-0-0.jpg" alt="1"/>
                                            </a>
                                            <p>
                                            <a href="/album_page.html?id=93733532">
                                                Album: "Synchronicity (R..."<br/>
                                            </a>
                                            <a href="/artist_page.html?id=1981">
                                                Artist: The Police
                                            </a>
                                            </p>
                                        </div>
                                        <div className="col text-center" id="12206946">
                                            <a href="/album_page.html?id=1121182">
                                            <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/250x250-000000-80-0-0.jpg" alt="1"/>
                                            </a>
                                            <p>
                                            <a href="/album_page.html?id=1121182">
                                                Album: "The Game (2011 R..."<br/>
                                            </a>
                                            <a href="/artist_page.html?id=412">
                                                Artist: Queen
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div> */}
                    {/* <div className="row">
                        <div className="col-10">
                        <div id="pop">
                            <h2>Pop Culture</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                    <div className="col text-center" id="2659940">
                        <a href="/album_page.html?id=257970">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/8b701ce9a0c1cdddf43a42638d0610b3/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=257970">
                            Album: "Back to Bedlam"<br/>
                        </a>
                        <a href="/artist_page.html?id=287">
                            Artist: James Blunt
                        </a>
                        </p>
                    </div>
                    <div className="col text-center" id="1764283667">
                        <a href="/album_page.html?id=321440247">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/c86f870a3ea8782da239a9dd10315cdc/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=321440247">
                            Album: "Top Gun: Maveric..."<br/>
                        </a>
                        <a href="/artist_page.html?id=74398">
                            Artist: OneRepublic
                        </a>
                        </p>
                    </div>
                    <div className="col text-center" id="3169161">
                        <a href="/album_page.html?id=304290">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/ef17ef6218f9a5d42b2cbd5d4eeed25f/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=304290">
                            Album: "One Of The Boys"<br/>
                        </a>
                        <a href="/artist_page.html?id=144227">
                            Artist: Katy Perry
                        </a>
                        </p>
                    </div>
                    <div className="col text-center" id="3098840">
                        <a href="/album_page.html?id=299821">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/5ba1787e1ec36dbbca38ff01fea8fb21/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=299821">
                            Album: "A Rush of Blood ..."<br/>
                        </a>
                        <a href="/artist_page.html?id=892">
                            Artist: Coldplay
                        </a>
                        </p>
                    </div></div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                        <div id="hiphop">
                            <h2>#HipHop</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                    <div className="col text-center" id="884266">
                        <a href="/album_page.html?id=100341">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/6f1644ea3f18ee2ff5673bcd03a5cca0/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=100341">
                            Album: "Lollipop"<br/>
                        </a>
                        <a href="/artist_page.html?id=74309">
                            Artist: Lil Wayne
                        </a>
                        </p>
                    </div>
                    <div className="col text-center" id="630827252">
                        <a href="/album_page.html?id=86994002">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/8c6578a2099561992fb7544e6826f767/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=86994002">
                            Album: "Graduation"<br/>
                        </a>
                        <a href="/artist_page.html?id=230">
                            Artist: Kanye West
                        </a>
                        </p>
                    </div>
                    <div className="col text-center" id="128743581">
                        <a href="/album_page.html?id=13606387">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=13606387">
                            Album: "2001"<br/>
                        </a>
                        <a href="/artist_page.html?id=763">
                            Artist: Dr. Dre
                        </a>
                        </p>
                    </div>
                    <div className="col text-center" id="6461440">
                        <a href="/album_page.html?id=595243">
                        <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg" alt="1"/>
                        </a>
                        <p>
                        <a href="/album_page.html?id=595243">
                            Album: "Recovery"<br/>
                        </a>
                        <a href="/artist_page.html?id=13">
                            Artist: Eminem
                        </a>
                        </p>
                    </div>
                    </div>
                        </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

        {/* MUSICBAR */}

        <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="row">
                <a href="pippo">
                  <img src={shuffle} alt="shuffle"/>
                </a>
                <a href="pippo">
                  <img src={previous} alt="shuffle"/>
                </a>
                <a href="pippo">
                  <img src={play} alt="shuffle"/>
                </a>
                <a href="pippo">
                  <img src={next} alt="shuffle"/>
                </a>
                <a href="pippo">
                  <img src={repeat} alt="shuffle"/>
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

    
    </>
    
  )
}
