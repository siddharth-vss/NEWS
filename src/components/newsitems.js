import React from 'react'
import '../App.css'
const Newsitems = (props)=>  {
    let { title, description, imageUrl, newsUrl, author, date, source,mode } = props;
    return (
        <div className="col my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }> 
                    <span className={`badge rounded-pill bg-${mode}`}> {source} </span>
                </div>
            <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} style={{width:"325px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{description}..</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className={`btn btn-${mode}`}>Read the Article</a>
                </div>
        </div>
        </div>
    )
  }


export default Newsitems