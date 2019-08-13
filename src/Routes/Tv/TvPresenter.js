import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Message from "Components/Message";
import Section from "Components/Section"
import Loader from "Components/Loader";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TvPresenter = ({
  topRated, 
  popular, 
  airingToday, 
  error,
  loading
}) => <>
<Helmet>
  <title>TV Show | Gooflix</title>
</Helmet>
{loading ? <Loader /> : (
  <Container>
    {topRated && topRated.length > 0 && (
      <Section title="Top Rated Shows">
        {topRated.map(v =>           
          <Poster 
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.original_name}
            rating={v.vote_average}
            year={v.first_air_date.substring(0, 4)}
          /> 
        )}
      </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="Popular Shows">
        {popular.map(v =>           
          <Poster 
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.original_name}
            rating={v.vote_average}
            year={v.first_air_date.substring(0, 4)}
          /> 
        )}
      </Section>
    )}
    {airingToday && airingToday.length > 0 && (
      <Section title="Popular Shows">
        {airingToday.map(v =>            
          <Poster 
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.original_name}
            rating={v.vote_average}
            year={v.first_air_date.substring(0, 4)}
          /> 
        )}
      </Section>
    )}
    {error && <Message text={error} color="#e74c3c"/>}
    </Container>
)};
</>

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array, 
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
}

export default TvPresenter;