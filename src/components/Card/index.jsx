import './card.scss';

function Card ({ product }) {

  const { alt, asset } = product.images[0];

  return(
    <figure className="card" title={product.shortDescription}>
      <img alt={alt} src={asset.url} />
      <figcaption>{ product.name }</figcaption>
    </figure>
  )
}

export default Card;