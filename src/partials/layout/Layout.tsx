import { Navbar } from "../header/Navbar";

type ComponentsProps = {
  children: JSX.Element;
};
export function Layout({ children }: ComponentsProps) {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  );
}
