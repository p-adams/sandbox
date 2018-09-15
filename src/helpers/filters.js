// A generic function to allow for extended filtering beyond
// department filter
export function filteredEmployees(employees, filterBy, filters) {
  const filteredResults = employees.filter(employee =>
    filters.some(
      filter =>
        filter !== "SHOW ALL" ? employee[filterBy] === filter : employee
    )
  );
  return filteredResults;
}
