import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component{
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount(){
    try {
      const { 
        data: { results : nowPlaying } 
      } = await movieApi.nowPlaying();
      const { 
        data: { results : upComing } 
      } = await movieApi.upComing();
      const { 
        data: { results : popular } 
      } = await movieApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular
      });
    } catch (error) {
      this.setState({
        error: "Can't find movies infomation"
      })
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  getNowPlauing

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state
    console.log(this.state);
    return (
    <HomePresenter 
      nowPlaying={nowPlaying} 
      upComing={upComing} 
      popular={popular} 
      error={error}
      loading={loading}
    />);
  }
}