import React from 'react'
import { useState,useCallback,useEffect} from 'react';
// import PropTypes from 'prop-types';
import Newsitems from './newsitems';
import '../App.css'

 const News =(props)=> {

 
    const [articles, setArticles] = useState([])


    
    let start =useCallback( async ()=>{
        let url =await `https://newsapi.org/v2/top-headlines?country=in&apiKey=6c5ce318bb1d4e078e4048f5f2d2c29b&page=1&pageSize=100` ;
        let data = await fetch(url);
        let parsedData = await data.json();
        await setArticles(parsedData.articles) 
        await console.log(parsedData);
    },[]);

    useEffect(()=>{
        start();
    },[start]);
    
    
    
    
    return (
        <>  <br />
        <br />
        <br />
              <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }} id='1'>NewsMonkey - Top  Headlines</h1>
                   <br />      
                <br />
                <div className="row text-center">
                   
                        {articles.map((e) => {
                            return                         <div className="col mx-4 md-4" key={e.url}>
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
    
            </>
        )
    }
    export default News

// https://timesofindia.indiatimes.com/videos/etimes/bollywood/samantha-ruth-prabhu-returns-advance-payments-to-producers-as-she-is-taking-year-long-break-from-acting-to-focus-on-her-health-report/videoshow/101509397.cms
// https://timesofindia.indiatimes.com/photo/101509397/size-38474/101509397.jpg

