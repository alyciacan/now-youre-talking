import Articlethumb from '../Articlethumb/Articlethumb';
import './Articlelist.css';

function Articlelist({ stories, header }) {
    const allThumbs = stories.map(story => {
        if(story.title) {
        return (
            <Articlethumb 
                story={story}
                key={ story.short_url }/>
            )
        }
    })

    const makeHeader = () => {
        if(header === "Home") {
            return "Today's Top Stories";
        } else {
            return header;
        }
    }
    return (
        <section className="article-list">
            <h2 className="article-heading">{ makeHeader() }</h2>
            <div className="article-container">
                { allThumbs }
            </div>
        </section>
    )
}

export default Articlelist;