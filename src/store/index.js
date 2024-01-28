import { configureStore } from "@reduxjs/toolkit";
//import favouritesReducer from "../slice/favouritesSlice";
//magia
import serchedSongReducer from "../slice/songsSlice";
import storage from "redux-persist/lib/storage"; // localstorage
//import sessionStorage from "redux-persist/lib/storage/session"; // sessionStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { encryptTransform } from 'redux-persist-transform-encrypt';


//import thunk from 'redux-thunk';

//livello di partenza della copia dell' app state(stato globale), "posso chiamarlo pippo"
const rootPersistConfig = {
  key: "root", // inserisci "root" per salvare l'intero store storage,
  storage, // (store engine) su che storage voglio salvare i dati | storage : storage, ????
  blacklist: ["songSearch", "loading", "error","artist","album"], //cose che non voglio salvare nel localStorage ????
  // sessionStorage
  // Codificare lo storage 
   transforms: [
    encryptTransform({
      //bisognerebbe mettere secretKey nell variabili d'ambiente o nel codice back-end
      secretKey: 'my-super-secret-key',
      onError: function (error) {
        console.log(error)
      },
    })]
};

// Combinare più reducers, altrimenti passo direttamente al persistReducer il name dello slice desiderato
const rootReducer = combineReducers({
  songSearch: serchedSongReducer,
  //favourites: favouritesReducer,
});

// Applico il persist ai miei reducers
//persistReducer(info sulla copia,combineReducer)
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// alternativamente: export const store = createStore(persistedReducer)
export const store = configureStore({
  /* reducer: {
        favourites: favouritesReducer,
        jobSearch: jobSearchReducer
    } */
  reducer: persistedReducer,

  //middleware: [thunk]
});

export const persistor = persistStore(store);