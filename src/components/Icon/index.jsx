import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({ name, type = 'fas', className, ...otherProps }) {
  return (
    <FontAwesomeIcon icon={[type, name]} className={`icon${className ? ` ${className}` : ''}`} { ...otherProps } />
  );
}

Icon.SOLID = 'fas';
Icon.REGULAR = 'far';

export default Icon;