import './section.scss';

function Section({ title, className, style, children, ...otherProps }) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`} {...otherProps}>
      { title?.length && <header>{title}</header> }
      {children}
    </section>
  )
}

export default Section;