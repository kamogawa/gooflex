import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;

`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
`;

const CoverImage = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 33px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`

`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Imdb = styled.a`
`;

const Image = styled.img`
  position: absolute;
  background-image: url(${props => props.bgUrl});
  height: 15px;
  width: 30px;
  background-size: cover;
  border-radius: 4px;
`;

const DetailPresenter = ({result, error, loading}) => (
  loading 
  ? (
    <>
      <Helmet>
        <title>Loading | Gooflix</title>
      </Helmet>
      <Loader />
    </>
  )
  : ( error ? <Message text={error} color="#e74c3c"/> :
  <Container>
    <Helmet>
      <title>
        {result.original_title 
        ? result.original_title 
        :result.original_name}
        | Gooflix
      </title>
    </Helmet>
    <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
    <Content>
      <Cover>
        <CoverImage src={ result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}`: require("../../assets/noPosterSmall.png")} />
      </Cover>
      <Data>
        <Title>
          {result.original_title 
            ? result.original_title 
            :result.original_name}
        </Title>
        <ItemContainer>
          <Item>
            {result.release_date 
            ? result.release_date.substring(0, 4) 
            : result.first_air_date.substring(0, 4)}
          </Item>
          <Divider>
             ・
          </Divider>
          <Item>
            {result.runtime 
            ? result.runtime 
            : result.episode_run_time}
            min
          </Item>
          <Divider>
             ・
          </Divider>
          <Item>
            {result.genres 
              && result.genres.map((v,i) => 
              i === result.genres.length -1
              ? v.name
              : `${v.name}/`
            )}
          </Item>
          <Divider>
             ・
          </Divider>
          <Item>
            <Imdb href={`https://www.imdb.com/title/tt0110413`}>
                <Image bgUrl={require("../../assets/imdb.png")}/>
            </Imdb>
          </Item>
        </ItemContainer>
        <Overview>{result.overview}</Overview>
      </Data>
    </Content>
  </Container>) 
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default DetailPresenter;