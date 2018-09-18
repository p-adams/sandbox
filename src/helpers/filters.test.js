import { filteredEmployees } from "./filters";
import getEmployeesFromApi from "../utils/get-employees-from-api";

test("filteredEmployees correctly filters employees by department", async () => {
  const employees = await getEmployeesFromApi();
  expect(
    filteredEmployees(employees, "department", ["POLICE"]).length
  ).toBeGreaterThan(0);
});
