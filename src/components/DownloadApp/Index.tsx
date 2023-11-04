import Link from "next/link";
import LogoNu from "./LogoNu";
import Image from "next/image";
import { DOWNLOAD_LIST, DOWNLOAD_TEXT } from "@/constants";

const Index = () => {

  return (
    <section id="download-app" className="section">
      <div className="container-center">
        <div className="download-app">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="download-features">
            <h5 className="pretitle">{
              DOWNLOAD_TEXT[0]
            }</h5>
            <h2 className="title-section">{
              DOWNLOAD_TEXT[1]
            }</h2>
            <p className="text-body">{
              DOWNLOAD_TEXT[2]
            }</p>

            <ul className="list">
              {
                DOWNLOAD_LIST.map(({ icon, link, }) => (
                  <li key={icon} className={`list-item`}>
                    <Link className="relative" href={link} target="_blank">
                      <Image
                        src={icon}
                        width={48}
                        height={48}
                        alt=""
                      />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" className="logo-nu">
            <LogoNu />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
