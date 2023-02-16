import './card.scss';

function Card ({ product }) {

  const { alt, asset } = product.images[0];

  return(
    <div className="card">
      <img alt={alt} src={asset.url} />
      <span>{ product.name }</span>
    </div>
  )
}

export default Card;