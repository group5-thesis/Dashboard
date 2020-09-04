import React, { useState } from "react";
import Button from "components/Button";
import "./modal.css";
export default function Modal({ label, children }) {
  const [isVisible, setIsVisible] = useState(false);
  function toggleModal(visible) {
    let modal = document.getElementById("modal");
    if (!isVisible) {
      modal.classList.add("is-visible");
    } else {
      modal.classList.remove("is-visible");
    }
    setIsVisible(visible);
  }
  window.addEventListener("keyup", (e) => {
    if (e.keyCode === 27 && isVisible) {
      toggleModal(false);
    }
  });
  return (
    <>
      <Button
        label={label}
        {...{
          onClick: () => {
            toggleModal(true);
          },
        }}
      />
      <div className="modal is-active" id="modal">
        <div className="modal-background"></div>
        <div className="modal-container">
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button
                className="delete"
                onClick={() => {
                  toggleModal(false);
                }}
              ></button>
            </header>
            <section className="modal-card-body">{children}</section>
            {/* <footer className="modal-card-foot">
              <Button
                label={"close"}
                {...{
                  onClick: () => {
                    toggleModal(false);
                  },
                }}
              />
            </footer> */}
          </div>
        </div>
      </div>
    </>
  );
}
