import checkOut from '../../assets/images/checkout/checkout.png'
const BannerCard = () => {
  return (
    <div className="w-full image-full">
      <figure>
        <img
          src={checkOut}
          alt=""
        />
      </figure>
      {/* <div className="card-body">
        <h2 className="card-title">Check Out</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div> */}
    </div>
  );
};

export default BannerCard;
