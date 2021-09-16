import Image from 'next/image'
import { Movie } from '@utils/requests'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { TMDB_IMAGE_BASE_PATH } from '@utils/tmdb'
import { Container, Details, Info, Overview, Title } from './styles'

function Thumbnail({ movie }: Props) {
  return (
    <Container>
      <Image
        src={`${TMDB_IMAGE_BASE_PATH}${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="responsive"
        width={1920}
        height={1080}
        alt={`${movie.title} poster image`}
      />
      <Info>
        <Overview>{movie.overview}</Overview>
        <Title>{movie.title || movie.name}</Title>
        <Details>
          {movie.release_date || movie.first_air_date}
          <ThumbUpIcon />
          {movie.vote_count}
        </Details>
      </Info>
    </Container>
  )
}

type Props = {
  movie: Movie
}

export default Thumbnail
