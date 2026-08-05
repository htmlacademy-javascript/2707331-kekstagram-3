const PHOTO_COUNT = 25;

const DESCRIPTIONS = [
  'Закат на море',
'Прогулка по парку',
'Вкусный обед',
'Поездка за город',
'Любимое место',
'Незабываемый день',
'Красивый вид',
'Отдых с друзьями'
];

const POSITIVE_MESSAGES = [
  'Всё отлично!',
'В целом всё неплохо. Но не всё.'
];

const NEGATIVE_MESSAGES = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
'Анна',
'Мария',
'Иван',
'Дмитрий',
'Ольга',
'Елена',
'Максим'
];

const getRandomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) =>
elements[getRandomInt(0, elements.length - 1)];

const createMessage = () => {
  const messages = Math.random() < 0.5
  ? POSITIVE_MESSAGES
  : NEGATIVE_MESSAGES;

  const firstMessage = getRandomArrayElement(messages);

  if (Math.random() < 0.5) {
    return firstMessage;
  }

  const secondMessage = getRandomArrayElement(
    messages.filter((message) => message !== firstMessage)
  );

  return `${firstMessage} ${secondMessage}`;
};

let commentId = 1;

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
                             message: createMessage(),
                             name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
                             likes: getRandomInt(15, 200),
                             comments: Array.from(
                               { length: getRandomInt(0, 30) },
                                                  createComment
                             ),
});

const photos = Array.from(
  { length: PHOTO_COUNT },
  (_, index) => createPhoto(index + 1)
);

console.log(photos);
