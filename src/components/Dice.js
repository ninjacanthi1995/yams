import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import { Col } from "reactstrap";

export function Dice(props) {
  const icons = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  const handleClick = () => {
    props.handleDiceClickParent(props.index);
  };

  let dice = (
    <FontAwesomeIcon
      onClick={handleClick}
      icon={icons[props.value - 1]}
      style={{ width: "10rem", height: "10rem", cursor: "pointer", border: !props.isSelected ? '1px solid red' : '' }}
    />
  );

  return (
    <Col xs="6" md="4" lg="2">
      <div className="d-flex flex-column align-items-center">
        {dice}
        <h2 tag="h5">({props.countRoll})</h2>
      </div>
    </Col>
  );
}
