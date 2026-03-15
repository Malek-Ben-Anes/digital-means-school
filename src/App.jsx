import { useState } from "react";
import { InputText } from "./seance3/components/InputText";
import { CheckBox } from "./seance3/components/CheckBox";
import { VEHICLES } from "./seance4/vehicules";

function App() {
  return <VehicleContent />;
}

function VehicleContent() {
  const [searchText, setSearchText] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  let vehicles = VEHICLES.sort((v1, v2) =>
    v1.category.localeCompare(v2.category),
  ).filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (isAvailable) {
    vehicles = vehicles.filter((vehicle) => vehicle.available);
  }

  return (
    <div>
      <form>
        <InputText
          text="Recherche"
          value={searchText}
          onChange={setSearchText}
        />
        <CheckBox
          text="Vehicules sont disponibles"
          value={isAvailable}
          onChange={setIsAvailable}
        />
      </form>
      <VehicleTable vehicles={vehicles} />
    </div>
  );
}

function VehicleTable({ vehicles }) {
  let currentCategory = undefined;

  /*
    const arr1 = [1, 1, 1, 4, 4, 4, 2, 2, 3, 3, 3]
    let currentElement = 3
    const result = [1, 4, 2, 3];
  */
  const displayCategory = (vehicle) => {
    if (vehicle.category !== currentCategory) {
      currentCategory = vehicle.category;
      return (
        <tr>
          <td colspan="2" style={{ color: "red" }}>
            {vehicle.category}
          </td>
        </tr>
      );
    }

    return null;
  };

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        ;
        {vehicles.map((vehicle) => {
          return (
            <>
              {displayCategory(vehicle)}
              <tr>
                <td>{vehicle.name}</td>
                <td>{vehicle.price}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
