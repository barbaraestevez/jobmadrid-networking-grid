import FilterByIndustry from './FilterByIndustry';

const Header = (props) => {
  return (
    <div className='header'>
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
