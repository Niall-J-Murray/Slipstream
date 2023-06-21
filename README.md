<a name="readme-top"></a>
<br/>
<div align="center">
  <a href="https://slipstreamf1-production.up.railway.app/home">
    <img src="https://github.com/Niall-J-Murray/Slipstream/blob/main/src/main/resources/static/images/customLogoWhite.png" alt="Logo" width="350" height="100">
  </a>

<h3 align="center">Slipstream F1 Draft Picks</h3>

  <p align="center">
Fantasy Formula 1 draft picks web app.
      <br />
Full stack java web app, using Thymeleaf, Spring-Boot, Spring Security, Hibernate/JPA and MySQL.
    <br />
    <a href="https://slipstreamf1-production.up.railway.app/home"><strong>View Deployment</strong></a>
    <br />
    <br />
    <a href="https://github.com/Niall-J-Murray/Slipstream/blob/main/issues">Report Bug</a>
    ·
    <a href="https://github.com/Niall-J-Murray/Slipstream/blob/main/issues">Request Feature</a>
  </p>
</div>

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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

<a href="https://slipstreamf1-production.up.railway.app/home">Slipstream F1</a>
</br>
This is project is designed to showcase my knowledge of the stacks and frameworks listed below.
It will also be used as a base for further development of those stacks, as well as learning and integrating new ones.

As a fan of Formula 1 and fantasy sports, I noticed a lack of a draft pick format fantasy F1 game, so I created one!
The draft pick format means that users teams are all different, instead of the majority of users being able to pick the
same players/drivers.
This game is also designed to appeal more to novice fans, and introduces an element of luck to users’ chances of
winning.

The app will continue to evolve, feedback, suggestions and bug reports are welcome.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<a href="https://www.java.com">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" width="50" height="50" /></a> 
<a href="https://spring.io/projects/spring-boot">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" width="50" height="50" /></a> 
<a href="https://www.mysql.com/">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50" height="50" /></a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="50" height="50" /></a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="50" height="50" /></a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" /></a> 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

You can visit <a href="https://slipstreamf1-production.up.railway.app/home">Slipstream-F1</a> to try the app online.

Instructions on how to play are on the homepage.

You must register an account and login to see the full application.

Alternatively, you can clone or fork the app and download it to run locally.

### Prerequisites

To run locally, you will need an IDE with Java 17 or higher.

You will also need a MySQL localhost on port 3306, and will need to edit the application.properties file to access your
localhost:
i.e.: "spring.datasource.username=" and "spring.datasource.password=" will need correct credentials for your localhost.

The app will automatically create a database at "spring.datasource.url=jdbc:mysql://localhost:3306/slipstream", unless
you create one named "slipstream" manually.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Niall-J-Murray/Slipstream.git
   ```
2. Import the repo to your IDE
3. Build and run the application
4. Open your web browser and go to:

  ```sh
   http://127.0.0.1:8080/
   ```

5. This will lead you to the homepage, with instructions on how to play the game.
6. Register an account then login to play.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

This app is designed as a fun and easy introduction to Formula 1 and fantasy sports. It can give players someone to root
for if they have no previous experience of F1. Given the relatively minimal amount of time required to play, it can also
be of interest to more serious fans, who may also play more traditional fantasy sports game already.

Currently, some of the functionality is fairly limited (e.g., players can't choose or create a league to join). This
functionality will be added as the project is developed.

This project could also be forked and adapted to use for different sports with relatively little changes needed.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add optional automated email to allow users to receive email prompts when it is their turn to pick.
- [ ] Improve UI, especially for smaller screens.
- [ ] Allow users to choose which league to join.
- [ ] Allow users to create their own leagues.
    - [ ] Users can customise leagues by changing number of teams, picks etc...
- [ ] Create advanced leagues with additional ways of scoring points, based on predictions etc.

See the [issues](https://github.com/Niall-J-Murray/Slipstream/blob/main/issues) to request features and see known
issues.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also
simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the GNU General Public License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Niall Murray - [@linkedin](https://www.linkedin.com/in/niall-j-murray/) - niall_murray@outlook.com

Project Link: [https://github.com/Niall-J-Murray/Slipstream](https://github.com/Niall-J-Murray/Slipstream)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* Coders Campus Java Boot Camp
* ergast.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
