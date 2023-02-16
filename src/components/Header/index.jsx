import { useTranslation } from "react-i18next";
import  { SearchInput }  from "components";
import './header.scss';

function Header ({ search, setSearch }) {
  const {t} = useTranslation();

  return (
    <header className="header">
      <h1>{t('what')} <span>{t('lookingFor')}</span></h1>
      <SearchInput icon='magnifying-glass' placeholder={t("searchHere")} value={search} onChange={(e) => setSearch(e.target.value)}  />
    </header>
  )
}

export default Header;