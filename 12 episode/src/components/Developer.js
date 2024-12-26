import React, { useState } from "react";
import { useEffect } from "react";
import { GITHUB_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import './Developer.css'

const Developer = () => {
  const [githubData, setGithubData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(GITHUB_API);
      const data = await res.json();
      // console.log(data);
      setGithubData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (githubData === null) {
    return <Shimmer />;
  }

  const {
    avatar_url,
    name,
    followers,
    following,
    location,
    company,
  } = githubData;
  return(
    <div className="developer-page">
        <div className="dev-img">
            <img src={avatar_url} alt="This is developer pic"></img>
        </div>
        <ul className="dev-content">
          <li>Name: {name}</li>
          <li> Location: {location}</li> 
          <li>Followers: {followers}</li>
          <li>Following: {following}</li>
          <li>Company:{company}</li>
          
           
          

        </ul>
        <button className="dev-project project-bttn">
        <a href='https://github.com/Rahul1227/Namaste-React' target="_blank"> Get this project</a>
        </button>
    </div>
  )
};

export default Developer;
