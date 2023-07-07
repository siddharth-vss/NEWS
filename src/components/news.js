import React, { Component } from 'react'
import Newsitems from './newsitems';
export default class News extends Component {
    articles = [
        
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6c5ce318bb1d4e078e4048f5f2d2c29b&page=1&pageSize=100" ;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles :parsedData.articles })
    }
   


    render() {
      let {mode} = this.props
        return (

            <div className="container my-3">

                
                <h1 className="text-center">Today's breaking news</h1>

                    <br />      
                <br />
                <div className="row">
                   
                        {this.state.articles.map((e) => {
                            return                         <div className="col md-4" key={e.url}>
                                <Newsitems mode={mode} title={e.title ? e.title.slice(0, 45) : ""} description={e.description ? e.description.slice(0, 80) : ""} imgurl={e.urlToImage} url={e.url} />
                            </div>
    
    
                        })}
                  
                </div>


             {/* <div className="d-flex justify-content-around">
             <button disabled={this.state.page<=1}type="button" className={`btn btn-${mode}  `} onClick={this.handalup}>&#9756;previous</button>
             
              <button type="button" className={`btn btn-${mode}`}>&#9762;</button> 
             <button type="button" className={`btn btn-${mode}`} onClick={this.handaldown}>Next&#9758;</button>
             </div> */}




            </div>
        )
    }
}
// https://timesofindia.indiatimes.com/videos/etimes/bollywood/samantha-ruth-prabhu-returns-advance-payments-to-producers-as-she-is-taking-year-long-break-from-acting-to-focus-on-her-health-report/videoshow/101509397.cms
// https://timesofindia.indiatimes.com/photo/101509397/size-38474/101509397.jpg