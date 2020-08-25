import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/Button";
export default function PageNotFound() {
  let history = useHistory();
  function goBackHome() {
    history.push("/");
  }
  return (
    <div className="is-fullheight has-vertically-aligned-content ">
      <section className="section has-vertically-aligned-content ">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-7">
              <h1 className="title is-1">404</h1>
              <p className="subtitle is-3">Page not found</p>
              <p>
                As well as funds, willing VC-s, client-centered approach, basic
                UX skills, proper level of nutrients, girlfriends and most of
                our dignity.
              </p>
            </div>
          </div>
          <Button
            label="Back To Home"
            variant={{
              type: "medium" ,
              color:"primary ",              
            }}
            {...{
              onClick: () => {
                goBackHome();
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}
