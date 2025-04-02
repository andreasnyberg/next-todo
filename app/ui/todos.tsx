import Todo from "./todo";

export default function Todos() {
  return (
    <>
      <div className="list-group">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>

      <button className="w-100 btn btn-primary btn-lg mt-4">ADD NEW</button>
    </>
  );
}
