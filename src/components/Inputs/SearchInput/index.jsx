import { Icon } from 'components';
import './searchInput.scss';

function SearchInput({ icon, iconType, className, style, ...otherProps }) {

  return (
    <div className={`search-input${className ? ` ${className}` : ''}`}>
      <input { ...otherProps } />
      {icon?.length && <Icon name={icon} type={iconType} className="right-icon" />}
    </div>
  )
}

export default SearchInput