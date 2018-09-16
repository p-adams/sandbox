export default function getSingleEmployeeFromApi(employeeId) {
  return fetch(`https://dt-interviews.appspot.com/${employeeId}`)
    .then(results => results.json())
    .catch(err => console.log(err.message));
}
