import { useState , useEffect} from "react"

export const useFetch = (apiPath,queryTerm="") => {
  
  const [data,setData]=useState([]);
  const url=`https://api.themoviedb.org/3/${apiPath}?api_key=fc27651d711be26b24144fe561ba9587&query=${queryTerm}`;
  
    useEffect(() => {
        async function fetchMovies(){
          const response= await fetch(url);
         const json=await response.json();
         setData(json.results);
        }
        fetchMovies();
      
      }, [url])

  return {data}
}