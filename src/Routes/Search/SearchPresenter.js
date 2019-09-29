import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Message from "Components/Message";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults, 
  tvResults, 
  searchTerm, 
  error, 
  loading, 
  handleSubmit,
  updateTerm
}) => 
<>
<Helmet>
  <title>Search | Gooflix</title>
</Helmet>
{(<Container>
  <Form onSubmit={handleSubmit}>
    <Input
      placeholder="Search Movies or TV Shows..."
      value={searchTerm}
      onChange={updateTerm}
    />
  </Form>
  {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(v => (
              <Poster 
                key={v.id}
                id={v.id}
                imageUrl={v.poster_path}
                title={v.original_title}
                rating={v.vote_average}
                year={v.release_date.substring(0, 4)}
                isMovie={true} 
              /> 
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(v => (
              <Poster 
                key={v.id}
                id={v.id}
                imageUrl={v.poster_path}
                title={v.original_name}
                rating={v.vote_average}
                year={v.first_air_date.substring(0, 4)}
              /> 
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c"/>}
        { tvResults && 
          movieResults && 
          tvResults.length === 0 && 
          movieResults.length === 0 && 
          (<Message text="Noting Results" color="#95a5a6"/>)
        }
      </>
    )}
</Container>)}
</>

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;