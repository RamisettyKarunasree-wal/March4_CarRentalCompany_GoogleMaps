const Employees = () => {
  const employees = require("./employees.json");
  return (
    <div className="item">
      <h1>Total Employees</h1>
      <table>
        <tr>
          <th>Employee Name</th>
          <th>Location</th>
        </tr>
        {employees.map((val) => {
          return (
            <tr>
              <td>{val.name}</td>
              <td>{val.loc}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Employees;
