import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesListPage} from "../pages/MoviesListPage";
import {MovieCardPage} from "../pages/MovieCardPage";
import {MoviesByGenrePage} from "../pages/MoviesByGenrePage";
import {SearchPage} from "../pages/SearchPage";
import React from "react";
import {GenresPage} from "../pages/GenresPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>,
        children: [
            { index: true, element: <Navigate to={'movies'}/> },
            { path: 'movies', element: <MoviesListPage/> },
            { path: 'movie/:id', element: <MovieCardPage/> },
            { path: 'genres', element: <GenresPage/>,
                children: [
                    { path: ':id', element: <MoviesByGenrePage/> }
                ]},
            { path: 'search/:query', element: <SearchPage/>,
                children: [
                    { index: true, element: <Navigate to={'movies'}/> }
                ] }
        ]
    }
]);
export { router };