"use client";
import React from "react";
import classes from "./comicList.module.scss";
import { ComicProps } from "@/app/core/domain/entities/Comic";
import ComicCard from "@/stories/comicCard/ComicCard";

const MODULE_PREFIX = "comic-list";

export default function ComicList({
  comicList,
}: {
  comicList: ComicProps[];
}) {

  return (
    <div className={classes[MODULE_PREFIX]}>
      <div data-testid="comic-list-slider" className={classes[`${MODULE_PREFIX}__slider`]}>
        {comicList.map((comic, index) => (
          <ComicCard
            key={index}
            title={comic.title}
            imageSrc={comic.imageUrl || ''}
          />
        ))}
      </div>
    </div>
  );
}
