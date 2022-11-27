import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {

    let {title, description,imageUrl, newsUrl,author,date}=this.props;
    // let newDate=new Date (date).toGMTString;

    return <div>
       
        <div className="card"  style={{width:"354.6px"}}>
        <img src={!imageUrl?"https://static.independent.co.uk/2022/02/08/18/urnpublicidap.orgdfbd69113f644f738a6ae79d277fafa7.jpg?quality=75&width=1200&auto=webp":imageUrl} className="card-img-top" alt="..." style={{width:"354.6px", height:"200px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author?author: "Unknown"} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
        </div>
</div>
    </div>;
  }
}
