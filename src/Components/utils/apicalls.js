import { sectionVals } from "./section-vals";
const API_KEY = process.env.REACT_APP_API_KEY;

const getTopStories = () => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
        .then(response => response.json())
}

const getFilteredStories = (filterTerm) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${sectionVals[filterTerm]}.json?api-key=${API_KEY}`)
        .then(response => response.json())
}

export { getTopStories, getFilteredStories };