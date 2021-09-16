import { FlipMove } from './styles'
import { Response } from '@utils/requests'
import Thumbnail from '../Thumbnail'

function Results({ results }: Props) {
  return (
    <FlipMove>
      {results?.results.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  )
}

type Props = {
  results: Response | null
}

export default Results
