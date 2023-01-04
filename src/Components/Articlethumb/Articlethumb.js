import './Articlethumb.css';

function Articlethumb({story}) {
    const style = {backgroundImage: `url(${story.multimedia[1].url})`}
    return (
        <article className="article-thumb">
            <div className="thumb-content" style={ style }>
                <button className="expand-btn">➚</button>
                <p>{ story.section }</p>
                <p>{ story.date }</p>
            </div>
            <h3>{ story.title }</h3>
        </article>
    )
}

export default Articlethumb;