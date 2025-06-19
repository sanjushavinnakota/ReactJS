import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import "./card.css"
const Carddetails = ({ title, description, showIcons = true, image, buttons = [],buttonPosition = "bottom", cardKey }) => {
  const [heart, setHeart] = useState(() => {
    const stored = localStorage.getItem(`heartCount-${cardKey}`);
    return stored ? parseInt(stored) : 0;
  });

  const increaseLikes = () => {
    const updated = heart + 1;
    setHeart(updated);
    localStorage.setItem(`heartCount-${cardKey}`, updated);
  };

  return (
    <div className="card-container">
      {image && <img className="image" src={image} alt="Srila Prabhupada Lila" />}
      <div className="card-body">
        <h5 className="title">{title}</h5>
        {buttonPosition === "side" ? (
          <div className="desc-button-side">
            <p className="description">{description}</p>
            <div className="button-group inline">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className={`btn ${btn.styleType || "primary"} ${btn.className || ""}`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <p className="description">{description}</p>
            <div className="button-group">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className={`btn ${btn.styleType || "primary"} ${btn.className || ""}`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {showIcons && (
        <div className="icons" style={{display:"flex",flexDirection:"row",gap:"30px"}}>
          <IoMdShare />

          <IoHeartOutline className="like" onClick={increaseLikes} />
          {heart}

          <IoBookmarkOutline className="bookmark" />
        </div>

      )}
    </div>
  );
};

export default Carddetails;
