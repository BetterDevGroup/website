import { home } from "@/assets/data/dummydata";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-sec pb-40px mt-25px">
      <div className="container">
        <div className="hero-content">
          {home.map((item, i) => (
            <div className="box" key={i}>
              <div className="box2">
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
