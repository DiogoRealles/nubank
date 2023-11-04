import { FEATURES, FEATURES_TEXT, ICONS } from "@/constants"
import Image from "next/image"


const Index = () => {
  return (
    <section className="section">
      <div className="container-center">
        <div className="best">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="best-header flex-item-auto">
            <h5 className="pretitle">{
              FEATURES_TEXT[0]
            }</h5>
            <h2 className="title-section">{
              FEATURES_TEXT[1]
            }</h2>
          </div>
          <ul className="best-list flex-item-auto">
            {
              FEATURES.map((item, index) => (
                <li key={index} data-aos="zoom-in" data-aos-delay="000" data-aos-duration="1000" className="best-item">
                  <div className="best-icon">
                    <Image className="img" fill src={item.icon} alt="" />
                  </div>
                  <strong className="strong">{item.title}</strong>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Index
