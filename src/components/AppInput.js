import React from "react";
import PropsTypes from "prop-types";

const AppInput = props => {
  return (
    <React.Fragment>
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight focus:outline-blue focus:bg-grey-light"
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};

AppInput.propTypes = {
  name: PropsTypes.string,
  label: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
  handleChange: PropsTypes.func.isRequired,
  placeholder: PropsTypes.string
};

export default AppInput;
