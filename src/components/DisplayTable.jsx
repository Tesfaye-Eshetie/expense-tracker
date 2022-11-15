import { formatCurrency } from "../utilities/formatCurrency";

export default function DisplayTable({ reason, data, name }) {
  let total = 0;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>{reason}</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => (
          <tr key={d.id}>
            <td>{index + 1}</td>
            <td>{d.source ? d.source : d.item}</td>
            <td key={(total += parseInt(d.amount))}>
              {formatCurrency(parseInt(d.amount))}
            </td>
            <td>{d.date}</td>
          </tr>
        ))}
        <tr>
          <th colSpan={2} className="table__text__center">
            Total {name}
          </th>
          <th colSpan={2} className="table__text__center">
            {formatCurrency(total)}
          </th>
        </tr>
      </tbody>
    </table>
  );
}
