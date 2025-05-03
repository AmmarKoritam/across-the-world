import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

import { useCities } from "../contexts/CitiesProvider";

import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add A new City To Show On The Screen " />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
