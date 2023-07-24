import React from 'react'
import { useState,useCallback,useEffect} from 'react';
// import PropTypes from 'prop-types';
import Newsitems from '../components/newsitems';
export default function Bussiness(props) {
         
    const [articles, setArticles] = useState([])


    let capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
     let start =useCallback( async ()=>{
        let url =await `https://newsapi.org/v2/top-headlines?country=in&category=bussiness&apiKey=6c5ce318bb1d4e078e4048f5f2d2c29b&page=1&pageSize=100` ;
        let data = await fetch(url);
        let parsedData = await data.json();
        await setArticles(parsedData.articles) 
    },[]);
    
    useEffect(() => {
        document.title = `${capitalizeFirstLetter('bussiness')} - NewsMonkey`;
        start(); 
        // eslint-disable-next-line
    }, [])
  
    return (
            <div className="container my-3">   
              <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }} id='Bussiness'>NewsMonkey - Top Bussiness  Headlines</h1>
                   <br />      
                <br />
                <div className="row text-center">
                   
                        {articles.map((e) => {
                            return                      <div className="col mx-3 md-4" key={e.url}>
                            <Newsitems 
                            mode={props.mode}
                             title={e.title ? e.title : ""} 
                             description={e.description ? e.description : ""} 
                             imageUrl={e.urlToImage}
                              newsUrl={e.url}
                               author={e.author}
                                date={e.publishedAt}
                                 source={e.source.name} />
                        </div>

    
    
                        })}                 
                </div>
            </div>
        )
    }

