export default function getEmployeesFromApi() {
  return fetch("https://dt-interviews.appspot.com/")
    .then(results => results.json())
    .catch(err => console.log(err.message));
}
