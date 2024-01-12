import { useState } from "react";
// type useHandleCollectionOptionProps = {
//   activeNote?: boolean | undefined;
// };
export function useHandleCollectionOption() {
  const [activeNote, setActiveNote] = useState<Boolean>(false);
  const [addCollection, setAddCollection] = useState<Boolean>(false);
  // const [activeCollection, setActiveCollection] = useState<Boolean>(
  //   !activeNote
  // );
  return {
    activeNote,
    addCollection,
    setActiveNote,
    setAddCollection,
  };
}
