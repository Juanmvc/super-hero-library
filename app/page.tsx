import getHeroList from "./core/application/getHeroList";
import React from "react";
import HeroList from "./ui/sections/HeroList";
import Navbar from "@/stories/navbar/Navbar";
import marvelLogo from "../public/logos/marvel-logo.svg";

async function HeroListListPage() {
  const heroList = await getHeroList({ limit: 50});

  return (
    <div>
      <Navbar logoSrc={marvelLogo} logoUrl={"/"} iconUrl={"/"}/>
      <HeroList initialHeroList={heroList}/>
    </div>
  );
}

export default HeroListListPage;