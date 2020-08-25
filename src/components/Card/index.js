import React from "react";
const Card = ({ title, subtitle, image, children }) => (
  <div v-for="card in cardData" key="card.id" class="column is-4">
    <div class="card large">
      <div class="card-image is-16by9">
        {() => {
          if (image) {
            return (
              <figure class="image">
                <img alt="Image" />
              </figure>
            );
          }
        }}
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            {() => {
              if (image) {
                return (
                  <figure class="image is-48x48">
                    <img alt="Image" />
                  </figure>
                );
              }
            }}
          </div>
          <div class="media-content">
            <p class="title is-4 no-padding">{title}</p>
            <p>
              <span class="title is-6">
                <a href=""> </a>{" "}
              </span>{" "}
            </p>
            <p class="subtitle is-6">{subtitle}</p>
          </div>
        </div>
        <div class="content">
          {children}
          <div class="background-icon">
            <span class="icon-twitter"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Card;
