import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { SubTitleSm } from "@/components/common/Title";

export const home = [
  {
    icon: (
      <img
        src="../images/innovation-icon.svg"
        width={60}
        height={60}
        className="feature-icon"
      />
    ),
    title: "Driven by Passion, Fueled by Innovation",
  },
  {
    icon: (
      <img
        src="../images/technology-icon.svg"
        width={60}
        height={60}
        className="feature-icon"
      />
    ),
    title: "Cutting-Edge Technology, Tailored Solutions",
  },
  {
    icon: (
      <img
        src="../images/client-icon.svg"
        width={60}
        height={60}
        className="feature-icon"
      />
    ),
    title: "Collaborative & Client-Focused",
  },
  {
    icon: (
      <img
        src="../images/fresh-icon.svg"
        width={60}
        height={60}
        className="feature-icon"
      />
    ),
    title: "Fresh Perspective, Proven Expertise",
  },
  {
    icon: (
      <img
        src="../images/quality-icon.svg"
        width={60}
        height={60}
        className="feature-icon"
      />
    ),
    title: "Quality Without Compromise",
  },
];
export const expertise = [
  {
    id: 1,
    title: "Branding",
    subtitle:
      "Build a brand that tells your story and leaves a lasting impression. From logo design to complete brand identity, we make your vision come to life.",
    slug: "branding",
    cover: "../images/branding.webp",
    desc: [
      { text: "Logo Design" },
      { text: "Custom icons & illustrations" },
      { text: "E-Commerce website design" },
      { text: "Website design" },
    ],
    body: (
      <>
        <SubTitleSm title="About Our Branding Services" />
        <p className="desc-p">
          At DEVELOP Better, branding is more than just visuals—it’s the essence
          of who you are and what you stand for. We collaborate with you to
          uncover your brand’s unique personality and translate it into a
          cohesive identity that resonates with your audience.
        </p>
        <p className="desc-p">
          Our team combines creativity, strategy, and market insight to help you
          stand out in a crowded marketplace. Whether you’re launching a new
          business or revamping an existing identity, we’ll ensure your brand
          leaves a lasting impression.
        </p>
        <div className="what-we-offer py">
          <div className="image">
            <img
              src="../images/services/branding.webp"
              width="100%"
              height="100%"
              className="round bg-cover"
            />
          </div>
          <div className="list">
            <ul>
              <li>
                <SubTitleSm title="What We Offer" />
              </li>
              <li>
                <strong>Logo Design & Brand Identity</strong> A logo that’s not
                just beautiful but memorable and meaningful.
              </li>
              <li>
                <strong>Brand Guidelines</strong> A comprehensive guide covering
                fonts, colors, tone, and more to ensure consistency across
                platforms.
              </li>
              <li>
                <strong>Packaging Design</strong> Eye-catching and functional
                designs for your products.
              </li>
              <li>
                <strong>Rebranding</strong> Transform your existing identity
                into something fresh and relevant.
              </li>
              <li>
                <strong>Digital Assets</strong> Social media templates, website
                banners, and email graphics designed to amplify your brand.
              </li>
            </ul>
          </div>
        </div>
        <div className="why-choose-us py">
          <SubTitleSm title="Why Choose Us?" />
          <ul>
            <li className="box">
              <span className="box2">
                <strong>Tailored to Your Vision</strong> We listen, research,
                and design with your unique goals and audience in mind.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Strategy-Driven Design</strong> Every decision is backed
                by strategy, ensuring your brand communicates effectively.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Holistic Approach</strong> From visual identity to
                messaging, we ensure every element of your brand works in
                harmony.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Attention to Detail</strong> We obsess over the small
                details that make a <br />
                big difference.
              </span>
            </li>
          </ul>
        </div>
        <div className="abstract_bg">
          <img
            src="../images/services/abstract_bg.webp"
            width="100%"
            height="100%"
            className=""
          />
        </div>
        <div className="our-process py">
          <SubTitleSm title="Our Process" />
          <ul>
            <li className="box" data-step="1">
              <span className="box2">
                <strong>Discovery</strong> We dive deep into your vision,
                values, and goals to understand your unique story.
              </span>
            </li>
            <li className="box" data-step="2">
              <span className="box2">
                <strong>Research</strong> We analyze your market, audience, and
                competitors to position your brand for success.
              </span>
            </li>
            <li className="box" data-step="3">
              <span className="box2">
                <strong>Concept Development</strong> We craft initial design
                concepts and brand strategies for your review.
              </span>
            </li>
            <li className="box" data-step="4">
              <span className="box2">
                <strong>Refinement</strong> Your feedback guides the process as
                we perfect every element.
              </span>
            </li>
            <li className="box" data-step="5">
              <span className="box2">
                <strong>Launch & Support</strong> We deliver final assets and
                provide ongoing support as your brand comes to life.
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Digital Marketing",
    subtitle:
      "From strategy to execution, we deliver measurable results that drive traffic, engagement, and conversions.",
    slug: "digital-marketing",
    cover: "../images/digital_marketing.webp",
    desc: [
      { text: "Social media marketing" },
      { text: "Marketing campaigns" },
      { text: "Content management" },
      { text: "Markting management" },
      { text: "SEO a& Ranking" },
    ],
    body: (
      <>
        <SubTitleSm title="About Our Digital Marketing Services" />
        <p className="desc-p">
          Digital marketing isn’t just about being online—it’s about standing
          out. At DEVELOP Better, we craft targeted strategies that connect you
          with your audience and drive results.
        </p>
        <p className="desc-p">
          Whether it’s boosting your visibility through SEO, engaging audiences
          on social media, or crafting campaigns that convert, we’re here to
          help you grow in today’s digital-first world.
        </p>
        <div className="what-we-offer py">
          <div className="image">
            <img
              src="../images/services/digital_marketing.webp"
              width="100%"
              height="100%"
              className="round bg-cover"
            />
          </div>
          <div className="list">
            <ul>
              <li>
                <SubTitleSm title="What We Offer" />
              </li>
              <li>
                <strong>Search Engine Optimization (SEO)</strong> Optimize your
                website to rank higher and attract organic traffic.
              </li>
              <li>
                <strong>Pay-Per-Click Advertising (PPC)</strong> Run targeted
                ads on Google and social media to maximize ROI.
              </li>
              <li>
                <strong>Social Media Marketing</strong> Build your brand’s
                presence on platforms like Instagram, Facebook, and LinkedIn.
              </li>
              <li>
                <strong>Content Marketing</strong> Engage your audience with
                compelling blogs, videos, and infographics.
              </li>
              <li>
                <strong>Email Marketing</strong> Nurture leads and retain
                customers with personalized email campaigns.
              </li>
              <li>
                <strong>Analytics & Reporting</strong> Get detailed insights
                into campaign performance and actionable recommendations.
              </li>
            </ul>
          </div>
        </div>
        <div className="why-choose-us py">
          <SubTitleSm title="Why Choose Us?" />
          <ul>
            <li className="box">
              <span className="box2">
                <strong>Data-Driven Strategies</strong> Every decision we make
                is based on insights and analytics, ensuring maximum impact.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Customized Campaigns</strong> We don’t believe in
                one-size-fits-all solutions. Every campaign is tailored to your
                unique needs.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Proven Track Record</strong> Our strategies have helped
                businesses of all sizes achieve their goals.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Full-Service Support</strong> From strategy development
                to execution and optimization, we handle it all.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Transparent Reporting</strong> Regular updates keep you
                informed of your campaign’s progress and success.
              </span>
            </li>
          </ul>
        </div>
        <div className="abstract_bg">
          <img
            src="../images/services/abstract_bg.webp"
            width="100%"
            height="100%"
            className=""
          />
        </div>
        <div className="our-process py">
          <SubTitleSm title="Our Process" />
          <ul>
            <li className="box" data-step="1">
              <span className="box2">
                <strong>Discovery & Goal Setting</strong> We take the time to
                understand your business, audience, and goals.
              </span>
            </li>
            <li className="box" data-step="2">
              <span className="box2">
                <strong>Strategy Development</strong> We craft a tailored
                digital marketing plan to achieve your objectives.
              </span>
            </li>
            <li className="box" data-step="3">
              <span className="box2">
                <strong>Campaign Execution</strong> From ad placements to
                content creation, we bring your strategy to life.
              </span>
            </li>
            <li className="box" data-step="4">
              <span className="box2">
                <strong>Monitoring & Optimization</strong> We continuously
                refine campaigns for better results.
              </span>
            </li>
            <li className="box" data-step="5">
              <span className="box2">
                <strong>Reporting & Insights</strong> Detailed reports highlight
                what’s working and where we’re heading.
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Websites",
    subtitle:
      "We create websites that are not just beautiful but built to perform—fast, responsive, and tailored to your business needs.",
    slug: "websites",
    cover: "../images/websites.webp",
    desc: [
      { text: "Website development" },
      { text: "Maintenance & bug hunting" },
      { text: "Optimization & Improvement" },
      { text: "E-Commerce development" },
      { text: "Deploying & Hosting" },
    ],
    body: (
      <>
        <SubTitleSm title="About Our Website Services" />
        <p className="desc-p">
          Your website is your digital storefront—it’s often the first
          impression your audience has of your brand. At DEVELOP Better, we
          specialize in crafting stunning, user-friendly websites designed to
          engage visitors and drive results.
        </p>
        <p className="desc-p">
          Whether you need a portfolio, e-commerce platform, or corporate
          website, our team blends creativity with cutting-edge technology to
          bring your vision to life.
        </p>
        <div className="what-we-offer py">
          <div className="image">
            <img
              src="../images/services/websites.webp"
              width="100%"
              height="100%"
              className="round bg-cover"
            />
          </div>
          <div className="list">
            <ul>
              <li>
                <SubTitleSm title="What We Offer" />
              </li>
              <li>
                <strong>Custom Website Design</strong> Unique designs that
                reflect your brand and stand out from the crowd.
              </li>
              <li>
                <strong>Responsive Development</strong> Websites that look and
                perform perfectly on any device.
              </li>
              <li>
                <strong>E-Commerce Solutions</strong> Feature-rich online stores
                to grow your business and increase sales.
              </li>
              <li>
                <strong>SEO Optimization</strong> Built-in SEO features to help
                your website rank higher on search engines.
              </li>
              <li>
                <strong>Content Management Systems (CMS)</strong> Easy-to-manage
                websites with platforms like WordPress, Shopify, or custom-built
                solutions.
              </li>
              <li>
                <strong>Performance Optimization</strong> Fast-loading, secure
                websites for a seamless user experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="why-choose-us py">
          <SubTitleSm title="Why Choose Us?" />
          <ul>
            <li className="box">
              <span className="box2">
                <strong>Tailored to Your Needs</strong> Every website is custom-made to align with your brand and business goals.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Cutting-Edge Technology</strong> We leverage the latest tools and frameworks for exceptional performance and scalability.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Focus on User Experience</strong> Designed with your audience in mind, ensuring intuitive navigation and engagement.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Transparent Process</strong> From concept to launch, we keep you informed every step of the way.
              </span>
            </li>
            <li className="box">
              <span className="box2">
                <strong>Proven Results</strong> Our websites not only look great but deliver measurable business impact.
              </span>
            </li>
          </ul>
        </div>
        <div className="abstract_bg">
          <img
            src="../images/services/abstract_bg.webp"
            width="100%"
            height="100%"
            className=""
          />
        </div>
        <div className="our-process py">
          <SubTitleSm title="Our Process" />
          <ul>
            <li className="box" data-step="1">
              <span className="box2">
                <strong>Discovery & Goal Setting</strong> We take the time to
                understand your business, audience, and goals.
              </span>
            </li>
            <li className="box" data-step="2">
              <span className="box2">
                <strong>Strategy Development</strong> We craft a tailored
                digital marketing plan to achieve your objectives.
              </span>
            </li>
            <li className="box" data-step="3">
              <span className="box2">
                <strong>Campaign Execution</strong> From ad placements to
                content creation, we bring your strategy to life.
              </span>
            </li>
            <li className="box" data-step="4">
              <span className="box2">
                <strong>Monitoring & Optimization</strong> We continuously
                refine campaigns for better results.
              </span>
            </li>
            <li className="box" data-step="5">
              <span className="box2">
                <strong>Reporting & Insights</strong> Detailed reports highlight
                what’s working and where we’re heading.
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "E-Commerce",
    slug: "e-commerce",
    cover: "../images/ecommerce.webp",
    desc: [
      { text: "E-Commerce website design" },
      { text: "WooCommerce" },
      { text: "Content management" },
      { text: "Hosting" },
    ],
  },
  {
    id: 5,
    title: "Web Apps",
    slug: "web-apps",
    cover: "../images/web_apps.webp",
    desc: [
      { text: "Visual identity" },
      { text: "Branding for social media" },
      { text: "Custom illustrations" },
    ],
  },
  {
    id: 6,
    title: "Mobile Apps",
    slug: "mobile-apps",
    cover: "../images/mobile_apps.webp",
    desc: [
      { text: "Visual identity" },
      { text: "Branding for social media" },
      { text: "Custom illustrations" },
    ],
  },
];
export const testimonial = [
  {
    id: 1,
    name: "Alexander Black",
    cover: "../images/e1.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 2,
    name: "Diana Green",
    cover: "../images/e2.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
  {
    id: 3,
    name: "Alexander White",
    cover: "../images/e3.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 4,
    name: "Diana Yellow",
    cover: "../images/e4.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
];
export const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "../images/s1.jpg",
    catgeory: "DIGITAL MARKETING",
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    catgeory: "WEBSITES",
    cover: "../images/s2.jpg",
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "../images/s3.jpg",
    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "../images/s4.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "../images/s5.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "VR Experience",
    cover: "../images/s6.jpg",
    catgeory: "WEBSITES	",
  },
];
export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
];
export const blogdata = [
  {
    id: 1,
    title: "Ligula vel urna accumsan placerat",
    cover: "../images/b1.webp",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
  },
  {
    id: 2,
    title: "Don’t underestimate the lorem ipsum dolor amet",
    cover: "../images/b2.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
  },
  {
    id: 3,
    title:
      "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "../images/b3.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
  },
  {
    id: 4,
    title: "What eleifend posuere tincidunt",
    cover: "../images/b4.jpg",
    catgeory: "EVENTS",
    date: "OCTOBER 8, 2023",
  },
];
export const teamdata = [
  {
    id: 1,
    title: "Alexander Black",
    cover: "../images/t1.jpg",
    post: "FOUNDER, CEO",
  },
  {
    id: 2,
    title: "Anna Kovalenko",
    cover: "../images/t2.jpg",
    post: "FINANCE DIRECTOR",
  },
  {
    id: 3,
    title: "Tiffany White",
    cover: "../images/t3.jpg",
    post: "CREATIVE DIRECTOR",
  },
  {
    id: 4,
    title: "Richard Greenwood",
    cover: "../images/t4.jpg",
    post: "PROGRAMMER",
  },
  {
    id: 5,
    title: "Jessica Brown",
    cover: "../images/t5.jpg",
    post: "MARKETING DIRECTOR",
  },
  {
    id: 6,
    title: "Gregory Windstorm",
    cover: "../images/t6.jpg",
    post: "ACCOUNTING MANAGER",
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "../images/t7.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "../images/t8.jpg",
    post: "",
  },
];
