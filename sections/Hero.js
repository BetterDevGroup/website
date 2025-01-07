import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import WhyChooseUs from "./WhyChooseUs";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="video-background">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            src="/videos/background-video2.mp4"
          />
        </div>

        <div className="container">
          <TitleLogo title="Better" caption="DEVELOP" className="logobg" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>

          <div className="sub-heading">
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="WEB APPS" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" /> <span>.</span>
            <TitleSm title="MOBILE APPS" />
          </div>
        </div>
      </section>

      <section className="hero-sec">
        <div className="container">
          <div className="heading-title w-100">
            <div className="w-50">
              <Title title="Transforming Ideas Into Impactful Digital Experiences" className={"text-left"} />
              <p className="text-left">
                At DEVELOP Better, we don’t just build websites or apps—we craft
                digital journeys that elevate your brand and connect you with your
                audience. From eye-catching designs to seamless functionality,
                we’re dedicated to creating solutions tailored to your vision.
                Whether you're starting fresh or leveling up, consider us your
                one-stop partner for innovation, strategy, and results.
              </p>
            </div>
            <div className="w-50">
              <img src="/images/s5.jpg" className="w-100 rounded-md" />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Expertise />
      <Brand />
      <Banner />
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div> */}
      {/* <BlogCard /> */}
    </>
  );
};

export default Hero;
