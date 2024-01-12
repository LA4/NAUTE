import { Button } from "../../components/button/Button";
import "/src/components/form/form.css";
import "./addcollection.css";

type addCollectionProps = {
  handleNewCollection: (collection: String) => void;
};
export function AddCollection({ handleNewCollection }: addCollectionProps) {
  const handleChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData: HTMLFormElement = e.currentTarget as HTMLFormElement;
    const form = new FormData(formData);
    let data: String = form.get("collection") as String;
    handleNewCollection(data);
  };

  return (
    <>
      <form
        id="collection-form"
        className="form-container"
        action=""
        style={{ alignItems: "center" }}
        onSubmit={handleChange}
      >
        <div className="form-items">
          <label htmlFor="collection">Votre nom de collection</label>
          <input name="collection" id="collection" maxLength={25} />
          <p className="addCollection-max-length"> 25 caracteres maximum</p>
        </div>
        <Button type="submit" width="250px" active={true}>
          Ajouter la collection
        </Button>
      </form>
    </>
  );
}
