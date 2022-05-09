import './styles/style.scss';
import keysData from './js/support/keysData';
import lettersData from './js/support/lettersData';

// ============ Page init Helper FNs ==================================
function getUserLang() {
  return localStorage.getItem('lang') || 'en';
}

function composeBasicElement(tagString, classesArr, text = '') {
  const el = document.createElement(tagString);
  el.classList.add(...classesArr);
  el.innerHTML = text;

  if (tagString === 'textarea') {
    el.setAttribute('id', 'textarea');
    el.setAttribute('autofocus', '');
  }

  if (tagString === 'a') {
    el.setAttribute(
      'href',
      'https://github.com/AlexanderKrasovskiy/virtual-keyboard'
    );
  }

  return el;
}

function composeKeyCap(keyClass, lang, caseDown, caseUp, caps, shiftCaps) {
  const keyCapClasses = [keyClass, 'keycap'];
  if (!(keyClass === lang)) {
    keyCapClasses.push('hidden');
  }

  const KEY_CAP = composeBasicElement('div', keyCapClasses);

  const basicSpan = composeBasicElement('span', ['caseDown'], caseDown);
  const shiftSpan = composeBasicElement('span', ['caseUp', 'hidden'], caseUp);
  const capsSpan = composeBasicElement('span', ['caps', 'hidden'], caps);
  const shiftCapsSpan = composeBasicElement(
    'span',
    ['shiftCaps', 'hidden'],
    shiftCaps
  );

  KEY_CAP.append(basicSpan, shiftSpan, capsSpan, shiftCapsSpan);
  return KEY_CAP;
}

function composeKey(obj, lang) {
  const {
    code,
    en,
    enShift,
    enCaps,
    enCapsShift,
    ru,
    ruShift,
    ruCaps,
    ruCapsShift,
  } = obj;

  const KEY = composeBasicElement('div', ['keyboard__key', code]);
  const EN_KEY_CAP = composeKeyCap(
    'en',
    lang,
    en,
    enShift,
    enCaps,
    enCapsShift
  );
  const RU_KEY_CAP = composeKeyCap(
    'ru',
    lang,
    ru,
    ruShift,
    ruCaps,
    ruCapsShift
  );

  KEY.append(EN_KEY_CAP, RU_KEY_CAP);
  return KEY;
}

function composeKeyboard(data, lang) {
  const KEYBOARD = composeBasicElement('div', ['keyboard']);
  const KEYBOARD_ROW = composeBasicElement('div', ['keyboard__row']);

  data.forEach((obj) => {
    const KEY = composeKey(obj, lang);
    KEYBOARD_ROW.append(KEY);
  });

  KEYBOARD.append(KEYBOARD_ROW);

  return KEYBOARD;
}

// ============ STATE =============================
let currentLang = getUserLang();

let isShift = false;
let isCaps = false;
let isAlt = false;
let isCtrl = false;

// ============ Page Init ===========================
const WRAPPER = composeBasicElement('div', ['wrapper']);
const HEADING = composeBasicElement('h1', ['heading'], 'RSS Virtual Keyboard');
const TEXTAREA = composeBasicElement('textarea', ['textarea']);
const KEYBOARD = composeKeyboard(keysData, currentLang);
const KEYBOARD_KEYS = KEYBOARD.querySelectorAll('div.keyboard__key');
const KEY_CAPS = KEYBOARD.querySelectorAll('div.keyboard__key > div.keycap');
const KEY_CAPS_LETTERS = KEYBOARD.querySelectorAll(
  'div.keyboard__key > div.keycap > span'
);
const OS_TEXT = composeBasicElement(
  'p',
  ['info'],
  'Клавиатура создана в ОС Windows.'
);
const COMBO_TEXT = composeBasicElement(
  'p',
  ['info'],
  'Смена языка: <b>Ctrl + Alt</b>, или клик по кнопке <b>Windows<b>.'
);
const GH_LINK = composeBasicElement('a', ['link'], 'Ссылка на Репозиторий');

WRAPPER.append(HEADING, TEXTAREA, KEYBOARD, OS_TEXT, COMBO_TEXT, GH_LINK);
document.body.append(WRAPPER);

// ================= Key Stroke Handlers =====================

function updateStateFlags(e) {
  isShift = e.shiftKey;
  isAlt = e.altKey;
  isCtrl = e.ctrlKey;
  if (e.code === 'CapsLock') {
    isCaps = !isCaps;
  }
}

