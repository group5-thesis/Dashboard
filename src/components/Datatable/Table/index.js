import React, { useState, useMemo, useEffect } from "react";
import { mdiDeleteCircle, mdiCircleEditOutline } from "@mdi/js";
import Icon from "@mdi/react";
import TableHeader from "../Header";
// import { colors } from "assets/theme";
const Table = ({
  headers,
  data,
  currentPage,
  search,
  itemsPerPage,
  actions = [],
}) => {

  const [sorting, setSorting] = useState({ field: "", order: "" });
  const initData = useMemo(() => {
    let computedData = data;
    computedData = computedData.filter((_data) => {
      // if (search.key) {
      // let fields = search.field;
      // if (fields.length === 0) {
      //   fields = Object.keys(_data);
      // }
      // for (let i = 0; i < fields.length; i++) {
      //   let field = fields[i].toLowerCase();
      //   if ((_data[field]).toString().toLowerCase().includes(search.key.toLowerCase())) {
      //     return true;
      //   }
      // }
      // }
      return _data.name.toLowerCase().includes(search.key);

    });
    //Sorting data
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedData = computedData.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computedData.slice(
      (currentPage - 1) * itemsPerPage,
      (currentPage - 1) * itemsPerPage + itemsPerPage
    );

  }, [data, currentPage, search, sorting, itemsPerPage]);

  function renderActions(data) {
    if (actions.length) {
      return (
        <td
          key={"actions." + data.id}
          style={{ width: "1%", whiteSpace: "nowrap" }}
        >
          {actions.map((action, idx) => {
            let isEdit = action.type.toLowerCase() === "edit";
            return (
              <button
                className={`button is-small  is-outlined mr-2 ml-2`}
                key={`btn.${action.type}.${data.id}`}
                onClick={() => {
                  let payload = data.id;
                  if (isEdit) {
                    payload = data;
                  }
                  action.callback(payload);
                }}
              >
                <span
                  className="icon is-small"
                  key={`icon.${action.type}.${idx}`}
                >
                  <Icon
                    key={`mdi.${action.type}.${idx}`}
                    path={isEdit ? mdiCircleEditOutline : mdiDeleteCircle}
                    size={1}
                  />
                </span>
                <span key={`label.${action.type}.${idx}`}>{action.name}</span>
              </button>
            );
          })}
        </td>
      );
    }
  }

  return (
    <>
      <div>
        <table className="table is-hoverable ">
          <TableHeader
            headers={headers}
            onSorting={(field, order) => setSorting({ field, order })}
          />
          <tbody>
            {initData.map((data, id) => {
              return (
                <tr key={id} >
                  {Object.keys(data).map(function (key, idx) {
                    if (!headers[idx].hidden) {
                      return <td className="has-text-center" key={idx}>{data[key]}</td>;
                    } return null

                  })}
                  {renderActions(data)}
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
