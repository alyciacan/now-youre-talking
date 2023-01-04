import './Searchbar.css';
import { sectionVals } from '../utils/section-vals';

function Searchbar({ selectCategory }) {
    const topicOptions = Object.keys(sectionVals).map(topic => {
        return (<option value={ topic } key={ topic }>{ topic }</option>)
    })

    return (
        <form>
            <select name="categories" onChange={selectCategory} className="dropdown" defaultValue="default">
                <option value="default" disabled>Category</option>
                { topicOptions }
            </select>
        </form>
    )
}

export default Searchbar;