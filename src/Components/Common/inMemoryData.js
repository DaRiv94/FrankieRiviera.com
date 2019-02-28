import oldFgrWebsite from "../../images/OldFgrWebsite.JPG";
import geolocation from "../../images/geolocation.png";
import gighub from "../../images/GigHub.jpg";

const inMemoryData = {
  gighub: {
    title: "GigHub",
    description: 
    `This application is an example application of what would be a social media website for live music lovers. 
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
      { tech: "Azure SQL Server", use: "For storing application data in the cloud" },
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
    description:
      `Looking for the old FrankieRiviera.com? 
      Here it is, my former static website, 
      with my old resume, video portfolio, 
      and kensington internship newsletters`,
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
    description: "Mobile friendly application that finds your location",
    image: geolocation,
    link: "https://fgrgeolocation.surge.sh",
    repo: "https://github.com/DaRiv94/FGR-Geolocation-App",
    features: ["Geolocation","Mobile friendly UI" ],
    technologies: [
      { tech: "React", use: "For front-end design" },
      { tech: "HTML-Geolocation-Api", use: "For finding precise user position" },
      {
        tech: "Bing Maps location Apis",
        use:
          "External apis used to get location information based on latitude and longitude"
      },
      { tech: "HTML", use: "For markup " },
      {
        tech: "Bootstrap",
        use: "For use with styling"
      },
      { tech: "CSS", use: "For custom styling and overriding Bootstrap styles" },
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
  }
};

export default inMemoryData;
