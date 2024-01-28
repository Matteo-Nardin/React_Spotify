import React from 'react'
import { useSelector } from 'react-redux';

export default function ArtistsPage() {


  return (
    <>
    {/* ho tolto body */}
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
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 className="titleMain">U2</h2>
                    <div id="followers">6562868 followers</div>
                    <div className="d-flex justify-content-center" id="button-container">
                        <button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                        PLAY
                        </button>
                        <button className="btn btn-outline-light mainButton d-inline" id="followButton">
                        FOLLOW
                        </button>
                    </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                    <div className="mt-4 d-flex justify-content-start">
                        <h2 className="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div className="pt-5 mb-5">
                        <div className="row" id="apiLoaded">
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=102819">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b255afa51b3c1af7872acb56da319c2d/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "With Or Without ..."
                    </a><br/>
                    <a href="/album_page.html?id=102819">
                        Album: "The Joshua Tree"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=161962">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/c66b126bb3afe75c7fedd62f9df4956b/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Sunday Bloody Su..."
                    </a><br/>
                    <a href="/album_page.html?id=161962">
                        Album: "War (Remastered)..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=102819">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b255afa51b3c1af7872acb56da319c2d/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "I Still Haven't ..."
                    </a><br/>
                    <a href="/album_page.html?id=102819">
                        Album: "The Joshua Tree"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=422136">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/6895509ae173331d8bf4bc7508a2c015/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Pride (In The Na..."
                    </a><br/>
                    <a href="/album_page.html?id=422136">
                        Album: "The Unforgettabl..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=216487">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b37725cd9d9771d7674df22fafdcc0a2/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Beautiful Day"
                    </a><br/>
                    <a href="/album_page.html?id=216487">
                        Album: "All That You Can..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=1316047">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/64b797ea83d52f3869593a448c790a4d/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "One"
                    </a><br/>
                    <a href="/album_page.html?id=1316047">
                        Album: "Achtung Baby (De..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=39558271">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/76c4322b0ea4ab5ed1e3a9f7d3208e28/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "New Year's Day"
                    </a><br/>
                    <a href="/album_page.html?id=39558271">
                        Album: "The Best Of 1980..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=119139">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/e8d9f274cb77eac4174343a23950cdfc/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "One"
                    </a><br/>
                    <a href="/album_page.html?id=119139">
                        Album: "The Best Of 1990..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=161962">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/c66b126bb3afe75c7fedd62f9df4956b/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "New Year's Day (..."
                    </a><br/>
                    <a href="/album_page.html?id=161962">
                        Album: "War (Remastered)..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=249608">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/69c4ded5f55e250d4ff22ca4e7d3ed2c/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Stay (Faraway, S..."
                    </a><br/>
                    <a href="/album_page.html?id=249608">
                        Album: "Zooropa"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=230586">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/74985254012fb1794c487fe3f5aa3840/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Vertigo"
                    </a><br/>
                    <a href="/album_page.html?id=230586">
                        Album: "How To Dismantle..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=492747781">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/33592ef25c2ec5e0a5adf404a6d1a873/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Atomic City"
                    </a><br/>
                    <a href="/album_page.html?id=492747781">
                        Album: "Atomic City"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=154545792">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b236b5885571f06ea64a5395ae9f73d7/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "U2"
                    </a><br/>
                    <a href="/album_page.html?id=154545792">
                        Album: "Gemelli"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=216487">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b37725cd9d9771d7674df22fafdcc0a2/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Elevation"
                    </a><br/>
                    <a href="/album_page.html?id=216487">
                        Album: "All That You Can..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=8743187">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/2496164084470aec6c92c07e2c338af9/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Every Breaking W..."
                    </a><br/>
                    <a href="/album_page.html?id=8743187">
                        Album: "Songs Of Innocen..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=315764147">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/0d537cfcb8707042b8ab5d6254fbb5c3/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "U2"
                    </a><br/>
                    <a href="/album_page.html?id=315764147">
                        Album: "East of Potsdam"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=39558181">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/76c4322b0ea4ab5ed1e3a9f7d3208e28/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Where The Street..."
                    </a><br/>
                    <a href="/album_page.html?id=39558181">
                        Album: "The Best Of 1980..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=272018">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/88d6de93fa8f2cb7f1d2bf96333ba64a/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Desire"
                    </a><br/>
                    <a href="/album_page.html?id=272018">
                        Album: "Rattle And Hum"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=533495352">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/76f0c681330f1768cabd9764f38c7f0f/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "U2"
                    </a><br/>
                    <a href="/album_page.html?id=533495352">
                        Album: "."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=216487">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b37725cd9d9771d7674df22fafdcc0a2/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Stuck In A Momen..."
                    </a><br/>
                    <a href="/album_page.html?id=216487">
                        Album: "All That You Can..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=395548477">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/ff34117d14ea62a431e6e16f1a74fa72/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Pride (In The Na..."
                    </a><br/>
                    <a href="/album_page.html?id=395548477">
                        Album: "Pride (In The Na..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=52688072">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/cbd7c88b006ac7c086b109b13f0d7483/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "U2"
                    </a><br/>
                    <a href="/album_page.html?id=52688072">
                        Album: "Lo&lt;3"
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=42217921">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/7fc90589ea55c4a71e7d50225267862e/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Where The Street..."
                    </a><br/>
                    <a href="/album_page.html?id=42217921">
                        Album: "The Joshua Tree ..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=274512">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/b0d2aed7c1151a0f7a32c6f8764ddc79/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "Magnificent"
                    </a><br/>
                    <a href="/album_page.html?id=274512">
                        Album: "No Line On The H..."
                    </a>
                    </p>
                </div>
                <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html?id=230586">
                    <img className="img-fluid" src="https://e-cdns-images.dzcdn.net/images/cover/74985254012fb1794c487fe3f5aa3840/250x250-000000-80-0-0.jpg" alt="1"/>
                    </a>
                    <p>
                    <a href="pippo">
                        Track: "City Of Blinding..."
                    </a><br/>
                    <a href="/album_page.html?id=230586">
                        Album: "How To Dismantle..."
                    </a>
                    </p>
                </div></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* <!--END MAIN--> */}

        {/* <!--NAVBAR FLEX-BOTTOM--> */}
        {/* <div className="container-fluid fixed-bottom bg-container pt-1">
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
        </div> */}
    {/* <!--END NAVBAR BOTTOM--> */}
    
    </>

  )
}
