import "./App.css";
import { Dice } from "./components/Dice";
import { Container, Row, Col, Button } from "reactstrap";
import { useState } from "react";

function App() {
  const [dicesValues, setDicesValues] = useState(Array(5).fill(1));
  const [isSelected, setIsSelected] = useState(Array(5).fill(true));
  const [countRollDices, setCountRollDices] = useState(Array(5).fill(0));
  const [countRoll, setCountRoll] = useState(0);

  const handleRollClick = () => {
    setDicesValues(
      dicesValues.map((value, index) => {
        return isSelected[index] ? Math.floor(Math.random() * 6) + 1 : value;
      })
    );
    setCountRollDices(
      countRollDices.map((count, index) => {
        return isSelected[index] ? count + 1 : count;
      })
    );
    isSelected.includes(true)
      ? setCountRoll(countRoll + 1)
      : setCountRoll(countRoll);
  };

  const handleDiceClick = (index) => {
    setIsSelected([
      ...isSelected.slice(0, index),
      !isSelected[index],
      ...isSelected.slice(index + 1),
    ]);
  };

  let dices = dicesValues.map((value, index) => (
    <Dice
      value={value}
      countRoll={countRollDices[index]}
      index={index}
      handleDiceClickParent={handleDiceClick}
      isSelected={isSelected[index]}
    />
  ));

  return (
    <Container>
      <Row className="mb-5">
        <Col className="d-flex justify-content-center">
          <Button
            onClick={handleRollClick}
            style={{ backgroundColor: "#212529", color: "#D3FBD8" }}
          >
            <h2>Roll n° {countRoll}</h2>
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold">{dicesValues.reduce((a, b) => a + b)}</h2>
          <h2 className="fw-bold">
            {dicesValues.reduce((a, b) => a + b) === 30 ? "Bravo!!!" : ""}
          </h2>
        </Col>
      </Row>

      <Row className="justify-content-center">{dices}</Row>
    </Container>
  );
}

export default App;
