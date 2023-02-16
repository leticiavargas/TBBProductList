import { useTranslation } from "react-i18next";
import  { SearchInput }  from "components";
import './header.scss';

function Header ({ search, onSearch }) {
  const {t} = useTranslation();

  return (
    <header className="header">
      <h1>{t('what')} <span>{t('lookingFor')}</span></h1>
      <SearchInput icon='magnifying-glass' placeholder={t("searchHere")} value={search} onChange={(e) => onSearch(e.target.value)}  />
    </header>
  )
}

export default Header;