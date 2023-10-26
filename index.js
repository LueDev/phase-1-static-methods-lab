class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(str) {
    // Define a list of exceptions: words that shouldn't be capitalized
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    // Split the string into words and transform each word
    const titleized = str.split(' ').map((word, index) => {
      // Always capitalize the first word or if the word is not in the exceptions list
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    });

    // Join the words back into a string and return
    return titleized.join(' ');
  }
}