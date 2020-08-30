import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/Button";
export default function Placeholder({ title, subtitle,route }) {
  let history = useHistory();
  function goBackHome() {
    history.push("/");
  }
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <div className="box  pt-8 pb-8">
              <h1 className="title" style={{ fontSize: "4em" }}>
                {title}
              </h1>
              <h2 className="subtitle">
                {subtitle}
              </h2>
              {(function () {
                if (route) {
                  return <p>{route}</p>
                }
              })()}
              {/* <Button
                label="Back To Home"
                variant={{
                  type: "medium ",
                  color: "primary ",
                  textColor: "white"
                }}
                {...{
                  onClick: () => {
                    goBackHome();
                  },
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
