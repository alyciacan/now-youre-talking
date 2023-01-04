import Articlethumb from '../Articlethumb/Articlethumb';
import './articlelist.css';

function Articlelist(props) {

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