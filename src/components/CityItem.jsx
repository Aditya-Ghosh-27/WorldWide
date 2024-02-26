import PropTypes from 'prop-types';

function CityItem({city}) {
  return (
    <li>
      {city}
    </li>
  )
}

CityItem.propTypes = {
  city : PropTypes.string
}

export default CityItem
