import  { SearchInput }  from "components";
import './header.scss';

function Header ({ search, setSearch }) {
  return (
    <div className="header">
      <h1>O que você <span>está procurando?</span></h1>
      <SearchInput icon='magnifying-glass' placeholder='busque aqui' value={search} onChange={(e) => setSearch(e.target.value)}  />
    </div>
  )
}

export default Header;