
import { MovieCard } from "../components"
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath,title}) => {

const { data: movies }=useFetch(apiPath,"");
useTitle(title);
  return (
    <div>
      <section className="max-w-7xl  py-7 mx-auto">
      <div className="justify-evenly flex flex-wrap">
      { movies.map((movie)=>
       ( 
       <MovieCard key={movie.id} movie={movie}/>
       )
        ) }
      
      </div>
      </section>
    </div>
  )
}
