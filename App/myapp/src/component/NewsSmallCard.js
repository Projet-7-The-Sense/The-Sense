const SmallCard = (props) => {
    return <div className="news-card-wrapper small">
        <img src={props.preview} alt="news-preview" />
        <div className="content-wrapper">
            <h2 className="news-title">{props.title}</h2>
            <p className="news-paragraph abel">{props.paragraph}</p>
        </div>
    </div>
}

export default SmallCard;