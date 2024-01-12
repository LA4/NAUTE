import { Collection } from "../collection/Collection";

type containercollectionProps = {
  title?: String;
};

export function ContainerCollection({ title }: containercollectionProps) {
  return (
    <>
      <Collection>{title}</Collection>
    </>
  );
}
