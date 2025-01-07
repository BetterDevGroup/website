import Link from "next/link";
import { FullLogo, TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { expertise } from "@/assets/data/dummydata";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <FullLogo />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+212 699 826 223</h3>
              <br />
              <Link href="/contact">
                <button className="button-primary">Request for quote</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/">About agency</Link>
              </li>
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Showcase</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Blog</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              {expertise.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="connect">
              <h3>CONNECT</h3>
              <ul className="social-media">
                <li>
                  <Link
                    href="https://www.facebook.com/people/Develop-Better/61571702786567/"
                    target="_blank"
                  >
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.behance.net/develop-better"
                    target="_blank"
                  >
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/developbetterofficiel/"
                    target="_blank"
                  >
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/develop-better"
                    target="_blank"
                  >
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2018 DEVELOP BETTER. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <Link href="/agency">Bdev Group COMPANY</Link>
              <span> &nbsp; | &nbsp; </span>
              <Link href="/terms-conditions">TERMS & CONDITIONS</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
