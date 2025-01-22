import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
import { getMovieDetail } from '@/services/movie'

async function MovieDetailPage({ params, searchParams }) {

  const movieDetail = await getMovieDetail(params.id);
  

  if (!movieDetail) {
    notFound();
  }

  return (
    <MovieContainer movie={movieDetail} />
  )
}

export default MovieDetailPage