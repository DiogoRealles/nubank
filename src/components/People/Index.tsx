import Link from "next/link"
import People1 from "./People1"
import People2 from "./People2"
import People3 from "./People3"
import { PEOPLE_TEXT, PEOPLE_LIST, PEOPLE_LINK } from "@/constants"

const Index = () => {
  return (
    <section id="people" className="section">
      <div className="container-center">
        <div className="people">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="people-features">
            <h5 className="pretitle">{PEOPLE_TEXT[0]}</h5>
            <h2 className="title-section">{PEOPLE_TEXT[1]}</h2>
            <p className="text-body">{PEOPLE_TEXT[2]}</p>

            <ul className="list">
              {
                PEOPLE_LIST.map((item, index) => (
                  <li key={index} className={`list-item icon-list ${item.icon}`}>
                    <strong className="strong">{item.title}</strong>
                    <p className="text-body">{item.description}</p>
                  </li>
                ))
              }
            </ul>
            <Link className="link" href="">
              {
                PEOPLE_LINK[0]
              }
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="flex-item-3">
            <People1 />
          </div>

          <div className="flex-item-1 flex-column">
            <People2 />
            <People3 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
