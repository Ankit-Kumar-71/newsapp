import React from "react";
const Card = ({ data }) => {
  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="cardContainer">
      {data.map((curItem) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card">
              <img src={curItem.urlToImage} />
              <div className="content">
                <a className="title" onClick={() => readMore(curItem.url)}>
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => readMore(curItem.url)}>Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
