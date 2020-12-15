import React, { Fragment, useState, useEffect } from "react";
import { BookTable, GetTables,CancelTable } from "../actions/tableaction";

import { useSelector, useDispatch } from "react-redux";
import "../App.css";

function Tableinfo({table_position,changecolor, current_table, removecolor }) {
  const AllTables = useSelector(state => state.tables)
  const dispatch = useDispatch();
  useEffect(() => {
    window.onclick = function (event) {
      var modal = document.getElementById("myModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  function close() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  const [FormData, setFormData] = useState({
    table_id: table_position,
    CustomerName: "",
  });

  const onChange = (e) =>
    setFormData({ table_id: table_position, CustomerName: e.target.value });

const cancelTable =()=> {
  dispatch(CancelTable(current_table._id));
  dispatch(GetTables());
  removecolor(current_table.table_id)
}

  return (
    <Fragment>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={close} className="close">
            &times;
          </span>
           {
      current_table ? ( <div>
        <p>table booked by {current_table.CustomerName}</p>
        <p>table id = {table_position}</p>
        <p>no of seats = 4</p>
        <button onClick={ ()=> cancelTable()}>cancel</button>
        </div> ) : ( <div>
          <p>table available</p>
          <p>table id = {table_position}</p>
          <p>no of seats = 4</p>
          <form
            action="submit"
            className="form_container"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(FormData);
              dispatch(BookTable(FormData));
              dispatch(GetTables());
              changecolor()
              setFormData({
                table_id: table_position,
                CustomerName: "",
              })
            }}
          >
            <input
              name=" CustomerName"
              id=" CustomerName"
              onChange={onChange}
              placeholder='name'
              value={FormData.CustomerName}
            ></input>
            <div>
              <button id="book" type="submit">book</button>
            </div>
          </form>
          </div> )
    }
        </div>
      </div>
    </Fragment>
  );
}

export default Tableinfo;
