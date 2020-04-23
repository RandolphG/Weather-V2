![Weather App](https://media.giphy.com/media/QvjlUCkdbXJHVQk0IG/giphy.gif)


## Install


And then install dependencies with npm.

```bash
$ cd project
$ npm i
$ npm run electron 
```
**Note**: I opted to choose the RapidApi over the suggested example as it was responding with incorrect data. Unfortunately I ran out of time to write the test code.


## Features
- users can choose a city (managed with redux)
- displays the time, temperature, and wind info of the selected city 
- refreshes data every 10 seconds
- blue background if it's colder than usual than average this month
- orange background if it's warmer than usual
- custom CSS
- electron 

**Resources**: 

**Open Weather Map API**: [Link](https://openweathermap.org/api/one-call-api#data)

**Ultimate Css Gradient Generator**: [Link](https://www.colorzilla.com/gradient-editor/)

**CSS Gradients Guide**: [Link](https://css-tricks.com/css3-gradients/)

**GIFS GIFS resize gifs**: [Link](http://gifgifs.com/resizer/)

**Resize A GIF Animation w/Photoshop**: [The Simplest Way](http://www.thesimplest.net/pc/simplest-way-resize-gif-animation-using-photoshop-cs4)

**Convert a Unix timestamp to time in JavaScript**: [StackOverflow](https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript)

<!-- language: lang-js -->

    let unix_timestamp = 1549312452
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
<!-- end snippet -->

**Text-shadow Generator**: [HTML CSS JS](https://html-css-js.com/css/generator/text-shadow/)

**Mapping object keys return properties**: [StackOverflow](https://stackoverflow.com/questions/51841507/mapping-object-keys-in-react-and-returning-child-properties)

**Lodash uppercase first letter of every word**: [StackOverflow](https://stackoverflow.com/questions/38084396/lodash-title-case-uppercase-first-letter-of-every-word)

**Theming with React and Sass**: [Medium](https://medium.com/@jasonlmcaffee/theming-with-react-and-sass-c7a6882fd26b)

**Adding Dynamic Themes Using CSS Variables**: [Medium](https://medium.com/@krandles/adding-dynamic-themes-to-a-react-app-using-css-variables-57957e39f0bf)

**Remove certain elements from map in javascript**: [StackOverflow](https://stackoverflow.com/questions/18599242/remove-certain-elements-from-map-in-javascript)

**How to loop an object in React?**: [StackOverflow](https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react/39965962)

**Ultimate Flexbox Cheat Sheet**: [SketchingWithCss](https://www.sketchingwithcss.com/samplechapter/cheatsheet.html)

**Slick Carousel Examples**: [Code Sandbox](https://codesandbox.io/examples/package/slick-carousel)

**React Slick**: [reactslick-neostack](https://react-slick.neostack.com/)

**Animated Gradient Text**: [codepen.io](https://codepen.io/shshaw/pen/YpERQQ)

**CSS Background Image**: [StackOverflow](https://stackoverflow.com/questions/11757537/css-image-size-how-to-fill-not-stretch

**Card CodeSandbox**: [Code Sandbox](https://codesandbox.io/s/j0y0vpz59?from-embed=&file=/src/index.js

**Movie Vertical Carousel CodeSandbox**: [Code SandBox](https://codesandbox.io/s/movie-show-6yn2x?file=/src/App.js)

**Random Giveaway CodeSandbox**: [Code SandBox](https://codesandbox.io/s/j3v352rxjw)

**Why this problem happend in my react function?**: [StackOverflow](https://stackoverflow.com/questions/58680442/why-this-problem-happend-in-my-react-function)

**Colavo Carousel**: [Code Sandbox](https://codesandbox.io/s/colavo-carousel-wkkvc?file=/src/index.tsx:1444-2134)

**FlockBayv2 Carousel**: [Code Sandbox](https://codesandbox.io/s/flockbayv2-klsst?file=/src/styles.scss)

**JEST**: [Jest](https://create-react-app.dev/docs/running-tests/#docsNav)

**SWITCH BITBUCKET TO GITHUB**: [Medium](https://medium.com/collaborne-engineering/how-to-migrate-a-private-repository-from-bitbucket-to-github-6cddedd5d73)

**Dark Mode Switch**: [CSS-Tricks](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)

-- CODE PEN --

**Animated Weather Icons**: [codepen.io](https://codepen.io/joshbader/pen/EjXgqr)

**Weather Dashboard by STUDIOJQ**: [codepen.io](https://codepen.io/creme/pen/eFkzo)

**Animated Weather Cards**: [codepen.io](https://codepen.io/ste-vg/pen/Gqakbo)

**Calendar Widget II**: [codepen.io](https://codepen.io/internette/details/YqJEjY)

**Animated CSS Weather Icons - A Remix**: [codepen.io](https://codepen.io/jasesmith/pen/LbJrXx)

**Weather Forecast**: [codepen.io](https://codepen.io/khadkamhn/pen/gryLoa)

**Canvas Image Carousel**: [codepen.io](https://codepen.io/fuzinato/pen/PwLLjB)

**Weather App, built with jQuery**: [codepen.io](https://codepen.io/tns301/pen/yXLWjQ)

**Google Now Widget**: [codepen.io](https://codepen.io/bronsrobin/pen/yqzfB)

**Simple Weather App Design**: [codepen.io](https://codepen.io/Call_in/pen/pMYGbZ)

**Flat Ui Forecast Widget**: [codepen.io](https://codepen.io/soulrider911/pen/lbuBA)

**Weather Card**: [codepen.io](https://codepen.io/thecodingaviator/pen/BqBMYP)

