import { CDN_URL } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, cuisines, avgRating } =
    resData?.card?.card?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        {/* <img src='https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1700465627/5c94a80a866bed890682dbf37726e82c.jpg' alt='reslogo'/> */}
        <img src={CDN_URL + cloudinaryImageId} alt="Res -Img" />
      </div>
      <div className="res-card-content">
        <h3 className="res-card-content-resname">{name || "Restaurant Name Not Available"}</h3>
        <h4>{locality || "Near By location"} </h4>
        <h5>{cuisines.join(", ") || "N/A"}</h5>
        <h5>Rating: {avgRating || "Good Rating"}</h5>
      </div>
    </div>
  );
};

export default Rescard;