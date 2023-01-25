const WideCard = (props) => {
    return <div className="news-card-wrapper wide">
        <img src={props.preview} alt="news-preview"/>
        <div className="content-wrapper">
            <h2 className="news-title">{props.title}</h2>
            <div className="container">
                <p className="news-paragraph abel">{props.paragraph}</p>
            </div>
        </div>
    </div>
}

export default WideCard;