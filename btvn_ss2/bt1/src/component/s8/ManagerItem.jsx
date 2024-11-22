
export default function ManagerItem({ item }) {
  return (
    <tr>
    <td className="pl-4">{item.id}</td>
    <td>
      <h6 className="font-medium mb-0">{item.name}</h6>
    </td>
    <td>
      <span className="text-muted">{item.age}</span>
      <br />
      <span className="text-muted">Past : teacher</span>
    </td>
    <td>
      <span className="text-muted">{item.email}</span>
      <br />
    </td>
    <td>
      <span className="text-muted">{item.dataofbirth}</span>
      <br />
    </td>
    <td>
      <select
        className="form-control category-select"
        id="exampleFormControlSelect1"
      >
        <option>Modulator</option>
        <option>Admin</option>
        <option>User</option>
        <option>Subscriber</option>
      </select>
    </td>
    <td>
      <button
        type="button"
        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
      >
        <i className="fa fa-trash" />{" "}
      </button>
      <button
        type="button"
        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
      >
        <i className="fa fa-edit" />{" "}
      </button>
    </td>
  </tr> 
    )
}
