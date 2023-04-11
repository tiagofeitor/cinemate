import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTitle } from '../hooks/useTitle';
import { DummyMovie, Movie } from '../interfaces/Movie';
import NotFound from "../assets/PageNotFound.jpg"



export const MovieDetail = () => {
  const params=useParams();
  const [movie, setMovie] = useState<Movie>(DummyMovie);
  const navigate = useNavigate();

  /* GET IMAGE FROM API */
  let imageSrc = "";
  if(movie){
    imageSrc = movie.poster_path ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}` : NotFound
  }
  
 
  /* FETCH MOVIE FROM API */
  useEffect(()=>{
      async function fetchMovie(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=704266ceef2c0c75c8156d3d96273efd`);
        console.log(response.status)
        const json = await response.json();

        if(response.status!=200) navigate("/movie-not-found");   

        setMovie(json);
      }
      fetchMovie();

    },  []);
  /* UPDATE DOCUMENT TITLE */    
  useTitle( `${movie.title} / Cinemate` );  
  

    return (
      <main>
          <section className='flex justify-around flex-wrap py-5'>
            {/* IMAGE */}
            <div className='max-w-sm'>
              <img className="rounded" src={imageSrc} alt={NotFound}></img>
            </div>
            {/* TEXT */}
            <div className='max-w-3xl text-gray-700 text-lg dark:text-white text-center lg:text-left'>
              <h1 className='text-4xl font-bold my-3'>{movie ? movie.title : "Not Found"}</h1>
              <p className='my-3'>{movie ? movie.overview : '...'}</p>
              {/* se tiver a lista de Genres renderiza , se nao existir dá skip ao p */}
              {movie.genres ? 
              <p className='my-7 flex flex-wrap gap-2'>
                { movie.genres.map( (genre) => 
                  <span key={genre.id} className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2'>{genre.name}</span>
                  )}
              </p> : ""}
              {/* RATING DIV */}
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p className="ml-2 font-semibold text-gray-900 dark:text-white">{movie.vote_average}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className=" text-gray-900  dark:text-white">{movie.vote_count} reviews</span>
              </div>
               {/* RUNTIME */}
              <p className='my-4'>
                  <span className='mr-2 font-bold'>Runtime:</span>
                  <span>{movie.runtime} min</span>
              </p>
              {/* BUDGET */}  
              <p className='my-4'>
                  <span className='mr-2 font-bold'>Budget:</span>
                  <span>{movie.budget}$</span>
              </p>
              {/* REVENUE */}            
              <p className='my-4'>
                  <span className='mr-2 font-bold'>Revenue:</span>
                  <span>{movie.revenue}$</span>
              </p>
              {/* RELEASE DATE */}            
              <p className='my-4'>
                  <span className='mr-2 font-bold'>Release date:</span>
                  <span>{movie.release_date} min</span>
              </p>
              {/* IMDb */}
              <p className='my-4'>
                  <span className='mr-2 font-bold'>IMDb code</span>
                  <a target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${movie.imdb_id}`}>{movie.imdb_id}</a>
              </p>

            </div>
          </section>
      </main>
    
  )
  
 
     
 
                
  

}
