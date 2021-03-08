import React from "react";
import { cars } from "../utils/data";

class List extends React.Component {
  state = { showForm: false, cars: cars };

  handleDelete = () => {};

  handleAdd = () => {};

  render() {
    return (
      <div>
        <h2>Cars for Sale</h2>
        <button onClick={this.handleAdd}>Add A Car!</button>
        {cars.map((car) => console.log(car))}
        <h2>Conditionally Render List of Items or Form to Add Car</h2>
      </div>
    );
  }
}

export default List;
