const API_URL = "https://api.themoviedb.org/3";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY_2}`
    }
};

const fetchMovieApi = async (pathname, query = "") => {

    try {
        const res = await fetch(`${API_URL}${pathname}${query}`, options);
        return res.json();
    }

    catch(err){
        throw new Error(err);
    }
}

const getPopularMovies = async () => {
    return fetchMovieApi("/movie/popular?", "language=en-US&page=1");
}

const getTopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated?", "language=en-US&page=1");
}

const getCategories = async () => {
    return fetchMovieApi("/genre/movie/list?", "language=en-US&page=1");
}

const getSingleCategory = async (categoryId) => {
    return fetchMovieApi("/discover/movie?", `include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${categoryId}`);
}

const getMovieDetail = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`);
}

export {
    fetchMovieApi,
    getPopularMovies,
    getTopRatedMovies,
    getCategories,
    getSingleCategory,
    getMovieDetail
};