import getEmployeesFromApi from "./get-employees-from-api";

test("getEmployeesFromApi should get employees from API", async () => {
  const employees = await getEmployeesFromApi();
  expect(employees.length).toBeGreaterThan(0);
});
