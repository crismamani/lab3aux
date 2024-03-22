(() => {

  /* Excercises */

  /* First excercise */
  
 // let numbers = [1, 2, 3, 4, 5];
  /* Multiplique los numeros del arreglo por 5 */
  let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 5;
}
console.log(arr);
  /*Resultado esperado: [5, 10, 15, 20, 25] */
  /* First excercise */
  /* Second excercise */
  //let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
  let words = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
words.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
console.log(words);
  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  //let letters = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  let myArray = ['a', 'b', 'z', 'r', 'a','c', 'r', 'a'];
  let uniqueArray = [...new Set(myArray)]
  console.log('Array with unique values = ', uniqueArray);

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  //const largeWord = "abcdabcdABCD";
  function numberOfCharacters(string) {
    let objeto = {}
    for (let i = 0; i < string.length; i++) {
        objeto[string[i]] = ++objeto[string[i]] || 1;
    }
    return objeto 
  }
  console.log(numberOfCharacters("abcdabcdABCD"));
  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
