import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "api";

export default class extends React.Component{
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  }

  async componentDidMount() {
    try {
      const { 
        data: { results : topRated } 
      } = await tvApi.topRated();
      const { 
        data: { results : popular } 
      } = await tvApi.popular();
      const { 
        data: { results : airingToday } 
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch (error) {
      this.setState({error: "Can't find Tv infomation"});
    } finally {
      this.setState({loading: false});
    }
  }

  render(){
    const {
      topRated,
      popular,
      airingToday,
      error,
      loading
    } = this.state;
    console.log(this.state);

    return (
      <TvPresenter 
        topRated={topRated}
        popular={popular} 
        airingToday={airingToday} 
        error={error}
        loading={loading}  
      />
    );
  }
}