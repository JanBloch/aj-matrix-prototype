import React from "react";
import { Status } from "./store";

export default function TableCell(props: { data: number }) {
  return <>{Status[props.data]}</>;
}
