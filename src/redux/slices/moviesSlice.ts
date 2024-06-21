import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IMovieInterface} from "../../interfaces/IMovieInterface";
import {movieService} from "../../services/api.service";

interface IState {
    page: number | null;
    movies: IMovieInterface[];
    total_pages: number | null;
    total_results: number | null;
    movieCard: IMovieInterface;
}

const initialState: IState = {
    page: null,
    movies: [],
    total_pages: null,
    total_results: null,
    movieCard: null
};

const getAll = createAsyncThunk<{ results: IMovieInterface[], total_pages: number, total_results: number }, number>(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return {results: data.results, total_pages: data.results.length, total_results: data.results.length}
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getByMovieId = createAsyncThunk<IMovieInterface, number>(
    'movieSlice/getByMovieId',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByMovieId(id);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results || [];
                state.total_pages = action.payload.total_pages || 0;
                state.total_results = action.payload.total_results
            })
            .addCase(getByMovieId.fulfilled, (state, action) => {
                state.movieCard = action.payload
            })
});

const {reducer: moviesReducer, actions} = moviesSlice;
const moviesActions = {
    ...actions,
    getAll,
    getByMovieId
};

export {
    moviesReducer,
    moviesActions
};