import getHeroList from "./core/application/getHeroList";
import React from "react";
import HeroList from "./ui/sections/HeroList";
import Navbar from "@/stories/navbar/Navbar";
import marvelLogo from "../public/logos/marvel-logo.svg";

async function HeroListListPage() {
  const heroList = await getHeroList({ limit: 50});
  const heroListPrimitive = heroList.map((hero) => hero.toPrimitive());

  return (
    <div>
      <Navbar logoSrc={marvelLogo} logoUrl={"/"} iconUrl={"/"}/>
      <HeroList heroList={heroListPrimitive}/>
    </div>
  );
}

export default HeroListListPage;