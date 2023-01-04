import './Articlethumb.css';

function Articlethumb({category, date, title}) {
    return (
        <article className="article-thumb">
            <button className="expand-btn">➚</button>
            <div className="thumb-content">
                <p>{ category }</p>
                <p>{ date }</p>
            </div>
            <h3>{ title }</h3>
        </article>
    )
}

export default Articlethumb;