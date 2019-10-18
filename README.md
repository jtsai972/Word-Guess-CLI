[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Word Guess CLI</h3>

  <p align="center">
    A word guessing game built with Node.js
    <br />
    <a href="https://github.com/jtsai972/Word-Guess-CLI"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jtsai972/Word-Guess-CLI/issues">Report Bug</a>
    ·
    <a href="https://github.com/jtsai972/Word-Guess-CLI/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Screenshot Thumbnails](#screenshot-thumbnails)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

Learning to create a Word Guess command-line game using constructor functions. 

This project uses a word bank to randomly select words. 

There's a constructor for the selected word and another for each individual letter of the word. The letter constructors contain a bool to determine if the letter has been guessed and will display either a `_` or a `<char>` depending on whether the letter has been guessed.

Until you choose to exit the game at the new word prompt or exit using the escape key `,` during the guessing, this game will continue to run and pull words from the word bank to guess;

in the future perhaps I should add in a score counter or something as well.

### Built With
 * [Node.js](https://nodejs.org/en/)
 * [Node Package - Inquirer](https://www.npmjs.com/package/inquirer)
 * [Othneil Drew - Best README Template](https://github.com/othneildrew/Best-README-Template)
 
 
 [Back to Table of Contents](#table-of-contents)
 

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/jtsai972/Word-Guess-CLI.git
```
2. Install NPM packages
```sh
npm install
```

[Back to Table of Contents](#table-of-contents)


<!-- USAGE EXAMPLES -->
## Usage

`node index`

The index file is in the main directory for easier script running.

To exit/escape during the guessing portion of the game,
enter a `,` to exit the script.

You can find some example images in the [images folder](https://github.com/jtsai972/Word-Guess-CLI/tree/master/assets/images) `assets > images` or check out some quick thumbnails in [Screenshot Thumbnails](#screenshot-thumbnails)

[Back to Table of Contents](#table-of-contents)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[Back to Table of Contents](#table-of-contents)

### Screenshot Thumbnails

<div align="center">
  <img src="https://raw.githubusercontent.com/jtsai972/Word-Guess-CLI/master/assets/images/ss-starting-game.PNG" alt ="Screenshot of starting the game" width="45%">
  <span>&nbsp;</span>
  <img src="https://raw.githubusercontent.com/jtsai972/Word-Guess-CLI/master/assets/images/ss-exiting-game.PNG" alt ="Screenshot of exiting the game" width="45%">
</div>

[Back to Table of Contents](#table-of-contents)

<!-- CONTACT -->
## Contact

### Jasmine 
[Github Portfolio](https://jtsai972.github.io/Github-Portfolio/) | [Website - Jtsai972.space](jtsai972.space) | [Email Me](jtsai972@gmail.com)

Project Link: [https://github.com/jtsai972/Word-Guess-CLI](https://github.com/jtsai972/Word-Guess-CLI)

[Back to Table of Contents](#table-of-contents)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Trilogy - Tech Bootcamp](https://www.trilogyed.com/)
* [SMU Tech Bootcamp](https://techbootcamps.smu.edu/)
* [Othneil Drew - ReadMe Template](https://github.com/othneildrew/)
* [Instructor - Dane Edwards](https://github.com/daneedw)
* [TA - Cody Clark](https://codyevanclark.com/)
* [TA - Daniel Reynolds](https://github.com/kirplink)
* [TA - Shawn Holcomb](https://github.com/shawnholcomb)

[Back to Table of Contents](#table-of-contents)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jtsai972/Word-Guess-CLI.svg?style=flat-square
[contributors-url]: https://github.com/jtsai972/Word-Guess-CLI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jtsai972/Word-Guess-CLI.svg?style=flat-square
[forks-url]: https://github.com/jtsai972/Word-Guess-CLI/network/members
[stars-shield]: https://img.shields.io/github/stars/jtsai972/Word-Guess-CLI.svg?style=flat-square
[stars-url]: https://github.com/jtsai972/Word-Guess-CLI/stargazers
[issues-shield]: https://img.shields.io/github/issues/jtsai972/Word-Guess-CLI.svg?style=flat-square
[issues-url]: https://github.com/jtsai972/Word-Guess-CLI/issues
