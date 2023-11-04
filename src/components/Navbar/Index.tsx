'use client'
import LogoNuMob from "./logonuMob";
import { LABELS_BTN, NAV_LINKS_DESKTOP, NAV_LINKS_MOBILE, MENU_SOCIALS, } from "@/constants"
import Link from "next/link"
import ItemMenu from "./ItemMenu"
import ItemMenuMobile from "./ItemMenuMobile"
import { useState } from "react"
import Image from "next/image";
import LogoNu from "./LogoNu";
const Index = () => {

  const [color, setColor] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [iconMenu, setIconMenu] = useState<boolean>(false);


  function toggleMenu() {
    setOpenMenu(!openMenu);
    setIconMenu(!iconMenu);
  }

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <header id="header" className={`${color ? 'header active-header' : 'header'}`}>

      {/* NAVBAR MOBILE */}
      <nav
        className="navbar-mobile"
      >
        <div
          id="bx"
          className={iconMenu ? 'active-bx bx' : 'bx'}
          onClick={toggleMenu}
          aria-label={iconMenu ? 'Fechar' : 'Abrir'}
        ></div>
        <div className="logoMob">
          <LogoNuMob />
        </div>
        <Link href="" role="button">{LABELS_BTN[1]}</Link>
      </nav>

      {/* NAVBAR DESKTOP */}
      <nav>
        <div className="container-center">
          <div className="navbar-desktop">

            <div className="navbar-desktop-item-1">
              <div className="logoDesk">
                <LogoNu />
              </div>

              <ul data-aos="fade-down" data-aos-delay="000" data-aos-duration="900" className="menu-desktop">
                {NAV_LINKS_DESKTOP.map((menu, index) => (
                  <ItemMenu key={index} id={menu.id} link={menu.key} label={menu.label} dropdown={menu.dropdown} />
                ))}
              </ul>
            </div>

            <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000" className="navbar-desktop-item-2">
              <Link className="btn" href="">{LABELS_BTN[0]}</Link>
              <Link href="">{LABELS_BTN[1]}</Link>
            </div>
          </div>
        </div>
      </nav>

      {openMenu && (
        // MENU MOBILE
        <nav className="menu-mobile">
          <ul className="nav-list-mobile">
            {NAV_LINKS_MOBILE.map((menu, index) => (
              <ItemMenuMobile key={index} id={menu.id} link={menu.key} label={menu.label} event={toggleMenu} />
            ))}
            <Link className="btn" href="">{LABELS_BTN[0]}</Link>
            <ul className="flex gap-4 mt-4">
              {MENU_SOCIALS.map((social: string, index: number) => (
                <li>
                  <Link href="/" key={index}>
                    <div className="w-10 h-10">
                      <Image
                        src={social}
                        width={48}
                        height={48}
                        alt=""
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Index
