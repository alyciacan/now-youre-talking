import './Articlethumb.css';
import { useState } from 'react';
const dayjs = require('dayjs');
var LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat);

function Articlethumb({story}) {
    const [expanded, setExpanded] = useState(false)

    const checkForImg = () => {
        if(story.multimedia) {
            return story.multimedia[1].url
        } else {
            return "none"
        }
    }
    const expand = () => {
        let copy = expanded;
        copy = true;
        setExpanded(copy)
    }

    const shrink = () => {
        let copy = expanded;
        copy = false;
        setExpanded(copy);
    }

    const checkExpanded = () => {
        if(expanded) {
            return (
                <div>
                    <p>{story.byline}</p>
                    <p>{ story.abstract }</p>
                </div>
            )
        }
    }

    const style = {
        backgroundImage: `url(${checkForImg()})`
    }
    const formattedDate = dayjs(story.published_date).format('ll')

    return (
        <div 
            className="article-thumb" 
            onMouseEnter={ expand }
            onMouseLeave={ shrink }
        >
            <div className="thumb-content" style={ style }>
                <div className="btn-box">
                    <a href={ story.url } target="_blank" rel="noreferrer" className="expand-btn"> ➚ </a>
                </div>
                <div className="bubble-box">
                    <p className="thumb-section">• { story.section } •</p>
                    <p className="thumb-date">{ formattedDate }</p>
                </div>
            </div>
            <h3>{ story.title }</h3>
            { checkExpanded() }
        </div>
    )
}

export default Articlethumb;