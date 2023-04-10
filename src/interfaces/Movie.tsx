export type Movie = {
        "adult": boolean,
        "backdrop_path": string,
        "budget": number,
        "genres": Genre[]
        "genre_ids": number[],
        "id": number,
        "original_language": string,
        "original_title": string,
        "overview": string,
        "popularity": number,
        "poster_path": string,
        /* create Date type??????????? */
        "release_date": string,
        "runtime": number,
        "revenue": number 
        "title": string
        "video": boolean,
        "vote_average": number,
        "vote_count": number,
        "imdb_id" : string

}
export type Genre = {
    "id": number,
    "name": string
}
export const DummyMovie = {
    "adult": false,
    "backdrop_path": "",
    "genres": [],
    "genre_ids": [],
    "id": 0,
    "original_language": "",
    "original_title": "",
    "overview": "",
    "popularity": 0,
    "poster_path": "",
    /* create Date type??????????? */
    "release_date": "",
    "revenue": 0,
    "runtime": 0,
    "budget" : 0,
    "title": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0,
    "imdb_id": ""
}

export type KeyMovie={
    key: number,
    movie: Movie 
}
export type URL={
    url: string
}
export type Query={
    query: string,
    url: string
}