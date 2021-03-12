# 🪐 Pictures from Space
Pictures from Space contains a wonderful collection of photographs from NASA. The first section shows a random selection of Astronomy photos taken from the Astronomy Picture of the Day website. This site has shown a space-related photo or video every day since 1995. According to NASA, the Astronomy Picture of the Day website is the most popular government website in the United States. When you click on a picture, you get to read additional information about the picture and you can also download it. The second section on the Pictures from Space website shows Mars rover photos. Here, a random sol (a day on mars) is selected and the first photo from that is shown. On the details page of a rover you can read more about the launch and landing date of the rover and view all the pictures of that day. This site also shows the pictures taken by the MARS2020 Perseverance rover.  

**About this project**
<br>
This project is part of the Progressive Web Apps course at CMD, part of the Amsterdam University of Applied Sciences. In this course we will learn how to create a web app that is rendered server side. 

## ✨ View it live
![pictures-from-space](https://user-images.githubusercontent.com/60745347/108851655-f8acce80-75e4-11eb-8298-dbf11cf12652.jpg)

You can view the live version of Pictures from Space [here](https://picturesfromspace.herokuapp.com/).

<br>

<hr>

## 📑 Table of Contents
|  Contents |
|---|
| [💡 Concept](#-concept-idea)  |
| [📊 Data](#-data)  |
| [📌 Features](#-features)  |
| [⬇️ How to install](#-how-to-install)  |
| [📚 Sources](#-sources) |
| [🔗 License](#-license) |

<hr>

<br>

## 💡 Concept idea

Prior to developing my final product, I first thought about a suitable concept and a matching API. Eventually, I ended up with the NASA API. Based on the available data, I then made a choice for which API endpoints I would develop my concept. The choice fell on the Astronomy Picture of the Day and Mars rover dataset. I then created sketches and then a digital sketch. 

<img width="50%" alt="schets van concept" src="https://user-images.githubusercontent.com/60745347/107011834-7e80eb00-6798-11eb-96db-6ced7cfd4d46.JPG" />

![image](https://user-images.githubusercontent.com/60745347/107009754-bfc3cb80-6795-11eb-8a85-6db245c938f6.png)

<br>

## 📊 Data

The data that I am using for my concept comes from NASA. I am using two different API endpoints. The first API contains data from the "Astronomy Picture of the Day" website. The second API contains data from "Mars Rover Photos". Below I have posted an overview of the data contained in these APIs:

**From the "Astronomy Picture of the Day" dataset:**

- `copyright`: information about the person or organization that has a copyright on this image (if applicable), example output: `"Eddie Guscott"`
- `date`: the date the picture was featured as Astronomy Picture of the Day (formatted as YYYY-MM-DD), example output: `"2004-05-11"`
- `explanation`: an explanation about the picture, example output: `"M13 is one of the most prominent..."`
- `hdurl`: link to the HD version of the image, example output:`"https://apod.nasa.gov/apod/image/0405/m13_guscott_big.jpg"`
- `title`: title of the image., example output: `"M13: The Great Globular Cluster in Hercules"`
- `url`: link to the image (lower quality version), example output:`"https://apod.nasa.gov/apod/image/0405/m13_guscott.jpg"`

**From the "Mars Rover" dataset:**

- `max_sol`: maximum available sol (date on mars) for which data on the rover is available. Example output: `4` 
- `img_src`: link to the image taken by the Mars Rover, example output: `"http://mars.nasa.gov/msl-raw/FRB_665678231EDR_F341M_.JPG"`
- `earth_date`: the date the picture was taken, based on earth dates (formatted as YYYY-MM-DD), example output: `"2004-05-11"`
- `camera`: an object with information about which rover camera took the picture, example output: `{full_name: "Front Hazard Avoidance Camera", name: "FHAZ"}`
- `rover`: an object with information about the rover that took the picture, example output:`{landing_date: "2012-08-06", launch_date: "2011-11-26", name: "Curiosity", status: "active"}`

<br>

## 📌 Features
- A diverse overview of Astronomy photos, including support for videos hosted by YouTube or Vimeo. 

![3 articles from the astronomy pictures section](https://user-images.githubusercontent.com/60745347/109160877-ab606680-7776-11eb-9536-6f710a04b023.png)

<br>

- A detail page for Astronomy photos (and videos) with information about the photo, author and publishing date. From here, it's also possible to open a high resolution version of the image. 

![detail page with textual information about a selected photo](https://user-images.githubusercontent.com/60745347/109161207-1316b180-7777-11eb-8c90-d746b9920eee.png) 

<br>

- A overview with all the mars rover robots. Including support for the new MARS2020 Perseverance rover. 

![Overview with all the mars rover robots](https://user-images.githubusercontent.com/60745347/109161717-b10a7c00-7777-11eb-8ea2-6cba869aa4b6.png)

<br>

- A detail page with additional information about a selected rover. Including all it's images from different camera views. 

![detail page about a mars rover with photos](https://user-images.githubusercontent.com/60745347/109162203-3c840d00-7778-11eb-806c-0ada522ec66f.png)

<br>

## ⬇️ How to install
This application is made in vanilla HTML, CSS and JavaScript. So you don't need Node or any additional packages to use this application. Before you install this application, I kindly request that you use your own API key from NASA. This is free and can be requested [here](https://api.nasa.gov/). 

### Clone the repository
```
git clone https://github.com/lars-ruijs/progressive-web-apps-2021.git
```

### Navigate to the repository and install the packages
```
npm install
```

### Start local development environment
```
npm run dev
```

<br>

## 📚 Sources
I have used the following sources while working on this project:

- **NASA API** documentation about APOD (Astronomy Picture of the Day) and Mars Rover Photos. View it [here](https://api.nasa.gov/). 
- **Mars photo API** (additional) documentation on GitHub by Chrisc Cerami. Read it [here](https://github.com/chrisccerami/mars-photo-api).
- **APOD API** documentation by NASA on GitHub. Read it [here](https://github.com/nasa/apod-api)
- **Actor and Interaction Diagram** documentation provided by school. Author undisclosed. Read the documentation [here](https://docs.google.com/document/d/1445IOuXNTlCki89WkGSZxwJoxbHkdzuFgp53KCC9WOc/edit?usp=sharing)
- **Diagram symbols** used as extra source when creating the diagrams. Article by [Gliffy](https://www.gliffy.com/blog/how-to-flowchart-basic-symbols-part-1-of-3). 
- **Routie** documentation about using the hash router library. Documentation used from the official [website](http://projects.jga.me/routie/) and their [GitHub](https://github.com/jgallen23/routie) page.
- **Convert dates to local dates** article published by MDN. Read it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString). 
- **Storing data in LocalStorage** a guide by Nosa Obaseki via [LogRocket](https://blog.logrocket.com/localstorage-javascript-complete-guide/).
- **Removing all child nodes** a code example by [JavaScript turorial](https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/).
- **Planet Mars** image copied from [ClearPNG](https://www.cleanpng.com/png-earth-mars-planet-solar-system-terraforming-jupite-760076/preview.html).
- **Planet Earth** image copied from [RoosKBC](https://rooskcb.nl/home/earth-blue-planet-globe-planet-41953/).
- **Rocket, Planet and Star** icons copied from [Google Material Icons](https://material.io/resources/icons/?style=baseline).
- **MacBook Pro on wooden Desk** mockup via [MockupWorld](https://www.mockupworld.co/free/macbook-pro-on-wooden-desk-mockup/)
 
<br>

## 🔗 License
This repository is licensed as MIT • ©️ 2021 Lars Ruijs


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
