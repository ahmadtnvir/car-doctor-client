import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-8">
        <img src={img} alt={title} className="rounded-xl w-[310px] h-[200px]" />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex items-center justify-between">
          <p className="mr-[160px]">Price: ${price}</p>
          <button className="btn btn-square">
          <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
ServicesCard.propTypes = {
  service: PropTypes.object,
};
export default ServicesCard;
