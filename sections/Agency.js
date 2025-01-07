import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products since 2018" />
              <p className="desc-p">
                At Develop Better, we specialize in transforming visionary ideas
                into cutting-edge digital solutions. Since 2018, we’ve been
                crafting innovative websites, mobile apps, and digital platforms
                tailored to meet the unique needs of businesses like yours.
              </p>
              <p className="desc-p">
                Our mission is simple: to bridge the gap between your goals and
                smart technology. With a customer-first approach, we combine
                creativity, modern design, and robust development to create
                products that drive growth and deliver results. Whether you’re
                launching a startup, scaling your business, or redefining your
                brand, we’re here to make your ideas a reality—smarter, faster,
                and better.
              </p>
              <p className="desc-p">
                Let’s build the future of your business together. 🚀
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">{new Date().getFullYear() - 2018}+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                {/* <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div> */}
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                At Develop Better, our mission is to empower businesses by
                creating innovative, user-focused digital solutions that inspire
                growth and success. We aim to turn ambitious ideas into reality
                through cutting-edge technology, creative design, and a
                commitment to excellence.
              </p>
              <br />
              <p className="misson-p">
                By bridging the gap between vision and execution, we help our
                clients thrive in an ever-evolving digital landscape. Whether
                it’s building stunning websites, powerful apps, or impactful
                marketing strategies, our focus remains on delivering measurable
                results and lasting value.
              </p>
              <br />
              <p className="misson-p">
                Your success is our success—and we’re here to develop better,
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      {/* <Testimonial /> */}
      <Banner />
      {/* <br /> */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <br /> */}
    </>
  );
};

export default Agency;
