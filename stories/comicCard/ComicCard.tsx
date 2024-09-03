"use client";
import React from "react";
import classes from "./comicCard.module.scss";

const MODULE_PREFIX = "comic-card";

export type ComicCardProps = {
  imageSrc: string;
  title: string;
};

const ComicCard: React.FC<ComicCardProps> = ({
  imageSrc,
  title,
}) => {
  return (
    <div className={classes[MODULE_PREFIX]}>
        <img
            src={imageSrc}
            alt="Imagen"
            className={classes[`${MODULE_PREFIX}__image`]}
        />
        <h3 className={classes[`${MODULE_PREFIX}__title`]}>{title}</h3>
    </div>
  );
};

export default ComicCard;
