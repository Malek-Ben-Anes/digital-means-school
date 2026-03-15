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

  let vehicles = VEHICLES.filter((vehicle) =>
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
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => {
          return (
            <tr>
              <td>{vehicle.name}</td>
              <td>{vehicle.category}</td>
              <td>{vehicle.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
