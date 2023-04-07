import React from "react";


export default function Info(props) {

  return (
    <>
      
            <div className="col-md-3" key={props.key}>
              <div className="card ">
                <img src={props.img} className="img-fluid rounded-start project-img card-img-top image2 " alt="" />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center">
                    {props.name}
                  </h5>
                  <a   href={props.link} target="_blank" rel="noreferrer" className=" btn-primary btn-link" >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
    </>
  );
}
