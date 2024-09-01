import React from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import heartFullIcon from "../../public/icons/heart-full.svg"
import Image from 'next/image';

const MODULE_PREFIX = "navbar";

interface NavbarProps {
  logoSrc: string;
  logoUrl: string;
  iconUrl?: string;
  count?: number;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoUrl,  
  iconUrl,
  count
}) => {
  return (
    <nav className={classes[MODULE_PREFIX]}>
      <Link href={logoUrl} className={classes[`${MODULE_PREFIX}__logo-link`]}>
        <Image
          width={122}
          height={44}
          src={logoSrc}
          alt="Imagen marca"
          className={classes[`${MODULE_PREFIX}__logo-link__image`]}
        />
      </Link>
      {iconUrl && count &&
        <Link href={iconUrl} className={classes[`${MODULE_PREFIX}__icon-link`]}>
          <Image
            width={24}
            height={22}
            src={heartFullIcon}
            alt="Imagen heart"
            className={classes[`${MODULE_PREFIX}__icon-link__image`]}
          />
          <div>
            {count}
          </div>
        </Link>
      }
    </nav>
  );
};

export default Navbar;
