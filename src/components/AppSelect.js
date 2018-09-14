import React from "react";

class AppSelect extends React.Component {
  render() {
    const options = this.props.options.map((option, key) => (
      <option key={key}>{option}</option>
    ));
    return (
      <div className="relative">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          {this.props.label}
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
          {options}
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

export default AppSelect;
