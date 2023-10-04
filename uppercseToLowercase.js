function charToLower(char) {
    return char.toLowerCase();
  }
  
  function wordToLower(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      result += charToLower(word[i]);
    }
    return result;
  }
  
  function arrayToLower(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(wordToLower(arr[i]));
    }
    return result;
  }
  
  const inputArray = ["MA", "SA", "I", "SCH", "OOL"];
  
  const outputArray = arrayToLower(inputArray);
  
  console.log(outputArray);
  
  const inputChar = "S";

  const outputChar = charToLower(inputChar);

  console.log(outputChar);

  const inputWord = "SHIVAM";

  const outputW