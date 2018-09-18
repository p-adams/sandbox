export default function addNewEmployeeToDb(employee) {
  return fetch("https://dt-interviews.appspot.com/", {
    method: "POST",
    body: JSON.stringify(employee)
  })
    .then(result => result.json())
    .catch(err => console.log(err));
}
