import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "../moviesSlice";
import {genresReducer} from "../genresSlice";
import {searchReducer} from "../searchSlice";
import {themeReducer} from "../themeSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer,
        theme: themeReducer
    }
})
export { store }