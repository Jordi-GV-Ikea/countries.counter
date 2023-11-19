import "./styles.css";
const counterGrapgh = (amount: number) => {
  let total = "";
  for (let x = 0; x < amount; x = x + 1) {
    total += "*";
  }
  return total;
};
export default function App() {
  const countriesCounter: Record<string, number> = {
    "New Zealand": 8,
    Netherlands: 5,
    India: 11,
    Serbia: 3,
    Denmark: 6,
    Mexico: 5,
    Australia: 9,
    Norway: 4,
    Turkey: 2,
    Brazil: 7,
    Germany: 6,
    Ukraine: 5,
    "United Kingdom": 3,
    Spain: 6,
    Finland: 4,
    Iran: 2,
    France: 4,
    Canada: 2,
    "United States": 2,
    Ireland: 2,
    Switzerland: 4
  };
  const countries = Object.keys(countriesCounter);
  const values = Object.values(countriesCounter);
  console.log(values);
  console.log(countriesCounter);
  return (
    <div className="App">
      {countries.map((country) => {
        const counter = countriesCounter[country];
        return (
          <div key={country} className="country">
            <div className="country-graph">{counterGrapgh(counter)}</div>
            <div className="country-name">
              {country}: {counter}
            </div>
          </div>
        );
      })}
    </div>
  );
}
