import {Card} from "../components";
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../interfaces/Movie';
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const SearchMovie = (param: {url:string}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data : movies} = useFetch( param.url , queryTerm );

    /* UPDATE DOCUMENT TITLE */
  useTitle(`Searching for "${queryTerm}" / Cinemate`); 
  
  return (
    <main>
      
      <section className="py-3">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No result found for '${queryTerm}'` : `Results for '${queryTerm}'`} </p>
      </section>
      
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap '>              
          {
            
            movies.map((movie: Movie) => (
                <Card key={movie.id}  movie={movie} ></Card>
              )
            )
          }
        </div>
          
      </section>

    </main>
  )
}
