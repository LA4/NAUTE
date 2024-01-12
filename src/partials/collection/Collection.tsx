import "./collection.css";
type collectionProps = {
  children?: React.ReactNode;
};
export function Collection({ children }: collectionProps) {
  return (
    <div className="collection-container">
      <div className="collection-item-container">
        <span className="title-collection">{children}</span>
      </div>
    </div>
  );
}
