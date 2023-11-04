import Link from 'next/link'
import Smartphone from './Smartphone';
import { ACCOUNT_TEXT,ACCOUNT_LIST, ACCOUNT_LINK, } from '@/constants';

const Index = () => {

  return (
    <section id="account" className="section">
      <div className="container-center">
        <div className="account">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="account--smartphone">
            <Smartphone />
          </div>

          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="account--features">
            <h5 className="pretitle">{
              ACCOUNT_TEXT[0]
            }</h5>
            <h2 className="title-section">{
              ACCOUNT_TEXT[1]
            }</h2>
            <p className="text-body">{
              ACCOUNT_TEXT[2]
            }</p>

            <ul className="list">
              {
                ACCOUNT_LIST.map(({ icon, title, text }) => (
                  <li key={text} className={`list-item icon-list ${icon}`}>
                    <strong className="strong">{title}</strong>
                    <p className="text-body">{text}</p>
                  </li>
                ))
              }
            </ul>

            <Link className="link" href="">
              {
                ACCOUNT_LINK[0]
              }
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
