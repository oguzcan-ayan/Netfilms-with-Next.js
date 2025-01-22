import React from 'react'

import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

function LoadingPageComponents() {
  return (
    <div>
      <FeaturedMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  )
}

export default LoadingPageComponents