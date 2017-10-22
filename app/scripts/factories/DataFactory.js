"use strict";

app.factory("DataStorage", ($q, $http)=>{
  let getSchoolList = () => {
    let schools = [];
    return $q((resolve, reject)=>{
      $http.get("../../data/schools.json")
      .then((schoolObj)=>{
        resolve(schoolObj.data);
        console.log(schoolObj.data[1]);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };
  return{getSchoolList};
});
