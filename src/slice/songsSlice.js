import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    songSearch: [],
    loading: false,
    error: "",
    artist:[],
    album:[]
}; 


//https://striveschool-api.herokuapp.com/api/deezer/search?q=battiato

//artist:
//https://striveschool-api.herokuapp.com/api/deezer/search?q=Franco%20Battiato

//album:
//https://striveschool-api.herokuapp.com/api/deezer/album/236529752

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const albumEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/album/"

export const getSearchedSong = createAsyncThunk("searchedJob/fetch", async (query) => {

    const response = await fetch(baseEndpoint + query)
    if(!response.ok) { throw new Error(response.statusText)}
    console.log(initialState.songSearch)
    return response.json()
      
})

export const getArtist = createAsyncThunk("searchedArtist/fetch", async (artist) => {

    const response = await fetch(artist)
    if(!response.ok) { throw new Error(response.statusText)}
    console.log(initialState.songSearch)
    return response.json()
})

export const getAlbum = createAsyncThunk("searchedAlbum/fetch", async (albumId) => {

    const response = await fetch(albumEndpoint + albumId)
    if(!response.ok) { throw new Error(response.statusText)}
    console.log(initialState.songSearch)
    return response.json()
})

const songSearch_slice = createSlice(
  {
    name: 'songSearch',
    initialState: initialState,

    reducers: {},
    
    extraReducers: builder => {
      builder.addCase(getSearchedSong.pending, (state, action) => {
          state.loading = true
        })
        .addCase(getSearchedSong.rejected, (state, action) => {
          state.loading = false
          state.error = "Errore nel caricamento dei dati!!!"
        })
        .addCase(getSearchedSong.fulfilled, (state, action) => {
          // console.log(action)
          state.loading = false 
          state.songSearch = action.payload.data
        })
        .addCase(getArtist.pending, (state, action) => {
          state.loading = true
        })
        .addCase(getArtist.rejected, (state, action) => {
          state.loading = false
          state.error = "Errore nel caricamento dei dati!!!"
        })
        .addCase(getArtist.fulfilled, (state, action) => {
          // console.log(action)
          state.loading = false 
          state.songSearch = action.payload.data
        })
        .addCase(getAlbum.pending, (state, action) => {
          state.loading = true
        })
        .addCase(getAlbum.rejected, (state, action) => {
          state.loading = false
          state.error = "Errore nel caricamento dei dati!!!"
        })
        .addCase(getAlbum.fulfilled, (state, action) => {
          // console.log(action)
          state.loading = false 
          state.songSearch = action.payload.data
        })
    }


  }
)

const {  reducer } = songSearch_slice;
/* export const { addFavourite, removeFavourite } = actions; */
export default reducer;