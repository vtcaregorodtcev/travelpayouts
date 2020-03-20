export const __ = (locale) => (key) => {
  return translations[locale] ? (translations[locale][key] || key) : key;
}

const translations = {
  ru: {
    'Where does it come from? Why do we use it?': "Откуда это? Что с этим делать?",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.": 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    'Depart Date': 'Дата отправления',
    'Return Date': 'Дата возвращения',
    'Search': 'Поиск'
  }
}
