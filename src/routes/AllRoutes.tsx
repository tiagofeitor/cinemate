import { Routes, Route } from 'react-router-dom';
import {MovieDetail, MovieList, PageNotFound} from "../pages";
import { SearchMovie as Search} from '../pages/SearchMovie';

export const AllRoutes = () => {
  return (

      <div className='bg-slate-200 dark:bg-darkbg'>
        <Routes>
            <Route path="/" element={<MovieList title="Home" url="movie/now_playing" />}/>
            <Route path="/movies/:id" element={<MovieDetail/>}/>
            <Route path="/movies/popular" element={<MovieList url="movie/popular"  title="Popular"/>}/>
            <Route path="/movies/top" element={<MovieList url="movie/top_rated"  title="Top"/>}/>
            <Route path="/movies/upcoming" element={<MovieList url="movie/upcoming" title="Upcoming"/>}/>
            <Route path="/search" element={<Search url="search/movie" />}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
  )
}
