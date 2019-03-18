import oldFgrWebsite from "../../images/OldFgrWebsite.JPG";
import geolocation from "../../images/geolocation.png";
import gighub from "../../images/GigHub.jpg";
import fgrapidocs from "../../images/fgrapiviewerSquare.png";
import fgrapi from "../../images/FGR_API_Transparent.png";
import visionApi from "../../images/VisionApi.png";

const inMemoryData = {
  gighub: {
    title: "GigHub",
    shortDescription:
      "Example full-stack ASP.NET Core app for live music lovers.",
    description: `This application is an example application of what would be a social media website for live music lovers. 
    Where artists can create accounts, and post when and where they are having gigs. Artists can choose to attend others gigs, 
    and or follow other artists. Artists get notifications when gigs they are going to get changed or canceled. 
    Or when artists they are following add new gigs.`,

    image: gighub,
    link: "https://fgrgighub.herokuapp.com",
    repo: "https://github.com/DaRiv94/GigHub",
    features: [
      "Authentication and authorization",
      "Notifications",
      "Ability to follow artists",
      "Search",
      "CRUD Apis for gigs",
      "Stores data in Azure SQL Server"
    ],
    technologies: [
      {
        tech: "ASP.NET Core 2.1",
        use: "Used for front-end design and fack-end logic "
      },
      {
        tech: "ASP.NET Core MVC 2.1",
        use: "For Model-View-Controller pattern"
      },
      {
        tech: "Azure SQL Server",
        use: "For storing application data in the cloud"
      },
      {
        tech: "Entity Framework Core 2.0",
        use: "Object Relational Mapper to communicate with Azure SQL Server"
      },
      {
        tech: "ASP.NET Identity Core",
        use: "For Authentication and Authorization"
      },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository (bottom of description for link)"
      },
      {
        tech: "Bootstrap",
        use: "For use with styling"
      },
      { tech: "JQuery", use: "For making AJAX requests to the server" },
      {
        tech: "JavaScript",
        use: "For additional client logic to assist JQuery and AJAX calls"
      },
      {
        tech: "HTML",
        use: "For markup to combine with Razor syntax in ASP.NET Core"
      },
      {
        tech: "CSS",
        use: "For custom styling and overriding Bootstrap styles"
      },
      { tech: "Docker", use: "For Containerization to use for deployment" },
      {
        tech: "Heroku",
        use: "For cloud hosting and deployment with Heroku Container Registry"
      }
    ]
  },
  oldfgr: {
    title: "My Legacy Website",
    shortDescription: "My legacy website built with pure static files",
    description: `Looking for the old FrankieRiviera.com? 
      Here it is, my former static website, 
      with my old resume, video portfolio, 
      and kensington internship newsletters.`,
    image: oldFgrWebsite,
    link: "http://frankgriviera.azurewebsites.net/index.html",
    repo: "https://github.com/DaRiv94",
    features: ["Pure static files", "Embeded video content"],
    technologies: [
      { tech: "Microsoft Azure", use: "For cloud hosting" },
      { tech: "Azure Web App", use: "For application deployment" },
      { tech: "Microsoft OneDrive", use: "For external repository" },
      { tech: "HTML", use: "For markup" },
      { tech: "CSS", use: "For custom styling" }
    ]
  },
  geolocation: {
    title: "Geolocation",
    shortDescription:
      "React front-end app that consumes external apis to find location.",
    description: "Mobile friendly application that finds your location.",
    image: geolocation,
    link: "https://fgrgeolocation.surge.sh",
    repo: "https://github.com/DaRiv94/FGR-Geolocation-App",
    features: ["Geolocation", "Mobile friendly UI"],
    technologies: [
      { tech: "React", use: "JS library used to develop front-end" },
      {
        tech: "HTML-Geolocation-Api",
        use: "For finding precise user position"
      },
      {
        tech: "Bing Maps location Apis",
        use:
          "External apis used to get location information based on latitude and longitude"
      },
      { tech: "JavaScript", use: "As programming language used throughout" },
      { tech: "HTML", use: "For markup " },
      {
        tech: "Bootstrap",
        use: "For use with styling"
      },
      {
        tech: "CSS",
        use: "For custom styling and overriding Bootstrap styles"
      },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository (bottom of description for link)"
      },
      { tech: "Surge", use: "For cloud hosting and deployment" }
    ]
  },
  fgrApiDocs: {
    title: "FGR API Docs",
    shortDescription: "React front-end app that consumes FGR APIs.",
    description:
      "Front-end app built to document demonstrate and display how FGR APIs work. FGR API Docs shows endpoints with accordion like transitions. It offers explainations, code samples, and a clean UI.",
    image: fgrapidocs,
    link: "https://fgr-api-docs.surge.sh",
    repo: "https://github.com/DaRiv94/FGR-API-Docs",
    features: ["Rich User Interface", "Documents FGR APIs"],
    technologies: [
      { tech: "React", use: "JS library used to develop front-end" },
      { tech: "JavaScript", use: "As programming language used throughout" },
      { tech: "HTML", use: "For markup to combine with JSX" },
      {
        tech: "Bootstrap",
        use: "For use with styling"
      },
      {
        tech: "CSS",
        use: "For custom styling and overriding Bootstrap styles"
      },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository (bottom of description for link)"
      },
      { tech: "Surge", use: "For cloud hosting and deployment" }
    ]
  },
  vidlyapi: {
    title: "FGR Vidly API",
    shortDescription: "Back-end api built with Node.js and MongoDB.",
    description: `FGR Vidly API is an example movie rental service api. 
    Its built with node.js and uses a mongoDB database in the cloud. 
    FGR Vidly API has api endpoints for several use cases that would be ideal for consumption by a front-end web app.`,
    image: fgrapi,
    link: "https://boiling-meadow-22539.herokuapp.com",
    repo: "https://github.com/DaRiv94/FGR-Vidly-API",
    features: ["Authentication and Authorization", "Endpoints to rent and return movies", "MongoDB database to store data"],
    technologies: [
      { tech: "Node.js", use: "As javaScript runtime" },
      { tech: "Express.js", use: "As web framework on Node to help with running the server" },
      
      { tech: "MongoDB Atlas", use: "For storing data in the cloud" },
      {
        tech: "Mongoose",
        use: "For creating entities and interacting with MongoDB"
      },
      { tech: "JavaScript", use: "As programming language used throughout" },
      {
        tech: "Jest",
        use: "For testing"
      },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository (bottom of description for link)"
      },
      { tech: "Heroku", use: "For cloud hosting and deployment" }
    ]
  },
  fgrPresidentApi: {
    title: "FGR President API",
    shortDescription: "Back-end api built with Node.js and Azure Table Storage.",
    description: `FGR President API is an example api that uses Microsoft Azure Table Storage`,
    image: fgrapi,
    link: "https://fgr-president-api.herokuapp.com/",
    repo: "https://github.com/DaRiv94/FGR-President-API",
    features: ["Uses Microsoft Azure Table Storage", "Covers Create Read Update Destory (CRUD) operations"],
    technologies: [
      { tech: "Node.js", use: "As javaScript runtime" },
      { tech: "Express.js", use: "As web framework on Node to help with running the server" },
      
      { tech: "Azure Table Storage", use: "For storing data in the cloud" },
      { tech: "JavaScript", use: "As programming language used throughout" },
      {
        tech: "Jest",
        use: "For testing"
      },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository (bottom of description for link)"
      },
      { tech: "Heroku", use: "For cloud hosting and deployment" }
    ]
  },
  fgrUsColonyApi: {
    title: "FGR US Colony API",
    shortDescription: "Back-end serverless api built with an Azure Function in the Azure cloud",
    description: `FGR US Colony API is an example serverless api that uses a Microsoft Azure Function`,
    image: fgrapi,
    link: "https://fgr-api-docs.surge.sh/uscolony",
    repo: "https://github.com/DaRiv94/USColoniesAzureFunction",
    features: ["Sererless api", "Uses Microsoft Azure Function","Uses Microsoft Azure Table Storage"],
    technologies: [
      { tech: "Azure Function", use: "uses ASP.NET Core behind the scenes to run as a serverless function" },
      { tech: "C#", use: "As programming language used thoughout" },
      
      { tech: "Azure Table Storage", use: "For storing data in the cloud" },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository (bottom of description for link)"
      },
      { tech: "Microsoft Azure Cloud", use: "For cloud hosting and deployment" }
    ]
  },
  computerVisionApiExample: {
    title: "Computer Vision Api Example",
    shortDescription: "Full-Stack app that uses Microsoft Azure Cloud's Cognitive Services ",
    description: `Computer Vision Api Example demonstrates my understanding and the functionality of the Azure Computer Vision Api, which is one of Microsoft Azure's Cognitive Services`,
    image: visionApi,
    link: "https://fgr-picture-upload-test.surge.sh/",
    repo: "https://github.com/DaRiv94/ComputerVisionApiExample",
    features: ["Uses Azure Cognitive Services", "Uses Microsoft Azure Blob Storage","Uses Node.js backend apis","Uses React for simple UI"],
    technologies: [
      { tech: "Azure Cognitive Services", use: "For using Azure's Computer Vision Api" },
      { tech: "Azure Blob Storage", use: "For storing images in the cloud" },
      
      { tech: "Node.js", use: "As javaScript runtime for backend apis" },
      {
        tech: "Express.js",
        use: "As web framework on Node.js to help with running the server"
      },
      {
        tech: "React.js",
        use: "For frontend UI"
      },
      { tech: "JavaScript", use: "As programming language used thoughout" },
      {
        tech: "GIT",
        use: "For source control"
      },
      { tech: "GitHub", use: "For external repository" },
      {
        tech: "Heroku",
        use: "For hosting backend apis"
      },
      { tech: "Surge", use: "For hosting React frontend" }
    ]
  }
};

export default inMemoryData;
