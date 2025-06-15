import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGoogle,
  faAmazon,
  faPaypal,
  faSpotify,
  faMicrosoft,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCreditCard,
  faStore,
  faCoffee,
  faUtensils,
  faGasPump,
  faShoppingBag,
  faFilm,
  faGamepad,
  faMusic,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  apple: faApple,
  payment: faCreditCard,
  ikea: faStore,
  target: faShoppingBag,
  starbucks: faCoffee,
  netflix: faFilm,
  mcdonalds: faUtensils,
  google: faGoogle,
  amazon: faAmazon,
  paypal: faPaypal,
  spotify: faSpotify,
  microsoft: faMicrosoft,
  facebook: faFacebook,
  twitter: faTwitter,
  instagram: faInstagram,
  youtube: faYoutube,
  gas: faGasPump,
  gaming: faGamepad,
  music: faMusic,
  books: faBook,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Icon({
  name,
  size = "md",
  className = "",
}: IconProps): React.ReactElement {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const iconClasses = `${sizeClasses[size]} ${className}`.trim();

  return (
    <div className={`${iconClasses} flex items-center justify-center`}>
      <FontAwesomeIcon icon={iconMap[name]} />
    </div>
  );
}
