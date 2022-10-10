function rot13(str) {
    const rot13 = {
      'N': "A",
      'O': 'B',
      'P': 'C',
      'Q': 'D',
      'R': 'E',
      'S': 'F',
      'T': 'G',
      'U': 'H',
      'V': 'I',
      'W': 'J',
      'X': 'K',
      'Y': 'L',
      'Z': 'M',
      'A': 'N',
      'B': 'O',
      'C': 'P',
      'D': 'Q',
      'E': 'R',
      'F': 'S',
      'G': 'T',
      'H': 'U',
      'I': 'V',
      'J': 'W',
      'K': 'X',
      'L': 'Y',
      'M': 'Z'
    }
    const splitStr = str.split(' ').map(string => {
      return string.split('').map(string => rot13[string] === undefined ? string : rot13[string]).join('');
    }).join(' ');
      return splitStr;
} 