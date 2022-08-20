function scuberGreetingForFeet(distanceInFeet){
  let result;
  if(distanceInFeet<=400){
   result="This one is on me!"
   return result;
}
else if(distanceInFeet >=2000 && distanceInFeet<2500){
  result="I will gladly take your thirty bucks."
  return result;
} 
else result="No can do."
return result;
}
console.log(scuberGreetingForFeet(3000));


function ternaryCheckCity(city){
let result;
result=city=="NYC"?"Ok, sounds good.":"No go.";
return result;
}

ternaryCheckCity("NYC");

function switchOnCharmFromTip (typeOfTip){
  switch (typeOfTip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}

switchOnCharmFromTip("generous");