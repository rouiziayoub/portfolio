import React from "react";

import "./Projects.css";
import Info from "./Info";
import jondo from "../images/portrait.jpg"
import FLORETTE from "../images/FLORETTE.png"
import sandbox from "../images/i2.png"
import Bootcamp from "../images/Capture.PNG"



function Projects() {
  const users=[
    {
        id:1,img:Bootcamp,name:"Bootcamp",link:"https://rouiziayoub.github.io/TP3/"
    },
    {
        id:2,img:jondo,name:"jondo",link:"https://rouiziayoub.github.io/TP/"
    },
    {
        id:3,img:FLORETTE,name:"FLORETTE",link:"https://rouiziayoub.github.io/CAFE-FLORETTE/"
    },
    {
        id:4,img:sandbox,name:"sandbox",link:"https://rouiziayoub.github.io/sandbox/"
    },
]
return (
<>
    <div className="container">
      <div className="row">
      { users.map((user)=>(
              <Info key={user.id} img={user.img} name={user.name} link={user.link}/>
            ))
              
            }
      </div>
    </div>
</>
)
}

export default Projects;
