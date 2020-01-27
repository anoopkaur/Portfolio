import React from "react";
import Hero from "../components/Hero";

function ContactPage(props) {
  return (
    <div>
      <Hero title={props.title} />
    </div>
  );
}

export default ContactPage;
