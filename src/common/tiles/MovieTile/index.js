import {
  Container,
  Details,
  InfoContent,
  Poster,
  StyledRatings,
  Title,
  Year,
} from "./styled";
import { Genre } from "./Genre";
import { imageBaseUrl } from "../../../ApiValue";
import noPoster from "./noPoster.png";
import { MovieStyledLink } from "../generisStyles/styled";

export const MovieTile = ({
  id,
  poster_path,
  title,
  release_date,
  rating,
  votes,
  genre_ids,
  character,
  job,
  year,
}) => {
  return (
    <MovieStyledLink to={`/movie-list/movie-page/${id}`} key={id}>
      <Container>
        <Poster
          src={poster_path ? `${imageBaseUrl}/w342${poster_path}` : noPoster}
          alt={`poster of ${title}`}
        ></Poster>
        <InfoContent>
          <Details>
            {title && <Title>{title}</Title>}

            {release_date && <Year>{release_date}</Year>}

            {character && (
              <Year>
                {character} {year}
              </Year>
            )}

            {job && (
              <Year>
                {job} {year}
              </Year>
            )}

            {genre_ids && <Genre genre_ids={genre_ids} />}
          </Details>
          {rating && votes ? (
            <StyledRatings rating={rating} votes={votes} />
          ) : null}
        </InfoContent>
      </Container>
    </MovieStyledLink>
  );
};