function updateLangStyles() {
  KEY_CAPS.forEach((cap) => cap.classList.toggle('hidden'));
}

function handleLangCombo() {
  if (isAlt && isCtrl) {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateLangStyles();
    localStorage.setItem('lang', currentLang);
  }
}

function applyLetterCaseStylesOnDown({ code, repeat = false }) {
  if (
    (code === 'ShiftLeft' && isCaps && !repeat) ||
    (code === 'ShiftRight' && isCaps && !repeat)
  ) {
    KEY_CAPS_LETTERS.forEach((span) => {
      if (isCaps && isShift && span.classList.contains('shiftCaps')) {
        span.classList.remove('hidden');
      } else {
        span.classList.add('hidden');
      }
    });
  } else if (code === 'CapsLock' && isCaps && !repeat) {
    KEY_CAPS_LETTERS.forEach((span) => {
      if (isCaps && span.classList.contains('caps')) {
        span.classList.remove('hidden');
      } else {
        span.classList.add('hidden');
      }
    });
  } else if (
    (code === 'ShiftLeft' && !repeat) ||
    (code === 'ShiftRight' && !repeat)
  ) {
    KEY_CAPS_LETTERS.forEach((span) => {
      if (isShift && span.classList.contains('caseUp')) {
        span.classList.remove('hidden');
      } else {
        span.classList.add('hidden');
      }
    });
  }
}

function removeLetterCaseStylesOnUp({ code }) {
  if ((code === 'ShiftLeft' && isCaps) || (code === 'ShiftRight' && isCaps)) {
    KEY_CAPS_LETTERS.forEach((span) => {
      if (span.classList.contains('caps')) {
        span.classList.remove('hidden');
      } else {
        span.classList.add('hidden');
      }
    });
    isShift = false;
  } else if (code === 'CapsLock') {
    KEY_CAPS_LETTERS.forEach((span) => {
      if (!isCaps && span.classList.contains('caseDown')) {
        span.classList.remove('hidden');
      } else {
        span.classList.add('hidden');
      }
    });
  } else if (code === 'ShiftLeft' || code === 'ShiftRight') {
    KEY_CAPS_LETTERS.forEach((span) => {
      if (span.classList.contains('caseDown')) {
        span.classList.remove('hidden');
      } else {
        span.classList.add('hidden');
      }
    });
    isShift = false;
  }
}

function findLetter(keyCode) {
  if (keyCode === 'Tab') {
    return '\t';
  }
  if (keyCode === 'Enter') {
    return '\n';
  }
  if (keyCode === 'ArrowUp') {
    return '🠙';
  }
  if (keyCode === 'ArrowDown') {
    return '🠛';
  }

  let letterCase = 'caseDown';

  if (isShift && isCaps) {
    letterCase = 'shiftCaps';
  } else if (isShift) {
    letterCase = 'caseUp';
  } else if (isCaps) {
    letterCase = 'caps';
  }

  const letter = lettersData[keyCode][currentLang][letterCase];
  return letter;
}

function updateTextValue(letter) {
  const start = TEXTAREA.selectionStart;
  const end = TEXTAREA.selectionEnd;

  const textBeforeSelection = TEXTAREA.value.slice(0, start);
  const textAfterSelection = TEXTAREA.value.slice(end);
  const newText = textBeforeSelection.concat(letter, textAfterSelection);

  TEXTAREA.value = newText;
  if (letter === '🠙' || letter === '🠛') {
    TEXTAREA.selectionStart = start + 2;
    TEXTAREA.selectionEnd = start + 2;
  } else {
    TEXTAREA.selectionStart = start + 1;
    TEXTAREA.selectionEnd = start + 1;
  }
}

