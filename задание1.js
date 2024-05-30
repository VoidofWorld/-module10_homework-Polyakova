let nomber = +prompt ("введите число");
if (typeof nomber !== "number") {
 console.log('Упс, кажется, вы ошиблись');
}
else if ( isNaN(nomber % 2)){
  console.log('Упс, кажется, вы ошиблись');
}
else if (nomber % 2 === 0){
  console.log('четное');
}
else {
  console.log('не четное');
}
