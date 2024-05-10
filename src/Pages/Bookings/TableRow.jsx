const TableRow = ({ booking , handleDelete, handleConfirm}) => {
  const { customerName, img, service, date, price, _id, email, status } = booking;


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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
        {
            status === 'confirm' ? <span className="font-bold text-primary"> Confirmed</span> :
            <button onClick={()=> handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default TableRow;
