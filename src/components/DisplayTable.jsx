import { formatCurrency } from "../utilities/formatCurrency";
import Table from "react-bootstrap/Table";

export default function DisplayTable({ name, data }) {
  return (
    <Table hover className="table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>{name}</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => (
          <tr key={d.id}>
            <td>{index + 1}</td>
            <td>{d.source ? d.source : d.item}</td>
            <td>{formatCurrency(parseInt(d.amount))}</td>
            <td>{d.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
