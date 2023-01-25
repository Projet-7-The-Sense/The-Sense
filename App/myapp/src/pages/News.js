import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import NewsWideCard from '../component/NewsWideCard';
import NewsSmallCard from '../component/NewsSmallCard';

const News = () => {
    return <>
        <CollapsibleNavbar/>
        <div className="news-header">
            <h1>Les News</h1>
        </div>
        <div className="news-content">
            <div className="container">
                <NewsWideCard
                    title="Événement: La légende du père noël"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    preview="./img/image 141.svg"
                />

                <div className="small-news-holder">
                    <NewsSmallCard
                        title="Événement: La chasse à l'oeuf"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        preview="./img/Image 8.svg"
                    />

                    <NewsSmallCard
                        title="Un nouvel équipement arrive !"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        preview="./img/Image 9.svg"
                    />
                </div>

                <NewsWideCard
                    title="Événement: Le mystère du loup pharaon"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    preview="./img/image 144.svg"
                />
            </div>
        </div>
    </>
}

export default News;