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
| [🏎 Performance optimization](#-performance-optimization) |
| [⬇️ How to install](#%EF%B8%8F-how-to-install)  |
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

## 🏎 Performance optimization
During the last week of this course we have been working on optimizing the performance of the application. Before I had optimized my application, I did two tests. The first test is one from Lighthouse which is built into Chrome, and the other is one from Pingdom. Both test the performance of your application. Lighthouse goes even further by also analyzing the accessibility of your app and the Search Engine Optimization (SEO). 

### Before optimizing
The image below is a screenshot of the first test I conducted using Lighthouse. In terms of performance, I received a low score for: a slow server response time, delivering images that were too large, render blocking css and not delivering cache on the images. In terms of accessibility, I also scored lower than desired due to the lack of alt texts on some of the images. This also affected the SEO score. 

<img width="334" alt="Schermafbeelding 2021-03-22 om 11 09 42" src="https://user-images.githubusercontent.com/60745347/112175713-c1d3d380-8bf7-11eb-889d-7d5635e9988b.png">

In Pingdom's test the score was quite reasonable, but you can see that the fully loaded time is very high and so is the request size. 

<img width="749" alt="Schermafbeelding 2021-03-23 om 18 01 38" src="https://user-images.githubusercontent.com/60745347/112187095-0f553e00-8c02-11eb-903b-820588a8b992.png">

### Improving the result
**Minifying & GZIP**

To improve the result, I first started implementing build scripts. With these build scripts I can ensure that my CSS and JS files are minified. This means that for example all comments and indents are removed, leaving one long line of compressed code. This makes the final file the browser receives a lot smaller. In Lighthouse's results, this made my CSS so small that it was no longer perceived as render blocking. The next step was to shrink my images. Although the majority of my images come from a external API, I also have a few of my own. I was able to compress these images in a build script using imagemin. This ensures that the file size of the images is reduced, without the end-user noticing that the quality has been reduced. The next step I applied was the use of GZIP. This compresses the files that are sent from the server to the end user, so the user will receive them faster. 

**External images?**

The last problem I was having is with the external images of my API. These images are hosted on NASA servers and therefore I have little control over the images provided. Lighthouse indicated some performance issues for these images. For example, sometimes the images would be too large and they are delivered in a non-optimal format, such as JPG instead of Webp. In addition, the server sending them does not use HTTP/2 and no caching headers are sent. These are some things that have a big impact on the performance and the score you get for it. In one of Declan's lessons we also discussed the optimization of external images, for example by downloading them and using a `<picture>` element with a `srcset`. In the end, it came out that it was not wise to do this, especially with the time we have left.

Since it still has a very large effect on my load time, I searched online for alternatives. I came across an external service called Cloudinary that allows you to fetch external images and improve their performance. Cloudinary has created a very clever API with an algorithm that makes it possible to compress images without visible quality loss. In addition, you can ask Cloudinary to automatically deliver the correct file format to the user. For example, Cloudinary can automatically deliver Webp images to Chrome users, and JPG-XR to Internet Explorer users, without you having to provide a whole list of sources in `srcset`. A url would look like this: 

```
https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/https://apod.nasa.gov/apod/image/1003/ngc1313_gendler.jpg
```

So you place the Cloudinary part before the original image url. Here `f_auto` stands for the automatic format selection and with `q_auto` the optimal quality for an image is found. In addition to these settings, it is also possible to set a fixed height and width, so my images are never too large. Cloudinary hosts the fetched images on a content delivery network with proper settings for caching, etc. This makes the images load super fast anywhere in the world. 

**Improving accessibility & SEO**

To improve the accessibility of my app, I made sure that all images have a correct `alt` description. In addition, it was important for SEO to add a meta-description to the head of my html. As well as adding a `rel="noreferrer"` to external links and a `title` attribute to iframes. 

**Improving PWA score**

The Progressive Web App section of the Lighthouse scan still revealed the importance of redirecting HTTP traffic to HTTPS. I also applied this by redirecting traffic in production to the secure version of the site. 

### After the optimizations
After applying the aforementioned optimizations, I obtained the scores below in Lighthouse and Pingdom:

<img width="425" alt="Schermafbeelding 2021-03-23 om 15 24 23" src="https://user-images.githubusercontent.com/60745347/112197852-d078b580-8c0c-11eb-9002-5f13323bb59f.png">

<img width="819" alt="Schermafbeelding 2021-03-23 om 16 47 44" src="https://user-images.githubusercontent.com/60745347/112197941-e6867600-8c0c-11eb-80ab-438e5eca5f89.png">

As you can see I'm scoring green everywhere now! In addition, with Pingdom you can clearly see that the total size of the request has decreased a lot. This is largely due to the minification and optimization of the images. As you can also see, the score is not yet 100 everywhere. This is due to the response time of the server. This is partly dependent on Heroku, but also on my API. This is because I have to send a number of requests before I have all the content I want to show. This takes some time, so the server can only send a response after some time. Still, the score has improved tremendously and the load time has also decreased by almost 1.5 seconds. 
 
<br>

## ⬇️ How to install
Before you install this application, I kindly request that you use your own API key from NASA and setup a document environment file. The NASA API key is free and can be requested [here](https://api.nasa.gov/). 

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
- **Convert dates to local dates** article published by MDN. Read it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString). 
- **Planet Mars** image copied from [ClearPNG](https://www.cleanpng.com/png-earth-mars-planet-solar-system-terraforming-jupite-760076/preview.html).
- **Planet Earth** image copied from [RoosKBC](https://rooskcb.nl/home/earth-blue-planet-globe-planet-41953/).
- **Rocket, Planet and Star** icons copied from [Google Material Icons](https://material.io/resources/icons/?style=baseline).
- **NodeJS & Express crash course** a YouTube video by the Net Ninja. View the video [here](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
- **ExpressJS getting started** a starters guide made by the development team from ExpressJS. Read it [here](https://expressjs.com/en/starter/installing.html)
- **Working with EJS** a video by the Net Ninja. View the video [here](https://www.youtube.com/watch?v=yXEesONd_54&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=7).
- **Web App manifest generator** a tool made by Tomi to generate a web manifest file. You can use the tool [here](https://tomitm.github.io/appmanifest/)
- **Maskable app icons** article written by Tiger Oakes on August 29, 2019. Published on [CSStricks](https://css-tricks.com/maskable-icons-android-adaptive-icons-for-your-pwa/)
- **Splashscreens for iOS devices** generated with the help of a tool by Appscope. View the tool [here](https://appsco.pe/developer/splash-screens).
- **Use ES6 modules with Node** an answer by user Peter Mortensen on Stackoverflow. Read it [here](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js)
- **Implement DOTENV** for storing server side secrets. Documentation used from [NPM](https://www.npmjs.com/package/dotenv]
- **Service worker examples** made by CMD teachers Joost and Declan. Adapted code from the ["examples" directory](https://github.com/cmda-minor-web/progressive-web-apps-2021/tree/master/examples).
- **Delete old cache** answer by user 'elf' on Stackoverflow. Read the code example [here](https://stackoverflow.com/questions/45467842/how-to-clear-cache-of-service-worker)
- **Build CSS and JS** code for the build scripts with the help of Jordy.
- **Gulp imagemin** to minify image sizes. Used code examples from the documentation on [NPM](https://www.npmjs.com/package/gulp-imagemin).
- **Enable GZIP** article by Victor Valencia Rico on [Medium](https://medium.com/@victor.valencia.rico/gzip-compression-with-node-js-cc3ed74196f9).
- **Force HTTPS connection** article on how to implement HTTPS redirect with ExpressJS from [Divio](https://docs.divio.com/en/latest/how-to/node-express-force-https/).
- **Use Cloudinary** for optimizing externally hosted images. Article from the documentation can be found [here](https://cloudinary.com/documentation/image_optimization).
- **Detecting online/offline state** to show a message to the user. Article with code examples from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
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