function handleBackSpace() {
  const start = TEXTAREA.selectionStart;
  const end = TEXTAREA.selectionEnd;
  const { value } = TEXTAREA;

  // For start text position
  if (start === 0 && end === 0) {
    return;
  }

  let newText = '';

  if (start === end) {
    const letter = value.slice(start - 2, start);
    let chars = 1;
    if (letter === '🠙' || letter === '🠛') {
      chars = 2;
    }
    const textBeforeSelection = TEXTAREA.value.slice(0, start - chars);
    const textAfterSelection = TEXTAREA.value.slice(end);
    newText = textBeforeSelection.concat(textAfterSelection);
    TEXTAREA.value = newText;
    TEXTAREA.selectionStart = start - chars;
    TEXTAREA.selectionEnd = start - chars;
  } else if (start !== end) {
    const textBeforeSelection = TEXTAREA.value.slice(0, start);
    const textAfterSelection = TEXTAREA.value.slice(end);
    newText = textBeforeSelection.concat(textAfterSelection);
    TEXTAREA.value = newText;
    TEXTAREA.selectionEnd = start;
  }
}

function handleDelete() {
  const start = TEXTAREA.selectionStart;
  const end = TEXTAREA.selectionEnd;
  const length = TEXTAREA.textLength;
  const { value } = TEXTAREA;

  // For end text position
  if (start === length && end === length) {
    return;
  }

  let newText = '';

  if (start === end) {
    const letter = value.slice(start, start + 2);
    let chars = 1;
    if (letter === '🠙' || letter === '🠛') {
      chars = 2;
    }
    const textBeforeSelection = TEXTAREA.value.slice(0, start);
    const textAfterSelection = TEXTAREA.value.slice(end + chars);
    newText = textBeforeSelection.concat(textAfterSelection);
    TEXTAREA.value = newText;
    TEXTAREA.selectionStart = start;
    TEXTAREA.selectionEnd = start;
  } else {
    const textBeforeSelection = TEXTAREA.value.slice(0, start);
    const textAfterSelection = TEXTAREA.value.slice(end);
    newText = textBeforeSelection.concat(textAfterSelection);
    TEXTAREA.value = newText;
    TEXTAREA.selectionStart = start;
    TEXTAREA.selectionEnd = start;
  }
}

function handleArrows(code) {
  const start = TEXTAREA.selectionStart;
  const end = TEXTAREA.selectionEnd;
  const length = TEXTAREA.textLength;
  const { value } = TEXTAREA;

  // No actions at start / end position
  if (
    start === 0 &&
    end === 0 &&
    (code === 'ArrowLeft' || code === 'ArrowUp')
  ) {
    return;
  }
  if (
    start === length &&
    end === length &&
    (code === 'ArrowRight' || code === 'ArrowDown')
  ) {
    return;
  }

  // Handle selection for L / R arrow
  if (start !== end && code === 'ArrowLeft') {
    TEXTAREA.selectionEnd = start;
    return;
  }
  if (start !== end && code === 'ArrowRight') {
    TEXTAREA.selectionStart = end;
    return;
  }

  // No selection - move caret left / right
  if (code === 'ArrowLeft') {
    const letter = value.slice(start - 2, start);
    if (letter === '🠙' || letter === '🠛') {
      TEXTAREA.selectionStart = start - 2;
      TEXTAREA.selectionEnd = start - 2;
    } else {
      TEXTAREA.selectionStart = start - 1;
      TEXTAREA.selectionEnd = start - 1;
    }
    return;
  }
  if (code === 'ArrowRight') {
    const letter = value.slice(start, start + 2);
    if (letter === '🠙' || letter === '🠛') {
      TEXTAREA.selectionStart = start + 2;
      TEXTAREA.selectionEnd = start + 2;
    } else {
      TEXTAREA.selectionStart = start + 1;
      TEXTAREA.selectionEnd = start + 1;
    }
  }
}

function handleKeyDown(e) {
  TEXTAREA.focus();

  updateStateFlags(e); // Alt Ctrl Caps Shift

  handleLangCombo(); // Ctrl + Alt

  // Apply pushed key style
  const pressedKey = [...KEYBOARD_KEYS].find((key) =>
    key.classList.contains(e.code)
  );
  if (!pressedKey) {
    return;
  }
  pressedKey.classList.add('pushed');

  // Apply styles on Caps / Shift / Caps + Shift
  applyLetterCaseStylesOnDown(e);

  // Pass default action for some FN keys
  if (
    e.code === 'Space' ||
    e.code === 'Backspace' ||
    e.code === 'Delete' ||
    e.code === 'Enter' ||
    e.code === 'ArrowLeft' ||
    e.code === 'ArrowUp' ||
    e.code === 'ArrowDown' ||
    e.code === 'ArrowRight'
  ) {
    return;
  }

  // Prevent text input for other FN keys
  if (
    e.code === 'ShiftLeft' ||
    e.code === 'ShiftRight' ||
    e.code === 'CapsLock' ||
    e.code === 'ControlLeft' ||
    e.code === 'ControlRight' ||
    e.code === 'AltLeft' ||
    e.code === 'AltRight'
  ) {
    e.preventDefault();
    return;
  }

  // Pass hot keys for Ctrl + C / V / X / Z / Y ...
  if (isCtrl) {
    return;
  }

  // Prevent user lang text input
  e.preventDefault();

  // Update textarea value
  const letter = findLetter(e.code);
  updateTextValue(letter);
}

