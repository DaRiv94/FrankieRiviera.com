import oldFgrWebsite from "../../images/OldFgrWebsite.JPG";
import geolocation from "../../images/geolocation.png";
import gighub from "../../images/GigHub.jpg";
import fgrapidocs from "../../images/fgrapiviewerSquare.png";
import fgrapi from "../../images/FGR_API_Transparent.png";
import visionApi from "../../images/VisionApi.png";
import taskMaster from "../../images/TaskMaster.png";
import FGR_BUDGET_APP from "../../images/1000x1000_FGR_FINANCE.png";
import IdentityUserImage from "../../images/user_image_transparentbg.png";
import RaspberryPiImage from "../../images/raspberry_pi_logo.png"

const inMemoryData = {

  kubernetes_demo: {
    title: "FGR Kubernetes Demo",
    shortDescription:
      "Full Stack app that demonstrates the use of Kubernetes, and containerization in a microservice architecture.",
    description: `This Kubernetes demo demonstrates my proficiency with Containerization, Kubernetes, 
    and the building of full-scale applications from scratch using a microservice architecture.
    The application use case is a personal budget app that connects to bank accounts and allows users to track transactions, and manage budgets.`,
    separatePage: "/portfolio/kubernetes-demo",
    image: FGR_BUDGET_APP,
    link: "http://kubernetes-demo.frankieriviera.com",
    repo: null,
    features: [
      "Uses Kubernetes to orchestrate containers",
      "Microservice architecture allows for ideal separation of concerns",
      "Uses Azure Kubernetes Service for Cloud Hosting",
      "App Demo allows users to create accounts, connect to bank accounts, and manage budgets",
      "Uses Terraform to quickly spin up and spin down cloud resources"
    ],
    technologies: [
      {
        tech: "Kubernetes",
        use: "Used for container orchestration"
      },
      {
        tech: "Docker",
        use: "For container runtime"
      },
      {
        tech: "Nginx-ingress",
        use: "For cluster load balancing"
      },
      {
        tech: "Node.js",
        use: "For backend APIs"
      },
      {
        tech: "React",
        use: "For frontend UI"
      },
      {
        tech: "Postgres",
        use: "For data persistenace"
      },
      {
        tech: "Azure Kubernetees Service (AKS)",
        use: "For cloud hosting"
      },
      {
        tech: "Terraform",
        use: "For Infastructure as code"
      },
      {
        tech: "Plaid API",
        use: "For connecting bank accounts in demo"
      },
      { tech: "SendGrid API", use: "For email notifications in demo." }
    ]
  },
  billiard_replay: {
    title: "Billiard Replay",
    shortDescription:
      "A desktop app that uses a raspberry pi to record instant replays of cool billiard shots",
    description: `Billiard Replay is a python desktop app that interfaces with a raspberry pi 4 to record video on a loop. 
    A user can use Billiard Replay to capture and save their billiard shots 
    and email the video to themselves.`,
    separatePage: "/portfolio/billiard-replay",
    image: RaspberryPiImage,
    link: "https://www.youtube.com/watch?v=DzJR1_381G0",
    repo: "https://github.com/DaRiv94/RaspberryPi_Billiard_Camera",
    features: [
      "Constantly records on a loop to save billiard shots on demand",
      "Can view instant replays of past or recently saved billiard shots",
      "Can rename saved video files as desired",
      "Can email saved videos to yourself from the app",
      "Can capture videos at set video lengths for quick access or custom video length up to 5 minutes"

    ],
    technologies: [
      {
        tech: "Raspberry pi 4",
        use: "Device of choice for Billiard Replay"
      },
      {
        tech: "Tkinter",
        use: "As Python desktop framework"
      },
      {
        tech: "SendGrid",
        use: "For sending emails with video files"
      },
      {
        tech: "Python",
        use: "Programming language"
      },
    ]
  },
  custom_vision_license_plate_detector: {
    title: "Custom Vision License Plate Detector",
    shortDescription:
      "A desktop app that uses a raspberry pi to record instant replays of cool billiard shots",
    description: `Billiard Replay is a python desktop app that interfaces with a raspberry pi 4 to record video on a loop. 
    A user can use Billiard Replay to capture and save their billiard shots 
    and email the video to themselves.`,
    separatePage: "/portfolio/billiard-replay",
    image: RaspberryPiImage,
    link: "https://www.youtube.com/watch?v=DzJR1_381G0",
    repo: "https://github.com/DaRiv94/RaspberryPi_Billiard_Camera",
    features: [
      "Constantly records on a loop to save billiard shots on demand",
      "Can view instant replays of past or recently saved billiard shots",
      "Can rename saved video files as desired",
      "Can email saved videos to yourself from the app",
      "Can capture videos at set video lengths for quick access or custom video length up to 5 minutes"

    ],
    technologies: [
      {
        tech: "Raspberry pi 4",
        use: "Device of choice for Billiard Replay"
      },
      {
        tech: "Tkinter",
        use: "As Python desktop framework"
      },
      {
        tech: "SendGrid",
        use: "For sending emails with video files"
      },
      {
        tech: "Python",
        use: "Programming language"
      },
    ]
  },
  gighub: {
    title: "GigHub",
    shortDescription:
      "Example full-stack ASP.NET Core app for live music lovers.",
    description: `This application is an example application of what would be a social media website for live music lovers. 
    Where artists can create accounts, and post when and where they are having gigs. Artists can choose to attend others gigs, 
    and or follow other artists. Artists get notifications when gigs they are going to get changed or canceled. 
    Or when artists they are following add new gigs.`,
    image: gighub,
    link: "https://gighubapp.herokuapp.com",
    repo: "https://github.com/DaRiv94/GigHub",
    features: [
      "Authentication and authorization",
      "Notifications",
      "Ability to follow artists",
      "Search",
      "CRUD APIs for gigs",
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
  fgr_dynamic_auth_service: {
    title: "FGR Dynamic Auth Service",
    shortDescription:
      "Dockerized configurable authentication and authorization microservice",
    description: `The FGR Dynamic Auth Service can be used to quickly spin up an authentication and authorization microservice
    and can be easily configured for different use cases in a few short commands.`,
    image: IdentityUserImage,
    link: "https://github.com/DaRiv94/fgr_dynamic_auth",
    repo: "https://github.com/DaRiv94/fgr_dynamic_auth",
    features: [
      "Provides authentication and authorization out of the box",
      "Uses Docker for quick use and easy container orchestration",
      "Can be configured with and without a database"
    ],
    technologies: [
      {
        tech: "Docker",
        use: "For containerization"
      },
      {
        tech: "Json Web Tokens",
        use: "As method of authorization"
      },
      {
        tech: "Node.js",
        use: "As backend framework"
      },
      {
        tech: "Postgres",
        use: "As Database (If configured, I hope to support more databases in the future)"
      },
      {
        tech: "Git",
        use: "For source control"
      },
      {
        tech: "GitHub",
        use: "For external repository"
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
      "React front-end app that consumes external APIs to find location.",
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
        tech: "Bing Maps location APIs",
        use:
          "External APIs used to get location information based on latitude and longitude"
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
    features: ["Serverless api", "Uses Microsoft Azure Function", "Uses Microsoft Azure Table Storage"],
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
    features: ["Uses Azure Cognitive Services", "Uses Microsoft Azure Blob Storage", "Uses Node.js backend APIs", "Uses React for simple UI"],
    technologies: [
      { tech: "Azure Cognitive Services", use: "For using Azure's Computer Vision Api" },
      { tech: "Azure Blob Storage", use: "For storing images in the cloud" },

      { tech: "Node.js", use: "As javaScript runtime for backend APIs" },
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
        use: "For hosting backend APIs"
      },
      { tech: "Surge", use: "For hosting React frontend" }
    ]
  },
  taskMaster: {
    title: "Task Master",
    shortDescription: "Full-Stack app that uses ASP.NET Core for backend and React.js for frontend ",
    description: `TaskMaster is a microservice architecture example todo app that demonstates all CRUD operations using ASP.NET Core on the backend and React.js on the frontend.`,
    image: taskMaster,
    link: "https://taskmasterfrontend.surge.sh/",
    repo: "https://github.com/DaRiv94/TaskMasterFrontend",
    features: ["Uses ASP.NET Core for REST API", "Uses Docker to containerize API", "Uses Microsoft Azure SQL Server", "Uses React for interactive UI", "Performs all CRUD operations"],
    technologies: [
      { tech: "ASP.NET Core", use: "Framework used for backend REST api" },
      { tech: "Entity Framework", use: "Object Relational Mapper used for database communication" },

      { tech: "Azure SQL Server", use: "For storing data in the cloud" },
      {
        tech: "C#",
        use: "Programming language for backend devlopment"
      },
      {
        tech: "React.js",
        use: "For frontend UI"
      },
      { tech: "JavaScript", use: "Programming language for frontend devlopment" },
      {
        tech: "GIT",
        use: "For source control"
      },
      { tech: "GitHub", use: "For external repository" },
      {
        tech: "Heroku",
        use: "For hosting backend REST api"
      },
      { tech: "Surge", use: "For hosting React frontend" },
      { tech: "Docker", use: "For containeriztion for deployment" }
    ]
  }
};

export default inMemoryData;
