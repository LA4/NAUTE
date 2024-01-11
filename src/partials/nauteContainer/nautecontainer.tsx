import { Button } from "../../components/button/Button";
import { Collection } from "../collection/Collection";
import "./nautecontainer.css";
export function NauteContainer() {
  return (
    <>
      <div className="naute-container">
        <Button
          width="250px"
          height="29px"
          fontSize=".9rem"
          fontWeight="600"
          active={true}
        >
          ajouter une collection
        </Button>
        <div className="naute-collection-container">
          <Collection></Collection>
          <Collection></Collection>
          <Collection></Collection>
        </div>
      </div>
    </>
  );
}
