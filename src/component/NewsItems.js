import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3' style={{width :"22rem",margin:"auto"}}>
        <div className="card" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title"> <a href={newsUrl} target = '_blank' rel="noreferrer nofollow"> {title}... </a> </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">
              {`By ${this.props.author} On ${this.props.publishedAt}`}
              </small></p>
            <a href={newsUrl} target = '_blank' rel="noreferrer nofollow" className="btn btn-sm btn-dark">Read More</a> 
         </div>
        </div>
      </div>
    )
  }
}

export default NewsItems