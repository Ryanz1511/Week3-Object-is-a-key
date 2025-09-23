function changeMe(arr) {
  if (arr==='') {
    return ''
  }
  let bio = []

  for (let i = 0; i < arr.length; i++) {
    let obj = {
      FirstName:arr[i][0],
      LastName:arr[i][1],
      Gender:arr[i][2],
      age:arr[i][3]?2025-arr[i][3]:`Invalid Birth Year`,
    }

    bio.push(obj)
  }
 
  return bio

}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])) // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',

//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

console.log(changeMe([])); // ""