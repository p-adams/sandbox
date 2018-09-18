import * as yup from "yup";
// A utility for validating that the NewEmployeeForm fields conform to
// the required spec document in server.py in the docs
export const newEmployeeSchema = yup.object().shape({
  name: yup.string().required(),
  job_titles: yup.string().required(),
  employee_annual_salary: yup
    .number()
    .required()
    .positive(),
  department: yup.string().required()
});
