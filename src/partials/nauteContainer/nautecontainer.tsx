import { useState } from "react";
import { useHandleCollectionOption } from "../../Hooks/handleCollectionOptions";
import { Button } from "../../components/button/Button";
import { AddCollection } from "../addCollection/AddCollection";
import { ContainerCollection } from "../containerConnection/ContainerConnection";
import "./nautecontainer.css";
export function NauteContainer() {
  const { addCollection, setAddCollection } = useHandleCollectionOption();
  const [collectionTitle, setCollectionData] = useState<String>();
  const handleNewCollection = (collection: String) => {
    setCollectionData(collection);
    setAddCollection(!addCollection);
  };
  return (
    <>
      <div className="naute-container">
        <Button
          width="200px"
          height="29px"
          fontSize=".9rem"
          fontWeight="600"
          active={!addCollection}
          onClick={() => setAddCollection(!addCollection)}
        >
          ajouter une collection
        </Button>
        {addCollection && (
          <AddCollection
            handleNewCollection={handleNewCollection}
          ></AddCollection>
        )}
        <ContainerCollection title={collectionTitle}></ContainerCollection>
      </div>
    </>
  );
}
