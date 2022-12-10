import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersonTile } from "../../../common/tiles/PersonTile";
import { fetchPopularPeople, selectPopularPeople } from "../popularPeopleSlice";
import { Wrapper, StyledLink, PersonContainer, ListTitle } from "./styled";

export const PeoplePage = () => {
  const dispatch = useDispatch();

  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      <ListTitle>Popular people</ListTitle>
      <PersonContainer>
        {people.map(({ profile_path, id, name }) => (
          <StyledLink to={`/profile/${id}`}>
            <PersonTile
              key={id}
              id={id}
              profile_path={profile_path}
              name={name}
            />
          </StyledLink>
        ))}
      </PersonContainer>
    </Wrapper>
  );
};
