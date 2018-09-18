import React from "react";
import PropTypes from "prop-types";

class AppSelect extends React.Component {
  handleAppSelect = e => {
    const { handleChange } = this.props;
    handleChange(e);
    // remove focus from select element to re-enable keyboard navigation
    this.selectEl.blur();
  };
  render() {
    const { doesFilter, label, options, value } = this.props;
    const selectOptions = options.map((option, key) => (
      <option key={key} value={option} label={option}>
        {option}
      </option>
    ));
    return (
      <div className="relative">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          {label}
        </label>
        <select
          ref={selectEl => (this.selectEl = selectEl)}
          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
          value={value}
          onChange={this.handleAppSelect}
        >
          <option>{doesFilter ? "SHOW ALL" : "SELECT ONE"}</option>
          {selectOptions}
        </select>
        <div className="pointer-events-none absolute pin-y pin-r mt-6 flex items-center px-2 text-grey-darker">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );
  }
}

AppSelect.proptypes = {
  doesFilter: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired
};

export default AppSelect;
