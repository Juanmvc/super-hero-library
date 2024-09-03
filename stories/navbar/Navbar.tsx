"use client"
import React, { useContext } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import heartFullIcon from "../../public/icons/heart-full.svg"
import Image from 'next/image';
import { FavoritesContext } from "@/app/ui/hooks/useFavorites";

const MODULE_PREFIX = "navbar";

interface NavbarProps {
  logoSrc: string;
  logoUrl: string;
  iconUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoUrl,  
  iconUrl,
}) => {

  const context = useContext(FavoritesContext);
  const favoritesCount = context?.favorites.length;

  return (
    <nav data-testid="test-navbar" className={classes[MODULE_PREFIX]}>
      <div className={classes[`${MODULE_PREFIX}__wrapper`]}>
        <Link data-testid="test-navbar-logo-link" href={logoUrl} className={classes[`${MODULE_PREFIX}__logo-link`]}>
          <Image
            width={122}
            height={44}
            src={logoSrc}
            alt="Imagen marca"
            className={classes[`${MODULE_PREFIX}__logo-link__image`]}
          />
        </Link>
        <Link data-testid="test-navbar-icon-link" href={iconUrl} className={classes[`${MODULE_PREFIX}__icon-link`]}>
          <Image
            width={24}
            height={22}
            src={heartFullIcon}
            alt="Imagen heart"
            className={classes[`${MODULE_PREFIX}__icon-link__image`]}
          />
          <div>
            {favoritesCount}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
