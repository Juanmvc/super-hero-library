"use client";
import React from "react";
import classes from "./heroCard.module.scss";
import Image from 'next/image';
import heartFullIcon from "../../public/icons/heart-full.svg";
import heartEmptyIcon from "../../public/icons/heart-empty.svg";
import Link from "next/link";

const MODULE_PREFIX = "hero-card";

export type HeroCardProps = {
  imageSrc: string;
  title: string;
  url: string;
  favorite: boolean;
  onFavoriteToggle: () => void;
};

const HeroCard: React.FC<HeroCardProps> = ({
  imageSrc,
  title,
  url,
  favorite = false,
  onFavoriteToggle,
}) => {

  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onFavoriteToggle();
  };

  return (
    <Link className={classes[MODULE_PREFIX]} href={url}>
      <div className={classes[`${MODULE_PREFIX}__image-wrapper`]}>
        <img
          src={imageSrc}
          alt="Imagen"
          className={classes[`${MODULE_PREFIX}__image`]}
        />
      </div>
      <div className={classes[`${MODULE_PREFIX}__title-container`]}>
        <h3 className={classes[`${MODULE_PREFIX}__title`]}>{title}</h3>
        <div onClick={handleIconClick} className={classes[`${MODULE_PREFIX}__icon-container__${favorite ? 'full' : 'empty'}`]}>
          <Image width={12} height={12} src={favorite ? heartFullIcon : heartEmptyIcon} alt="Icon description"/>
        </div>      
      </div>
    </Link>
  );
};

export default HeroCard;
