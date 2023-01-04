const getTopStories = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=mAmFg3SVgEA7TyWyml7E4lUbBj26lwBe')
        .then(response => response.json())
}


export { getTopStories };