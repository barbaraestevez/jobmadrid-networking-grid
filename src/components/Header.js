import FilterByIndustry from './FilterByIndustry';

const Header = (props) => {
  return (
    <div className='header'>
      {/* <h1 className={`header__title ${props.titleHidden}`}>Bienvenido</h1> */}
      <FilterByIndustry
        data={props.data}
        handleSearchIndustry={props.handleSearchIndustry}
        hidden={props.hidden}
        handleAll={props.handleAll}
        green={props.green}
        handleGreen={props.handleGreen}
      />
      <button className='header__button' onClick={props.handleHidden}>
        {' '}
        Filter{' '}
      </button>
    </div>
  );
};
export default Header;
