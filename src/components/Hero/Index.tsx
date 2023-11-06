"use client";
import { HERO_TEXT, HERO_APPS, ICONS, LABELS_BTN } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import BgHero from "@/components/Hero/BgHero";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="section border-2 border-red-600">
      <div className="bg-hero overflow-x-hidden">
        <div className="svg-bg-home">
          <BgHero />
        </div>
      </div>
      <div className="container-center">
        <div className="hero-wrapper">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="700"
            className="flex-item-1"
          >
            <h1 className="h1">{HERO_TEXT[0]}</h1>
            <p className="body-16">{HERO_TEXT[1]}</p>
            <div className="downloads-app">
              <Link className="btn" href="">
                {LABELS_BTN[0]}
              </Link>
              <Link className="" href="">
                <div className="downloads-icons">
                  <Image src={HERO_APPS[0]} fill alt="" />
                </div>
              </Link>
              <Link className="" href="">
                <div className="downloads-icons">
                  <Image src={HERO_APPS[1]} fill alt="" />
                </div>
              </Link>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex-item-3 div-card"
          >
            <div className="icon-hero icon-hero-card">
              <Image src={ICONS[0]} fill alt="" />
            </div>

            <div className="icon-hero icon-hero-mobile">
              <Image src={ICONS[1]} fill alt="" />
            </div>

            <div className="icon-hero icon-hero-contactless">
              <Image src={ICONS[2]} fill alt="" />
            </div>

            <div className="card"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
