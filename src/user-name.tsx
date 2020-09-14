import React from "react";

export default function UserName(props: UserProps) {
  return <div>{props.name}</div>;
}
interface UserProps {
  name: string;
}
