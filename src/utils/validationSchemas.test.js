import { newEmployeeSchema } from "./validationSchemas";

test("newEmployeeSchema should correctly validate schema", () => {
  newEmployeeSchema
    .isValid({
      name: "Doe, John",
      job_titles: "Artist",
      employee_annual_salary: "200,000",
      department: "Arts"
    })
    .then(valid => expect(valid).toBe(true));
});
test("newEmployeeSchema should correctly catch invalid schema", () => {
  newEmployeeSchema
    .isValid({
      name: "Doe, John",
      employee_annual_salary: "200,000",
      department: "Arts"
    })
    .then(valid => expect(valid).toBe(false));
});
