export enum NameSpace {
  Site = 'SITE',
  Data = 'DATA',
  Order = 'ORDER',
}

export enum APIRoute {
  Quests = '/quests',
  Quest = '/quests/:id',
  Orders = '/orders'
}

export enum ToastMessages {
  LoadError = 'Произошла ошибка загрузки данных, попробуйте снова',
  PostSucces = 'Заказ отправлен',
  PostError = 'Заказ не был отправлен, попробкйте снова',
  InpurRequeireError = 'Обязательное поле',
  InputSampleError = 'Формат не верен',
  PeopleMinCount = 'Минимум участников:',
  PeopleMaxCount = 'Максимум участников:',
}


export const questGenres: {[key: string]: string} = {
  'all-quests' : 'Все квесты',
  'adventures' : 'Приключения',
  'horror' : 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
};

export enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  DetailedQuest = '/detailed-quest/:id',
  NotFound = '*',
}

export const Difficulty: {[key: string]: string} = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий'
} as const;


export const LocationSetting = {
  lat: 59.968306,
  lng: 30.317605,
  zoom: 17,
} as const;
