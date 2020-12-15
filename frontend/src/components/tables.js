import React, { Fragment, useState, useEffect } from "react";
import Tableinfo from "./tableinfo";
import { GetTables } from "../actions/tableaction";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";

function Tables() {
  const AllTables = useSelector((state) => state.tables);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(GetTables());
  }, [GetTables]);

  const [table_position, settable_position] = useState();
  const [current_table, setcurrent_table] = useState();
  const dispatch = useDispatch();

  const changecolor = () => {
    for (let i = 0; i < AllTables.length; i++) {
      document
        .getElementById(AllTables[i].table_id)
        .classList.remove("clicked_table");
      document
        .getElementById(AllTables[i].table_id)
        .classList.add("booked_table");
      document.getElementById(AllTables[i].table_id).innerHTML = "booked";
    }
  };

  const removecolor = (id) => {
    document.getElementById(id).classList.remove("booked_table");
  };

  loading && AllTables.length === 0 ? console.log("loading") : changecolor();

  const ClickedTable = (e) => {
    settable_position(e.target.id);

    let isChange = AllTables.find((table) => table["table_id"] == e.target.id);
    if (!isChange) {
      document.getElementById(e.target.id).classList.toggle("clicked_table");
    }
    const isbooked = AllTables.filter((table) => table.table_id == e.target.id);
    isbooked.length === 1 ? console.log(isbooked) : console.log("not booked");
    if (isbooked.length === 1) {
      setcurrent_table(isbooked[0]);
    } else {
      setcurrent_table("");
    }
    open();
  };

  const tables = [0, 1, 2, 3, 4, 5];
  function open() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  return (
    <Fragment>
      <h1 style={{ textAlign: "center", margin: "0" }}>welcome</h1>
      <div className="main_container">
        <div className="table_container">
          {tables.map((table) => (
            <div
              id={table}
              key={table}
              className="table"
              onClick={(e) => {
                ClickedTable(e);
              }}
            >
              not booked
            </div>
          ))}
        </div>
        <Tableinfo
          table_position={table_position}
          current_table={current_table}
          changecolor={changecolor}
          removecolor={removecolor}
        />
      </div>
    </Fragment>
  );
}

export default Tables;
