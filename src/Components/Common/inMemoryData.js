import oldFgrWebsite from "../../images/OldFgrWebsite.JPG";
import geolocation from "../../images/geolocation.png";
import gighub from "../../images/GigHub.jpg";

const inMemoryData = {
  gighub: {
    title: "GigHub",
    description:
      "This is a website for live concert lovers to attend, and schedule live concerts, and to follow other artists ",
    picture: gighub,
    link: "https://fgrgighub.herokuapp.com",
    technologies: [
      { tech: "ASP.NET Core 2.1", use: "Used for Front-end design and Back-end logic " },
      { tech: "ASP.NET Core MVC 2.1", use: "For Model-View-Controller pattern" },
      { tech: "SQL Server", use: "For storing application data" },
      { tech: "Entity Framework Core 2.0", use: "As Object Relational Mapper to communicate with SQL Server" },
      { tech: "ASP.NET Identity Core", use: "For Authentication and Authorization" },
      { tech: "Bootstrap", use: "For use with styling in addition to custom CSS" },
      { tech: "JQuery", use: "For making AJAX requests to the server" },
      { tech: "JavaScript", use: "For additional Client logic to assist JQuery and AJAX calls" },
      { tech: "Docker", use: "For Containerization to use for deployment" },
      { tech: "Heroku", use: "For Cloud Hosting and Deployment with Heroku Container Registry" },


      
      

      
    ]
  },
  oldfgr: {
    title: "My Old Website",
    description:
      "looking for the old FrankieRiviera.com? Here it is, my former static website, with my old resume, video portfolio, and kensington internship newsletters",
    picture: oldFgrWebsite,
    link: "http://frankgriviera.azurewebsites.net/index.html",
    technologies: [
      { tech: "Microsoft Azure", use: "For Cloud hosting" },
      { tech: "Azure Web App", use: "For application deployment" },      
      { tech: "HTML", use: "For markup" },
      { tech: "CSS", use: "For styling" }
    ]
  },
  geolocation: {
    title: "Geolocation",
    description: "Find your location via the HTML Geolocation API",
    picture: geolocation,
    link: "https://fgrgeolocation.surge.sh",
    technologies: [
      { tech: "React", use: "For front-end design" },
      { tech: "REST Apis", use: "External apis used to get location infomation based on latitude and longitude" },
      { tech: "HTML", use: "For Html Geolocation api" },
      { tech: "CSS", use: "For styling" },
      { tech: "Surge", use: "For Cloud Hosting and deployment" }
      

    ]
  }
};

export default inMemoryData;
