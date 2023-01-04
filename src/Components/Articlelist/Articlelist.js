import Articlethumb from '../Articlethumb/Articlethumb';
import './Articlelist.css';

function Articlelist({ stories }) {
    const allThumbs = stories.map(story => {
        return (
            <Articlethumb 
                story={story}
                key={ story.short_url }/>
            )
    })
    return (
        <section>
            <h2>Top Articles</h2>
            <div>
                { allThumbs }
            </div>
        </section>
    )
}

export default Articlelist;