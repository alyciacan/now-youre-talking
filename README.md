<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img width="1009" alt="Screen Shot 2023-01-05 at 6 24 03 PM" src="https://user-images.githubusercontent.com/105533317/210917228-3d742643-5be8-43d3-8f56-b5ae6b02c681.png">


<h4 align="center"><a href="https://now-youre-talking.vercel.app/">Deploy Link</a></h4>

  <p align="center">
    <b>N</b>ow <b>Y</b>ou're <b>T</b>alking is a sleek, modern app featuring top news stories from the <b>N</b>ew <b>Y</b>ork <b>T</b>imes (see what I did there?)
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#highlights">Highlights</a></li>
    <li><a href="#context">Context</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
<img height="450" src="https://user-images.githubusercontent.com/105533317/210921180-f2c87dc2-50dc-4911-bc30-1c7f1ae67bd7.png" />
<br />
</div>

NYT is my submission for the [Mod 4 take-home challenge](https://mod4.turing.edu/projects/take_home/take_home_fe), a solo project with the following goals:
*  In about 8 hours, produce an app that shows: 
- [ ] A list of articles
- [ ] A “detailed” view for each article (as opposed to summary/list view)
- [ ] Articles in the list must link to the detailed article view you create
- [ ] Some sort of search, filter, OR sort
- [ ] Should be easy-to-use, information is clear, and navigation is painless

<p align="right">(<a href="#readme-top">back to top</a>)</p>

My process:
* One of the first decisions I made was to make this a __single-page__ app that links to the NYT articles, rather than employing React Router with dynamic routing to show detail pages. My rationale: the details provided by the NYT Top Stories API weren't comprehensive enough to warrant a separate single-view page for each article- as a user, I'd be annoyed to have to navigate to an intermediary link with very little new information provided (read: too much work, too little value added)! My other reason for wanting to make this a single-page app was that I hadn't really had the opportunity to write Netflix-inspired animation in CSS, and I thought this would be a cool way to use and learn that type of animation. 

* Something I'm proud of is how quickly this app came together, and how closely it matches my plan. It's definitely an __MVP__, and there are features I want to add: a search function and a way for users to tell which articles they have read, for starters, but I am pleased with what I accomplished.

### Built (in about 8 hours) with

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
* ![Webpack] (https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- HIGHLIGHTS -->
## Highlights

- [ ] Some super-sweet and smooth CSS animations
- [ ] Effective use of React and JS
- [ ] React Hooks

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation
To get a local copy up and running follow these simple example steps:

1. Get a free API Key at [New York Times API](https://developer.nytimes.com/apis)
2. Clone down the repo
   ```sh
   git clone https://github.com/alyciacan/now-youre-talking.git
   ```
3. cd into the directory
   ```sh
   cd now-youre-talking
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTEXT -->
## Context

I'm a student in the Front-End Software Engineering program at [Turing School of Software and Design](https://frontend.turing.edu/). I have been coding (seemingly non-stop) and learning since July 2022, and in that time, I have learned to use <b>React, JSX, React Router, Cypress, CSS, Vanilla JS, Express</b>, and more!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Alycia Canavan     
[Email](mailto:alycia.canavan@gmail.com)      
[GitHub](https://github.com/alyciacan)    
[LinkedIn](www.linkedin.com/in/alycia-canavan)        

Project Link: [NYT Repo](https://github.com/alyciacan/now-youre-talking)          
Deployed Link: [NYT Deployed](https://now-youre-talking-c7op7uhoq-alyciacan.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
