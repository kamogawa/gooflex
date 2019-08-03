import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section"
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 20px;
`;

const TvPresenter = ({
  topRated, 
  popular, 
  airingToday, 
  error,
  loading
}) => loading ? <Loader /> : (
  <Container>
    {topRated && topRated.length > 0 && (
      <Section title="Top Rated Shows">
        {topRated.map(v => v.name)}
      </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="Popular Shows">
        {popular.map(v => v.name)}
      </Section>
    )}
    {airingToday && airingToday.length > 0 && (
      <Section title="Popular Shows">
        {airingToday.map(v => v.name)}
      </Section>
    )}
  </Container>
);

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array, 
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
}

export default TvPresenter;