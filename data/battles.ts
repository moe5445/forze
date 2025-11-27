import { Match } from '../types';

export const matches: Match[] = [
  {
    id: '1',
    date: '27 Nov',
    day: 'Thursday',
    time: '18:50',
    location: 'LORAG',
    fullLocationName: 'LORAG - Shaftsbury Community Centre',
    current: 10,
    max: 10,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain', 'Mike', 'John', 'Steve'],
    team2Players: ['Paul', 'Dave', 'Chris', 'Tom', 'Alex']
  },
  {
    id: '2',
    date: '27 Nov',
    day: 'Thursday',
    time: '20:50',
    location: 'Olympia',
    fullLocationName: 'Olympia Leisure Centre',
    current: 18,
    max: 18,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain', 'Mike', 'John', 'Steve', 'Rob', 'Sam', 'Dan', 'Will'],
    team2Players: ['Paul', 'Dave', 'Chris', 'Tom', 'Alex', 'Ben', 'Jerry', 'Matt', 'Nick']
  },
  {
    id: '3',
    date: '28 Nov',
    day: 'Friday',
    time: '18:50',
    location: 'LORAG',
    fullLocationName: 'LORAG - Shaftsbury Community Centre',
    current: 18,
    max: 18,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain', 'Mike', 'John', 'Steve', 'Rob', 'Sam', 'Dan', 'Will'],
    team2Players: ['Paul', 'Dave', 'Chris', 'Tom', 'Alex', 'Ben', 'Jerry', 'Matt', 'Nick']
  },
  {
    id: '4',
    date: '28 Nov',
    day: 'Friday',
    time: '19:50',
    location: 'LORAG',
    fullLocationName: 'LORAG - Shaftsbury Community Centre',
    current: 2,
    max: 10,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain'],
    team2Players: []
  },
  {
    id: '5',
    date: '30 Nov',
    day: 'Sunday',
    time: '11:50',
    location: 'Olympia',
    fullLocationName: 'Olympia Leisure Centre',
    current: 7,
    max: 18,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain', 'Mike'],
    team2Players: ['Paul', 'Dave', 'Chris', 'Tom']
  },
  {
    id: '6',
    date: '30 Nov',
    day: 'Sunday',
    time: '14:50',
    location: 'Olympia',
    fullLocationName: 'Olympia Leisure Centre',
    current: 5,
    max: 18,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain'],
    team2Players: ['Paul', 'Dave', 'Chris']
  },
  {
    id: '7',
    date: '01 Dec',
    day: 'Monday',
    time: '20:50',
    location: 'LORAG',
    fullLocationName: 'LORAG - Shaftsbury Community Centre',
    current: 8,
    max: 10,
    price: 5,
    tags: [],
    team1Players: ['Gavin', 'Hussain', 'Mike', 'John'],
    team2Players: ['Paul', 'Dave', 'Chris', 'Tom']
  },
  {
    id: '8',
    date: '01 Dec',
    day: 'Monday',
    time: '20:50',
    location: 'LORAG',
    fullLocationName: 'LORAG - Shaftsbury Community Centre',
    current: 2,
    max: 10,
    price: 5,
    tags: [],
    team1Players: ['Gavin'],
    team2Players: ['Paul']
  },
  {
    id: '9',
    date: '07 Dec',
    day: 'Sunday',
    time: '14:55',
    location: 'PEC',
    fullLocationName: "Queen's Sport PEC (3G)",
    current: 5,
    max: 10,
    price: 5,
    tags: ['Women Only'],
    team1Players: ['Sarah', 'Jenny', 'Amy'],
    team2Players: ['Lisa', 'Emma']
  },
];

export const getMatchById = (id: string): Match | undefined => {
  return matches.find(match => match.id === id);
};