function handleKeyUp(e) {
  // Prevent 1-st keyup on Caps
  if (isCaps && e.code === 'CapsLock') {
    return;
  }

  // Remove pushed key style
  const pressedKey = [...KEYBOARD_KEYS].find((key) =>
    key.classList.contains(e.code)
  );
  if (!pressedKey) {
    return;
  }
  pressedKey.classList.remove('pushed');

  // Remove styles on Caps / Shift / Caps + Shift
  removeLetterCaseStylesOnUp(e);

  // Clear state
  isCtrl = false;
  isAlt = false;
}

// ================= Click Handlers =====================

function handleMouseDown(e) {
  // Find clicked button
  const clickedButton = e.target.closest('div.keyboard__key');
  if (!clickedButton) {
    return;
  }
  const letterCode = clickedButton.classList[1];

  // Update state - Alt Ctrl Caps Shift
  if (letterCode === 'ShiftLeft' || letterCode === 'ShiftRight') {
    isShift = true;
  } else if (letterCode === 'CapsLock') {
    isCaps = !isCaps;
  } else if (letterCode === 'ControlLeft' || letterCode === 'ControlRight') {
    isCtrl = true;
  } else if (letterCode === 'AltLeft' || letterCode === 'AltRight') {
    isAlt = true;
  }

  // Handle language change
  if (letterCode === 'Win') {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateLangStyles();
    localStorage.setItem('lang', currentLang);
  } else {
    handleLangCombo();
  }

  // Apply pushed button style
  clickedButton.classList.add('pushed');

  // Apply styles on Caps / Shift / Caps + Shift
  applyLetterCaseStylesOnDown({ code: letterCode });

  // Prevent text input for some FN keys
  if (
    letterCode === 'ShiftLeft' ||
    letterCode === 'ShiftRight' ||
    letterCode === 'CapsLock' ||
    letterCode === 'ControlLeft' ||
    letterCode === 'ControlRight' ||
    letterCode === 'AltLeft' ||
    letterCode === 'AltRight' ||
    letterCode === 'Win'
  ) {
    return;
  }

  if (letterCode === 'Backspace') {
    handleBackSpace();
    return;
  }

  if (letterCode === 'Delete') {
    handleDelete();
    return;
  }

  if (letterCode === 'ArrowLeft' || letterCode === 'ArrowRight') {
    handleArrows(letterCode);
    return;
  }

  const letter = findLetter(letterCode);
  updateTextValue(letter);
}

function handleMouseUp(e) {
  TEXTAREA.focus();

  // Find clicked button
  const clickedButton = e.target.closest('div.keyboard__key');
  if (!clickedButton) {
    return;
  }
  const letterCode = clickedButton.classList[1];

  // Prevent 1-st mouseup on Caps
  if (isCaps && letterCode === 'CapsLock') {
    return;
  }

  // Update state - Alt Ctrl Shift
  if (letterCode === 'ShiftLeft' || letterCode === 'ShiftRight') {
    isShift = false;
  } else if (letterCode === 'ControlLeft' || letterCode === 'ControlRight') {
    isCtrl = false;
  } else if (letterCode === 'AltLeft' || letterCode === 'AltRight') {
    isAlt = false;
  }

  // Remove pushed style
  KEYBOARD_KEYS.forEach((key) => {
    if (!isCaps || (isCaps && !key.classList.contains('CapsLock'))) {
      key.classList.remove('pushed');
    }
  });

  // Remove styles on Caps / Shift / Caps + Shift
  removeLetterCaseStylesOnUp({ code: letterCode });
}

// =============== Listeners =================
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
KEYBOARD.addEventListener('mousedown', handleMouseDown);
KEYBOARD.addEventListener('mouseup', handleMouseUp);
