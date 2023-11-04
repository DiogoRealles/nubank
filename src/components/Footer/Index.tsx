import { FOOTER_APPS, FOOTER_LINKS, FOOTER_LOCAL, FOOTER_SOCIALS, } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import LogoNu from '@/../public/img/logo-nubank.svg'
const Index = () => {
  return (
    <footer className="footer">
      <div className="container-center">
        <div className="">
          <div className='footer-top'>
            {FOOTER_LINKS.map((columns, index) => (
              <div key={index} className="">
              <FooterColumn title={columns.title}>
                <ul className="">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
              </div>
            ))}

            <FooterColumn title={FOOTER_APPS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {FOOTER_APPS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="logo" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="info">
            <Link className="logo" href="/">
              <Image src={LogoNu} alt="logo Nubank" />
            </Link>

            <div>
              {
                FOOTER_LOCAL.map((item) => (
                  <p key={item}>{item}</p>
                ))
              }
            </div>
          </div>

          <div className="social">
            {FOOTER_SOCIALS.map((social) => (
              <Link key={social} className="" href="">
                <Image
                  src={social}
                  fill
                  alt=""
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="text-pretitle-24">{title}</h4>
      {children}
    </div>
  )
}

export default Index
