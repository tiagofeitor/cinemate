import React, { useEffect } from 'react'
import { useState } from 'react';
import { URL } from '../interfaces/Movie';

export const useFetch = (url :string, queryTerm:string | null) => {
    const [data, setData] = useState([]);
    const fullURL = `https://api.themoviedb.org/3/${url}?api_key=704266ceef2c0c75c8156d3d96273efd&query=${queryTerm}`;

    //console.log(fullURL)

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(fullURL);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
        },[url, queryTerm])


  return {data}
}
