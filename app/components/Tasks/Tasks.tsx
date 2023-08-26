import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

interface TaskInterface {
  _id: string;
  name: string;
}

const IndexTable = ({}) => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const fetchTasks = async () => {
    await axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}list-tasks`,
      method: "GET",
    })
      .then(({ data }) => {
        setTasks(data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const rowSelection = (
    rowsSelectedData: any,
  ) => {
    const row = tasks[rowsSelectedData[0]["dataIndex"]]._id;
    setSelectedRows([...selectedRows, row]);
  };

  const deleteRows = async () => {
    await axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}tasks/bulk`,
      method: "DELETE",
      data: selectedRows,
    })
      .then(({ data }) => {
        fetchTasks();
      })
      .catch((err) => {});
  };

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    searchable:false,
    download:false,
    print:false,
    sortFilterList:false,
    filter: false,
    viewColumns:false,
    onRowSelectionChange: rowSelection,
    onRowsDelete: deleteRows,
  };
  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: 600, width: "50%", margin: "auto" }}
      >
        <MUIDataTable
          title={"Task List"}
          data={tasks}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
};
export default IndexTable;
