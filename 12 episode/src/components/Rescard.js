import { CDN_URL } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, cuisines, avgRating } =
    resData?.card?.card?.info;
  return (
    <div className="res-card relative">
      <div className="res-img">
        {/* <img src='https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1700465627/5c94a80a866bed890682dbf37726e82c.jpg' alt='reslogo'/> */}
        <img src={CDN_URL + cloudinaryImageId} alt="Res -Img" />
      </div>
      <div className="res-card-content">
        <h3 className="font-bold text-xl">{name || "Restaurant Name Not Available"}</h3>
        <h4>{locality || "Near By location"} </h4>
        <h5>{cuisines.join(", ") || "N/A"}</h5>
        <h5>Rating: {avgRating || "Good Rating"} ⭐</h5>
      </div>
    </div>
  );
};


export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div className="group hover:scale-103 hover:-translate-y-2 transition-transform duration-300 relative">
        <label className="absolute top-2 left-2 bg-slate-600 text-white p-2 z-50 shadow-lg rounded-lg">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default Rescard;
