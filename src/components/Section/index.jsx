import './section.scss';

function Section({ title, className, style, children, ...otherProps }) {
  return (
    <div className={`section${className ? ` ${className}` : ''}`}>
      { title?.length && <header>{title}</header> }
      <div>
        {children}
      </div>
    </div>
  )
}

export default Section;