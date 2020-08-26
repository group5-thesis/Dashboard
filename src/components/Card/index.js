import React from "react";
const Card = ({ title, subtitle, image, children }) => (
  <div v-for="card in cardData" key="card.id" className="column is-4">
    <div className="card large">
      <div className="card-image is-16by9">
        {() => {
          if (image) {
            return (
              <figure className="image">
                <img alt="Image" />
              </figure>
            );
          }
        }}
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            {() => {
              if (image) {
                return (
                  <figure className="image is-48x48">
                    <img alt="Image" />
                  </figure>
                );
              }
            }}
          </div>
          <div className="media-content">
            <p className="title is-4 no-padding">{title}</p>
            <p>
              <span className="title is-6">
                <a href=""> </a>{" "}
              </span>{" "}
            </p>
            <p className="subtitle is-6">{subtitle}</p>
          </div>
        </div>
        <div className="content">
          {children}
          <div className="background-icon">
            <span className="icon-twitter"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Card;
