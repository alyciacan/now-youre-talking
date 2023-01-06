import './Articlethumb.css';
const dayjs = require('dayjs');
var LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat);

function Articlethumb({story}) {

    const checkForImg = () => {
        if(story.multimedia) {
            return story.multimedia[1].url
        } else {
            return "none"
        }
    }

    const contentStyle = {
        backgroundImage: `url(${checkForImg()})`
    }

    const formattedDate = dayjs(story.published_date).format('ll')

    return (
        <div 
            className="article-thumb" 

        >
            <div className="thumb-content" style={ contentStyle }>
                <div className="btn-box">
                    <a href={ story.url } target="_blank" rel="noreferrer" className="expand-btn"> ➚ </a>
                </div>
                <div className="bubble-box">
                    <p className="thumb-section">• { story.section } •</p>
                    <p className="thumb-date">{ formattedDate }</p>
                </div>
            </div>
            <h3 className="story-title">{ story.title }</h3>
           <div>
                <p className="hidden-parts">{story.byline}</p>
                <p className="hidden-parts">{ story.abstract }</p>
            </div>
        </div>
    )
}

export default Articlethumb;