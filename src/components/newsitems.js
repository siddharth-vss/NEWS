import React, { Component } from 'react'

export default class newsitems extends Component {
 
    render() {
        let {title,description,imgurl,url,mode} = this.props;  
        return (
            <div className="card  mx-3 justify-content-around  mb-5" style={{width: "18rem"}}>
            <img src={!imgurl?"https://cdn.siasat.com/wp-content/uploads/2023/07/Free-Medical-Camp-85.jpg":imgurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{description}..</p>
                    <a href={url} className={`btn btn-${mode}`}>Read the Article</a>
                </div>
        </div>
    )
  }
}
