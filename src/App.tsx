import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions, Status, User } from "./store";
import TableCell from "./table-cell";
import HeatMap from "react-heatmap-grid";
import UserName from "./user-name";

const backgroundColors = {
  [Status.NONE]: "#ffffff",
  [Status.DONE]: "#00ff00",
  [Status.DELAYED]: "#ff0000",
  [Status.REVIEW]: "#0000ff",
};

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const weekCount = users[0].weeks.length;

  let data = users.map((user: User) => {
    return user.weeks;
  });

  return (
    <div className="no-select">
      <HeatMap
        yLabels={users.map((v: User) => (
          <UserName name={v.name} />
        ))}
        xLabels={new Array(weekCount).fill("KW")}
        yLabelWidth={100}
        yLabelTextAlign={"center"}
        data={data}
        cellRender={(value: number) => <TableCell data={value}></TableCell>}
        cellStyle={(color: any, value: Status) => {
          return {
            margin: 10,
            opacity: 100,
            backgroundColor: backgroundColors[value],
          };
        }}
        title={(value: string, unit: any) => `${value}`}
        onClick={(x: number, y: number) => {
          dispatch(actions.toggleWeek({ userIndex: y, weekIndex: x }));
        }}
      />
    </div>
  );
}

export default App;
