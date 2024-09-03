"use client"
import React from "react";
import classes from "./inputFilter.module.scss";
import Image from 'next/image';
import lensIcon from "../../public/icons/lens.svg";

const MODULE_PREFIX = "input-filter";

interface FiltroProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Filtro: React.FC<FiltroProps> = ({
  placeholder = "Buscar...",
  onChange,
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classes[MODULE_PREFIX]}>
      <Image src={lensIcon} width={20} height={20} alt="Ícono de búsqueda" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className={classes[`${MODULE_PREFIX}__text`]}
      />
    </div>
  );
};

export default Filtro;
