export type QuestType = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: [number, number],
  duration: number
};

export type PostQuestOrderType = {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean
};

export type LocationSettingType = {
  lat: number,
  lng: number,
  zoom: number,
}
