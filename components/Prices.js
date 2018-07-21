import PropTypes from 'prop-types';

class Prices extends React.Component {
  state = {
    currency: 'USD'
  };

  render() {
    const { bpi } = this.props;
    const data = bpi[this.state.currency];

    const selectOptions = Object.keys(bpi).map(item => {
      return (
        <option key={item} value={item}>{item}</option>
      );
    });

    return (
      <div>
        <ul className="list-group">
          <li className='list-group-item'>
            Bitcoin rate for {data.description}:
            <span className="badge badge-primary">{data.code}</span>
            <strong>{data.rate}</strong>
          </li>
        </ul>

        {/* In the onChange handler, I'm using the "setState(function)"
         signature for practice (but its not really necessary in this case).
         I had to create an extra function closure in order for the value of
         "e.target" to actually work when React calls my passed-in function
         for setState().
         */}
        <select
          className='form-control'
          onChange={e => {
              const updateFunc = ((newCurrency) => {
                return (prevState, props) => {
                  return {...prevState, currency: newCurrency};
                }
              })(e.target.value);

              this.setState(updateFunc);
            }
          }>
          { selectOptions }
        </select>

        <style jsx>{`
            .badge {
              margin: 0 4px 0 8px;
            }
            .form-control {
              margin-top: 16px;
            }
        `}</style>

      </div>
    );
  }
}

Prices.propTypes = {
  bpi: PropTypes.object.isRequired
};


export default Prices;
