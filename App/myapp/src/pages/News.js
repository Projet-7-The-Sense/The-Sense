import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import NewsWideCard from '../component/NewsWideCard';
import NewsSmallCard from '../component/NewsSmallCard';
import Footer from '../component/Footer.js';
import { getNews } from '../api/news.js';
import { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] =useState([]);



    useEffect(()=>{
        const NewsFetched = getNews();
        NewsFetched
          .then((result) => setNews(result))
          .catch(error=>console.error("Erreur avec notre API :",error.message));

    },[]);
    return <>
        <CollapsibleNavbar/>
        <div className="news-header">
            <h1>Les News</h1>
        </div>
        <div className="news-content">
            <div className="container">
            {
                            news.map((newste, key) => {
                                if(newste.size=="SmallCard"){
                                    return <>
                                    <NewsSmallCard
                                    title={newste.title}
                                    paragraph={newste.text}
                                    preview={newste.image}
                                />
                                        
                                </>

                                }else{
                                    return <>
                                    <div className="small-news-holder">
                                        <NewsWideCard
                                        title={newste.title}
                                        paragraph={newste.text}
                                        preview={newste.image}
                                        
                                    />
                                </div>
                                        
                                </>
                                }


                            })
                        }

            </div>
        </div>
        <Footer/>
    </>
}

export default News;