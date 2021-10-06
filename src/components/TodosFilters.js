import React from "react";
import { useRecoilState } from "recoil";
import { todosFilterState } from "../atoms/todos";

export default function TodosFilters() {
  const [filter, setFilter] = useRecoilState(todosFilterState);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className="row">
      <label className="col-form-label">Filter:</label>
      <div class="col-auto">
        <select
          className="form-select form-select-sm"
          value={filter}
          onChange={handleChange}
        >
          <option value="Show all">All</option>
          <option value="Show dones">Dones</option>
          <option value="Show remaining">Remaining</option>
        </select>
      </div>
    </div>
  );
}
