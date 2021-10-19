import React from "react";

import { Container } from "./components/Container/Container";
import { Feedback } from "./components/Feedback/Feedback";

import s from "components/Container/Container.module.css";

export default function App() {
  return (
    <Container className={s.container}>
      <Feedback />
    </Container>
  );
}
