import Link from "next/link";
import NuCards from "./NuCards";
import { CARDS_LINK, CARDS_LIST, CARDS_TEXT } from "@/constants";


const Index = () => {
  return (
    <section id="card" className="section">
      <div className="container-center">
        <div className="your-card">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="your-features">
            <h5 className="pretitle">{
              CARDS_TEXT[0]
            }</h5>
            <h2 className="title-section">{
              CARDS_TEXT[1]
            }</h2>
            <p className="text-body">{
              CARDS_TEXT[3]
            }</p>

            <ul className="list">
              {
                CARDS_LIST.map(({ icon, title, text }) => (
                  <li key={icon} className={`list-item icon-list ${icon}`}>
                    <strong className="strong">{title}</strong>
                    <p className="text-body">{text}</p>
                  </li>
                ))
              }
            </ul>

            <Link className="link" href="">
              {
                CARDS_LINK[0]
              }
            </Link>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" className="your-cards">
            <NuCards />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
