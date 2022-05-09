const keysData = [
  {
    code: 'Backquote',
    en: '`',
    enShift: '~',
    ru: 'ё',
    ruShift: 'Ё',
    ruCaps: 'Ё',
    ruCapsShift: 'ё',
    enCaps: '`',
    enCapsShift: '~',
  },
  {
    code: 'Digit1',
    en: '1',
    enShift: '!',
    ru: '1',
    ruShift: '!',
    ruCaps: '1',
    ruCapsShift: '!',
    enCaps: '1',
    enCapsShift: '!',
  },
  {
    code: 'Digit2',
    en: '2',
    enShift: '@',
    ru: '2',
    ruShift: '"',
    ruCaps: '2',
    ruCapsShift: '"',
    enCaps: '2',
    enCapsShift: '@',
  },
  {
    code: 'Digit3',
    en: '3',
    enShift: '#',
    ru: '3',
    ruShift: '№',
    ruCaps: '3',
    ruCapsShift: '№',
    enCaps: '3',
    enCapsShift: '#',
  },
  {
    code: 'Digit4',
    en: '4',
    enShift: '$',
    ru: '4',
    ruShift: ';',
    ruCaps: '4',
    ruCapsShift: ';',
    enCaps: '4',
    enCapsShift: '$',
  },
  {
    code: 'Digit5',
    en: '5',
    enShift: '%',
    ru: '5',
    ruShift: '%',
    ruCaps: '5',
    ruCapsShift: '%',
    enCaps: '5',
    enCapsShift: '%',
  },
  {
    code: 'Digit6',
    en: '6',
    enShift: '^',
    ru: '6',
    ruShift: ':',
    ruCaps: '6',
    ruCapsShift: ':',
    enCaps: '6',
    enCapsShift: '^',
  },
  {
    code: 'Digit7',
    en: '7',
    enShift: '&',
    ru: '7',
    ruShift: '?',
    ruCaps: '7',
    ruCapsShift: '?',
    enCaps: '7',
    enCapsShift: '&',
  },
  {
    code: 'Digit8',
    en: '8',
    enShift: '*',
    ru: '8',
    ruShift: '*',
    ruCaps: '8',
    ruCapsShift: '*',
    enCaps: '8',
    enCapsShift: '*',
  },
  {
    code: 'Digit9',
    en: '9',
    enShift: '(',
    ru: '9',
    ruShift: '(',
    ruCaps: '9',
    ruCapsShift: '(',
    enCaps: '9',
    enCapsShift: '(',
  },
  {
    code: 'Digit0',
    en: '0',
    enShift: ')',
    ru: '0',
    ruShift: ')',
    ruCaps: '0',
    ruCapsShift: ')',
    enCaps: '0',
    enCapsShift: ')',
  },
  {
    code: 'Minus',
    en: '-',
    enShift: '_',
    ru: '-',
    ruShift: '_',
    ruCaps: '-',
    ruCapsShift: '_',
    enCaps: '-',
    enCapsShift: '_',
  },
  {
    code: 'Equal',
    en: '=',
    enShift: '+',
    ru: '=',
    ruShift: '+',
    ruCaps: '=',
    ruCapsShift: '+',
    enCaps: '=',
    enCapsShift: '+',
  },
  {
    code: 'Backspace',
    en: '&#129044; Backspace',
    enShift: '&#129044; Backspace',
    ru: '&#129044; Backspace',
    ruShift: '&#129044; Backspace',
    ruCaps: '&#129044; Backspace',
    ruCapsShift: '&#129044; Backspace',
    enCaps: '&#129044; Backspace',
    enCapsShift: '&#129044; Backspace',
  },
  {
    code: 'Tab',
    en: 'Tab &#160;&#8633;',
    enShift: 'Tab &#160;&#8633;',
    ru: 'Tab &#160;&#8633;',
    ruShift: 'Tab &#160;&#8633;',
    ruCaps: 'Tab &#160;&#8633;',
    ruCapsShift: 'Tab &#160;&#8633;',
    enCaps: 'Tab &#160;&#8633;',
    enCapsShift: 'Tab &#160;&#8633;',
  },
  {
    code: 'KeyQ',
    en: 'q',
    enShift: 'Q',
    ru: 'й',
    ruShift: 'Й',
    ruCaps: 'Й',
    ruCapsShift: 'й',
    enCaps: 'Q',
    enCapsShift: 'q',
  },
  {
    code: 'KeyW',
    en: 'w',
    enShift: 'W',
    ru: 'ц',
    ruShift: 'Ц',
    ruCaps: 'Ц',
    ruCapsShift: 'ц',
    enCaps: 'W',
    enCapsShift: 'w',
  },
  {
    code: 'KeyE',
    en: 'e',
    enShift: 'E',
    ru: 'у',
    ruShift: 'У',
    ruCaps: 'У',
    ruCapsShift: 'у',
    enCaps: 'E',
    enCapsShift: 'e',
  },
  {
    code: 'KeyR',
    en: 'r',
    enShift: 'R',
    ru: 'к',
    ruShift: 'К',
    ruCaps: 'К',
    ruCapsShift: 'к',
    enCaps: 'R',
    enCapsShift: 'r',
  },
  {
    code: 'KeyT',
    en: 't',
    enShift: 'T',
    ru: 'е',
    ruShift: 'Е',
    ruCaps: 'Е',
    ruCapsShift: 'е',
    enCaps: 'T',
    enCapsShift: 't',
  },
  {
    code: 'KeyY',
    en: 'y',
    enShift: 'Y',
    ru: 'н',
    ruShift: 'Н',
    ruCaps: 'Н',
    ruCapsShift: 'н',
    enCaps: 'Y',
    enCapsShift: 'y',
  },
  {
    code: 'KeyU',
    en: 'u',
    enShift: 'U',
    ru: 'г',
    ruShift: 'Г',
    ruCaps: 'Г',
    ruCapsShift: 'г',
    enCaps: 'U',
    enCapsShift: 'u',
  },
  {
    code: 'KeyI',
    en: 'i',
    enShift: 'I',
    ru: 'ш',
    ruShift: 'Ш',
    ruCaps: 'Ш',
    ruCapsShift: 'ш',
    enCaps: 'I',
    enCapsShift: 'i',
  },
  {
    code: 'KeyO',
    en: 'o',
    enShift: 'O',
    ru: 'щ',
    ruShift: 'Щ',
    ruCaps: 'Щ',
    ruCapsShift: 'щ',
    enCaps: 'O',
    enCapsShift: 'o',
  },
  {
    code: 'KeyP',
    en: 'p',
    enShift: 'P',
    ru: 'з',
    ruShift: 'З',
    ruCaps: 'З',
    ruCapsShift: 'з',
    enCaps: 'P',
    enCapsShift: 'p',
  },
  {
    code: 'BracketLeft',
    en: '[',
    enShift: '{',
    ru: 'х',
    ruShift: 'Х',
    ruCaps: 'Х',
    ruCapsShift: 'х',
    enCaps: '[',
    enCapsShift: '{',
  },
  {
    code: 'BracketRight',
    en: ']',
    enShift: '}',
    ru: 'ъ',
    ruShift: 'Ъ',
    ruCaps: 'Ъ',
    ruCapsShift: 'ъ',
    enCaps: ']',
    enCapsShift: '}',
  },
  {
    code: 'Backslash',
    en: '\\',
    enShift: '|',
    ru: '\\',
    ruShift: '/',
    ruCaps: '\\',
    ruCapsShift: '/',
    enCaps: '\\',
    enCapsShift: '|',
  },
  {
    code: 'CapsLock',
    en: 'CapsLock',
    enShift: 'CapsLock',
    ru: 'CapsLock',
    ruShift: 'CapsLock',
    ruCaps: 'CapsLock',
    ruCapsShift: 'CapsLock',
    enCaps: 'CapsLock',
    enCapsShift: 'CapsLock',
  },
  {
    code: 'KeyA',
    en: 'a',
    enShift: 'A',
    ru: 'ф',
    ruShift: 'Ф',
    ruCaps: 'Ф',
    ruCapsShift: 'ф',
    enCaps: 'A',
    enCapsShift: 'a',
  },
  {
    code: 'KeyS',
    en: 's',
    enShift: 'S',
    ru: 'ы',
    ruShift: 'Ы',
    ruCaps: 'Ы',
    ruCapsShift: 'ы',
    enCaps: 'S',
    enCapsShift: 's',
  },
  {
    code: 'KeyD',
    en: 'd',
    enShift: 'D',
    ru: 'в',
    ruShift: 'В',
    ruCaps: 'В',
    ruCapsShift: 'в',
    enCaps: 'D',
    enCapsShift: 'd',
  },
  {
    code: 'KeyF',
    en: 'f',
    enShift: 'F',
    ru: 'а',
    ruShift: 'А',
    ruCaps: 'А',
    ruCapsShift: 'а',
    enCaps: 'F',
    enCapsShift: 'f',
  },
  {
    code: 'KeyG',
    en: 'g',
    enShift: 'G',
    ru: 'п',
    ruShift: 'П',
    ruCaps: 'П',
    ruCapsShift: 'п',
    enCaps: 'G',
    enCapsShift: 'g',
  },
  {
    code: 'KeyH',
    en: 'h',
    enShift: 'H',
    ru: 'р',
    ruShift: 'Р',
    ruCaps: 'Р',
    ruCapsShift: 'р',
    enCaps: 'H',
    enCapsShift: 'h',
  },
  {
    code: 'KeyJ',
    en: 'j',
    enShift: 'J',
    ru: 'о',
    ruShift: 'О',
    ruCaps: 'О',
    ruCapsShift: 'о',
    enCaps: 'J',
    enCapsShift: 'j',
  },
  {
    code: 'KeyK',
    en: 'k',
    enShift: 'K',
    ru: 'л',
    ruShift: 'Л',
    ruCaps: 'Л',
    ruCapsShift: 'л',
    enCaps: 'K',
    enCapsShift: 'k',
  },
  {
    code: 'KeyL',
    en: 'l',
    enShift: 'L',
    ru: 'д',
    ruShift: 'Д',
    ruCaps: 'Д',
    ruCapsShift: 'д',
    enCaps: 'L',
    enCapsShift: 'l',
  },
  {
    code: 'Semicolon',
    en: ';',
    enShift: ':',
    ru: 'ж',
    ruShift: 'Ж',
    ruCaps: 'Ж',
    ruCapsShift: 'ж',
    enCaps: ';',
    enCapsShift: ':',
  },
  {
    code: 'Quote',
    en: "'",
    enShift: '"',
    ru: 'э',
    ruShift: 'Э',
    ruCaps: 'Э',
    ruCapsShift: 'э',
    enCaps: "'",
    enCapsShift: '"',
  },
  {
    code: 'Enter',
    en: '&#11168;&#160; Enter',
    enShift: '&#11168;&#160; Enter',
    ru: '&#11168;&#160; Enter',
    ruShift: '&#11168;&#160; Enter',
    ruCaps: '&#11168;&#160; Enter',
    ruCapsShift: '&#11168;&#160; Enter',
    enCaps: '&#11168;&#160; Enter',
    enCapsShift: '&#11168;&#160; Enter',
  },
  {
    code: 'ShiftLeft',
    en: '&#8679; Shift',
    enShift: '&#8679; Shift',
    ru: '&#8679; Shift',
    ruShift: '&#8679; Shift',
    ruCaps: '&#8679; Shift',
    ruCapsShift: '&#8679; Shift',
    enCaps: '&#8679; Shift',
    enCapsShift: '&#8679; Shift',
  },
  {
    code: 'KeyZ',
    en: 'z',
    enShift: 'Z',
    ru: 'я',
    ruShift: 'Я',
    ruCaps: 'Я',
    ruCapsShift: 'я',
    enCaps: 'Z',
    enCapsShift: 'z',
  },
  {
    code: 'KeyX',
    en: 'x',
    enShift: 'X',
    ru: 'ч',
    ruShift: 'Ч',
    ruCaps: 'Ч',
    ruCapsShift: 'ч',
    enCaps: 'X',
    enCapsShift: 'x',
  },
  {
    code: 'KeyC',
    en: 'c',
    enShift: 'C',
    ru: 'с',
    ruShift: 'С',
    ruCaps: 'С',
    ruCapsShift: 'с',
    enCaps: 'C',
    enCapsShift: 'c',
  },
  {
    code: 'KeyV',
    en: 'v',
    enShift: 'V',
    ru: 'м',
    ruShift: 'М',
    ruCaps: 'М',
    ruCapsShift: 'м',
    enCaps: 'V',
    enCapsShift: 'v',
  },
  {
    code: 'KeyB',
    en: 'b',
    enShift: 'B',
    ru: 'и',
    ruShift: 'И',
    ruCaps: 'И',
    ruCapsShift: 'и',
    enCaps: 'B',
    enCapsShift: 'b',
  },
  {
    code: 'KeyN',
    en: 'n',
    enShift: 'N',
    ru: 'т',
    ruShift: 'Т',
    ruCaps: 'Т',
    ruCapsShift: 'т',
    enCaps: 'N',
    enCapsShift: 'n',
  },
  {
    code: 'KeyM',
    en: 'm',
    enShift: 'M',
    ru: 'ь',
    ruShift: 'Ь',
    ruCaps: 'Ь',
    ruCapsShift: 'ь',
    enCaps: 'M',
    enCapsShift: 'm',
  },
  {
    code: 'Comma',
    en: ',',
    enShift: '<',
    ru: 'б',
    ruShift: 'Б',
    ruCaps: 'Б',
    ruCapsShift: 'б',
    enCaps: ',',
    enCapsShift: '<',
  },
  {
    code: 'Period',
    en: '.',
    enShift: '>',
    ru: 'ю',
    ruShift: 'Ю',
    ruCaps: 'Ю',
    ruCapsShift: 'ю',
    enCaps: '.',
    enCapsShift: '>',
  },
  {
    code: 'Slash',
    en: '/',
    enShift: '?',
    ru: '.',
    ruShift: ',',
    ruCaps: '.',
    ruCapsShift: ',',
    enCaps: '/',
    enCapsShift: '?',
  },
  {
    code: 'ShiftRight',
    en: '&#8679;',
    enShift: '&#8679;',
    ru: '&#8679;',
    ruShift: '&#8679;',
    ruCaps: '&#8679;',
    ruCapsShift: '&#8679;',
    enCaps: '&#8679;',
    enCapsShift: '&#8679;',
  },
  {
    code: 'ArrowUp',
    en: '&#129049;',
    enShift: '&#129049;',
    ru: '&#129049;',
    ruShift: '&#129049;',
    ruCaps: '&#129049;',
    ruCapsShift: '&#129049;',
    enCaps: '&#129049;',
    enCapsShift: '&#129049;',
  },
  {
    code: 'Delete',
    en: 'Del',
    enShift: 'Del',
    ru: 'Del',
    ruShift: 'Del',
    ruCaps: 'Del',
    ruCapsShift: 'Del',
    enCaps: 'Del',
    enCapsShift: 'Del',
  },
  {
    code: 'ControlLeft',
    en: 'Ctrl',
    enShift: 'Ctrl',
    ru: 'Ctrl',
    ruShift: 'Ctrl',
    ruCaps: 'Ctrl',
    ruCapsShift: 'Ctrl',
    enCaps: 'Ctrl',
    enCapsShift: 'Ctrl',
  },
  {
    code: 'Win',
    en: '',
    enShift: '',
    ru: '',
    ruShift: '',
    ruCaps: '',
    ruCapsShift: '',
    enCaps: '',
    enCapsShift: '',
  },
  {
    code: 'AltLeft',
    en: 'Alt',
    enShift: 'Alt',
    ru: 'Alt',
    ruShift: 'Alt',
    ruCaps: 'Alt',
    ruCapsShift: 'Alt',
    enCaps: 'Alt',
    enCapsShift: 'Alt',
  },
  {
    code: 'Space',
    en: ' ',
    enShift: ' ',
    ru: ' ',
    ruShift: ' ',
    ruCaps: ' ',
    ruCapsShift: ' ',
    enCaps: ' ',
    enCapsShift: ' ',
  },
  {
    code: 'AltRight',
    en: 'Alt',
    enShift: 'Alt',
    ru: 'Alt',
    ruShift: 'Alt',
    ruCaps: 'Alt',
    ruCapsShift: 'Alt',
    enCaps: 'Alt',
    enCapsShift: 'Alt',
  },
  {
    code: 'ControlRight',
    en: 'Ctrl',
    enShift: 'Ctrl',
    ru: 'Ctrl',
    ruShift: 'Ctrl',
    ruCaps: 'Ctrl',
    ruCapsShift: 'Ctrl',
    enCaps: 'Ctrl',
    enCapsShift: 'Ctrl',
  },
  {
    code: 'ArrowLeft',
    en: '&#129048;',
    enShift: '&#129048;',
    ru: '&#129048;',
    ruShift: '&#129048;',
    ruCaps: '&#129048;',
    ruCapsShift: '&#129048;',
    enCaps: '&#129048;',
    enCapsShift: '&#129048;',
  },
  {
    code: 'ArrowDown',
    en: '&#129051;',
    enShift: '&#129051;',
    ru: '&#129051;',
    ruShift: '&#129051;',
    ruCaps: '&#129051;',
    ruCapsShift: '&#129051;',
    enCaps: '&#129051;',
    enCapsShift: '&#129051;',
  },
  {
    code: 'ArrowRight',
    en: '&#129050;',
    enShift: '&#129050;',
    ru: '&#129050;',
    ruShift: '&#129050;',
    ruCaps: '&#129050;',
    ruCapsShift: '&#129050;',
    enCaps: '&#129050;',
    enCapsShift: '&#129050;',
  },
];

export default keysData;
