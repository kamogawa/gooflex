import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Message from "Components/Message";
import Section from "Components/Section"
import Loader from "Components/Loader";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => 
loading ? <Loader /> : (
  <Container>
    {nowPlaying && nowPlaying.length > 0 && (
      <Section title="Now Playing">
        {nowPlaying.map( v => 
          <Poster 
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.original_title}
            rating={v.vote_average}
            year={v.release_date.substring(0, 4)}
            isMovie={true} 
          /> 
       )}
      </Section>
    )}
    {upcoming && upcoming.length > 0 && (
      <Section title="Upcoming Movie">
        {upcoming.map( v => 
          <Poster 
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.original_title}
            rating={v.vote_average}
            year={v.release_date.substring(0, 4)}
            isMovie={true} 
          /> 
        )}
      </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="Popular Movie">
        {popular.map( v => 
          <Poster 
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.original_title}
            rating={v.vote_average}
            year={v.release_date && v.release_date.substring(0,4)}
            isMovie={true} 
          /> 
        )}
      </Section>
    )}
    {error && <Message text={error} color="#e74c3c"/>}
  </Container>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default HomePresenter;