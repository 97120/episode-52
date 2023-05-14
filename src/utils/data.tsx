import { Bus, Station } from "../typings/type";

export const stations: Station[] = [
  { id: 1, label: "Hledan" },
  { id: 2, label: "Myaynigone" },
  { id: 3, label: "Yankin" },
  { id: 4, label: "Tamwe" },
  { id: 5, label: "Yuzana Plaza" },
  { id: 6, label: "Saint Paul" },
  { id: 7, label: "Suele" },
  { id: 8, label: "Thingangyun" },
  { id: 9, label: "South okkala" },
  { id: 10, label: "North okkala" },
  { id: 11, label: "Kabar Aye" },
  { id: 12, label: "Mm Plaza" },
  { id: 13, label: "Insein" },
  { id: 14, label: "South Dagon" },
  { id: 15, label: "North Dagon" },
  { id: 16, label: "Bayli" },
  { id: 17, label: "Sinmalike" },
  { id: 18, label: "Kyimyindaing" },
];

export const buses:Bus[] = [
  {
    id: 1,
    name: "YBS40",
    stations: [
      { id: 1, label: "Hledan" },
      { id: 2, label: "Myaynigone" },
      { id: 3, label: "Yankin" },
      { id: 4, label: "Tamwe" },
      { id: 5, label: "Yuzana Plaza" }
    ]
  },
  {
    id: 2,
    name: "YBS45",
    stations: [
  { id: 3, label: "Yankin" },
  { id: 4, label: "Tamwe" },
  { id: 5, label: "Yuzana Plaza" },
  { id: 6, label: "Saint Paul" },
  { id: 7, label: "Suele" },
  { id: 8, label: "Thingangyun" },
  { id: 9, label: "South okkala" },
  { id: 10, label: "North okkala" }

    ]
  },
  {
    id: 2,
    name: "YBS50",
    stations: [
  { id: 8, label: "Thingangyun" },
  { id: 9, label: "South okkala" },
  { id: 10, label: "North okkala" },
  { id: 11, label: "Kabar Aye" },
  { id: 12, label: "Mm Plaza" },
  { id: 13, label: "Insein" },
  { id: 14, label: "South Dagon" },
  { id: 15, label: "North Dagon" },
  { id: 16, label: "Bayli" },
  { id: 17, label: "Sinmalike" },
  { id: 18, label: "Kyimyindaing" }
    ]
  }
]