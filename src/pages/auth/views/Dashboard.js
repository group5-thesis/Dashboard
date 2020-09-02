import React from "react";
// import { useHistory } from "react-router-dom";
// import { ActionTypes, actionCreator } from "app_utils/actions";
// import { connect } from "react-redux";
import Datatable from "components/Datatable";
import Modal from "components/Modal";
import { Tile } from "components/Card";
import { mdiAccountGroupOutline, mdiClockOutline, mdiAccountMultipleRemoveOutline, mdiClipboardListOutline } from "@mdi/js";
import { colors } from "assets/theme"

export default function Dashboard(props) {
  const headers = [
    // { name: "No#", field: "id", sortable: false, hidden: true },
    { name: "Name", field: "name", sortable: true },
    { name: "Email", field: "email", sortable: true },
    { name: "Comment", field: "body", sortable: false },
    // { name: "Action", field: "", sortable: false },
  ];
  // let data = Array(3)
  //   .fill()
  //   .map((el, i) => {
  //     i = i;
  //     return {
  //       id: i,
  //       name: "name" + i,
  //       email: "email" + i * 444,
  //       body: "body" + i,
  //     };
  //   });


  let data = [
    { "name": "yol", "email": "bes", "body": "pren" },
    { "name": "bes", "email": "yol", "body": "test" },
    { "name": "name2", "email": "email888", "body": "yol" }];
  let deleteRow = (id) => {
    alert(id);
  };
  let editRow = (payload) => {
    alert(JSON.stringify(payload));
  };
  let actions = [
    { type: "edit", name: "Update", callback: editRow },
    { type: "delete", name: "Delete", callback: deleteRow },
  ];
  return (
    <div className="section">
      <div className="tile is-ancestor">
        <Tile {...{
          title: "Total Employee",
          subtitle: "15",
          icon: {
            path: mdiAccountGroupOutline,
            size: 3,
            color: colors.blue
          }
        }} />
        <Tile {...{
          title: "On Duty",
          subtitle: "10",
          icon: {
            path: mdiClockOutline,
            size: 3,
            color: colors.green
          }
        }} />
        <Tile {...{
          title: "On Leave",
          subtitle: "0",
          icon: {
            path: mdiAccountMultipleRemoveOutline,
            size: 3,
            color: colors.red
          }
        }} />
        <Tile {...{
          title: "On Going Task",
          subtitle: "20",
          icon: {
            path: mdiClipboardListOutline,
            size: 3,
            color: colors.orange
          }
        }} />
      </div>

      <Datatable {...{ data, headers, title: "MY DATATABLE" }} />
      <Modal label="Toggle Modal"></Modal>
    </div>
  );
}