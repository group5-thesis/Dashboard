import React, { useState } from "react";

export default function OverlayContainer({ children, hovered }) {
  return (
    <>
      <div
        className="card-content is-overlay is-clipped"
        style={{
          display: hovered ? "block" : "none",
          height: "100%!important",
          width: "100%"
        }}
      >
        <div
          className="columns"
          style={{
            transition: "all 0.5s ease-in-out",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <div className="column is-12">
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Vertical...</p>
                      <p className="subtitle">Top tile</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">...tiles</p>
                      <p className="subtitle">Bottom tile</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="column is-12">{children}</div> */}
        </div>
      </div>
    </>
  );
}
