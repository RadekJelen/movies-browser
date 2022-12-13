import { imageBaseUrl } from "../../../../ApiValue"
import {
  BackdropImg,
  BlureFrames,
  Container,
  Content,
  Rate,
  RatingContainer,
  StarIcon,
  Title,
  Vote,
  Votes,
  Wrapper,
} from "./styled";

export const Backdrop = ({
  title,
  rating,
  votes,
  backdrop_path,
}) => {
  return (
    <Wrapper>
      <Container>
        <BlureFrames />
        <BackdropImg  src={`${imageBaseUrl}/w1280${backdrop_path}`}
        alt={`poster of ${title}`} />
        <Content>
          <Title>{title}</Title>
          <RatingContainer>
            <StarIcon />
            <Vote>{rating}</Vote>
            <Rate>/ 10</Rate>
            <Votes>{votes} votes</Votes>
          </RatingContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};
