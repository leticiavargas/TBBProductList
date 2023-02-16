import { Icon } from 'components';
import './checkbox.scss';

function Checkbox ({ id, value, onChange, checked }) {
  return (
    <div className='checkbox'>
      <input id={id} type="checkbox" value={value} onChange={onChange} checked={checked} />
      <Icon name="square" type="far" className="iddle" />
      <Icon name="square-check" className="checked" />
    </div>
  )
}

export default Checkbox;