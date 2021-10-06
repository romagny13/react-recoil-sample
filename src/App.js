import React from "react";
import { RecoilRoot } from "recoil";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <RecoilRoot>
      <Todos />
    </RecoilRoot>
  );
}
