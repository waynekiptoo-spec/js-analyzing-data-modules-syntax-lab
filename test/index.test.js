require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = { combineUsers };