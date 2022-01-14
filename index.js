class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let wordArr = string.split(" ");
    let noWordsArr = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"];

    for (let i = 0; i < wordArr.length; i++) {
      if (!noWordsArr.includes(wordArr[i])) {
        wordArr[i] = this.capitalize(wordArr[i]);
      }
    }
    return this.capitalize(wordArr.join(" "));
  }
}
