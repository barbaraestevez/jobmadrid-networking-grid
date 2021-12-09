const FilterByIndustry = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchIndustry(ev.currentTarget.value);
  };
  const industry = props.data.map((data) => {
    return (
      <li>
        <input
          type='button'
          value={data.industry}
          key={data.id}
          onClick={handleInputChange}
          className={`listButtons__buttons ${props.green}`}
        />
      </li>
    );
  });
  return (
    <>
      {' '}
      <ul className={`listButtons ${props.hidden}`}>
        <li>
          <input
            type='button'
            value='all'
            onClick={props.handleAll}
            className='listButtons__buttons'
          />
        </li>
        {industry}{' '}
      </ul>
    </>
  );
};
export default FilterByIndustry;
