import React from "react";
import loginBg from "./assets/background/login.png";
import "./login.css";
type Props = {};

export default function App({}: Props) {
  return <div>{import.meta.env.VITE_TITLE}</div>;
}
