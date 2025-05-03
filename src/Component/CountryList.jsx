import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

import { useCities } from "../contexts/CitiesProvider";

import styles from "./CountryList.module.css";

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add A new City To Show On The Screen " />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((element) => element.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: flagemojiToPNG(city.emoji) },
      ];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
