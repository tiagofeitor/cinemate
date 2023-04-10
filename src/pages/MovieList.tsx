
import {Card} from "../components";
import { useFetch } from '../hooks/useFetch';
import { useTitle } from "../hooks/useTitle";
import {Movie} from "../interfaces/Movie"

export const MovieList = (  param:{title:string, url:string }  ) => {

  const {data : movies} = useFetch(param.url, null); //queryTerm = null
      
  /* UPDATE DOCUMENT TITLE */
  useTitle(`${param.title} / Cinemate`);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>              
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
