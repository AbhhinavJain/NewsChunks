import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 12,
    category : 'general',
    top : "General"
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
    top : PropTypes.string
  }
  constructor(){
    // we can set state of this card from here
    super();
    // console.log("Hello !");
    this.state = {
      articles : [],
      loding : false,
      page : 1
      // totalResults : 0
    }
  }

  async update(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f95a89014ca4d478e1d41ebd97d0604&page=${pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({loding :true});
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles : parseData.articles,
      totalResults : parseData.totalResults,
      loding : false
    });
  }

  async componentDidMount(){
    // run after render()
    this.update(1);
  }
  handlePreviousClick = async ()=>{
    this.update(this.state.page-1);
    this.setState({
      page : this.state.page -1
    })
  }
  handleNextClick = async () =>{
    this.update(this.state.page+1);
    this.setState({
      page : this.state.page +1
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin :"30px 0px" ,marginTop:"75px"}} >{`Top headlines - ${this.props.top} (${this.state.page})`}</h2>
        <hr/>
        { this.state.loding && <Spinner/>}

        


        <div className='row'>
        { !this.state.loding && this.state.articles.map((element)=>{
          
           return <div className='col-md-4' key={element.url}>
              <NewsItems  title = {element.title !=null ? element.title.slice(0,40) :""} description = {element.description !=null ? element.description.slice(0,80) : ""} imageUrl ={element.urlToImage!=null ?  element.urlToImage : "https://cdn-icons-png.flaticon.com/512/21/21601.png"} newsUrl = {element.url}
              publishedAt = { new Date(element.publishedAt).toGMTString() } author = {element.author ==null ? "Unknown":element.author}
                />
            </div>
        })}
          </div>
        {!this.state.loding &&
            <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>	&larr; Previous</button>
            <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults/12))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        }
      </div>
    )
  }
}

export default News