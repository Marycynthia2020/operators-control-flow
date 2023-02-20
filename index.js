// this is the code for question 4

for (let i = 1; i < 20; i+=7) {
    console.log(i)
}

// this is question 3

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";
 
function selectSubject(classGroup) {

  if (classGroup === 'science') {
    return scienceSubjects + ', ' + generalSubjects;
  } else if (classGroup === 'socialScience') {
    return socialScienceSubjects + ', ' + generalSubjects;;
  } else if (classGroup === 'arts') {
    return artsSubjects + ', ' + generalSubjects;;
  } else {
    return generalSubjects
  }
   
}

console.log(selectSubject('arts'))


// this is the question 5

function closestNumber(num) {
  let divisor = 2;
  let count = 0; 
  let divisible = num
  while (divisible >=  divisor) {
   divisible /= divisor
   count ++ 
  } 
  let pwr1 = 2 ** count
  let pwr2 = 2 **(count + 1)
  if(num - pwr1 < pwr2 - num || (num - pwr1 === pwr2 - num)){
    console.log('The number ' + pwr1 + ' is the power of 2 nearest to ' + num)
  }
   else {console.log('The number ' + pwr2 + ' is the power of 2 nearest to ' + num)
}
}

closestNumber(50)

