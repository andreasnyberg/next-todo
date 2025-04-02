export default function Todo() {
  return (
    <label className="list-group-item d-flex gap-3 justify-between items-center">
      <div>
        <input type="checkbox" className="form-check-input flex-shrink-0" />
        <span className="pt-1 form-checked-content ml-3">
          <strong>hej</strong>
        </span>
      </div>

      <div className="flex gap-3">
        <button className="btn btn-sm btn-primary">edit</button>
        <button className="btn btn-sm btn-danger">X</button>
      </div>
      {/* <input type="text" className="form-control" /> */}
      {/* <button className="w-100 btn btn-primary btn-lg mt-4">ADD</button> */}
    </label>
  );
}
