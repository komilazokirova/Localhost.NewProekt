function ListingCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p>{props.title} {props.location} {props.price} {props.rating}</p>
    </div>
  );
}

export default ListingCard