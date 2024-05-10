const TableRow = ({ booking }) => {
  const { customerName, img, service, date, price, _id, email } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {img ? (
                <img src={img} alt="" />
              ) : (
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{_id}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {service}
        <br />
        <span className="badge badge-ghost badge-sm">{date}</span>
      </td>
      <td>{"$" + price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default TableRow;
