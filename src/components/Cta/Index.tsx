import Link from "next/link"
import BgCTA from "./BgCTA"
import { CTA_LINK, CTA_TEXT } from "@/constants"

const Index = () => {
  return (
    <section id="cta" className="section">
      <div className="cta">
        <div className="svg-bg-home">
          <BgCTA />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="container-center">
          <h5 className="pretitle">{
            CTA_TEXT[0]
          }</h5>
          <h2 className="title-section">{
            CTA_TEXT[1]
          }</h2>
          <p className="text-body">{
            CTA_TEXT[2]
          }</p>
          <Link className="btn" href="">{
            CTA_LINK[0]
          }</Link>
        </div>
      </div>
    </section>
  )
}

export default Index
