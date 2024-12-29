import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise pb-50px">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              We specialize in crafting exceptional digital experiences that
              drive results. From branding that defines your identity to
              websites and apps that captivate users, our expertise spans
              design, development, and digital marketing. We combine creativity
              with cutting-edge technology to deliver solutions that transform
              businesses and elevate brands.
            </p>
          </div>
          <div className="hero-content">
            {expertise.map((item) => (
              <Card data={item} key={item.id} path="/services" caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
