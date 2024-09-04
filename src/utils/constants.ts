export const fruits: String[] = [
  'Strawberry',
  'Grape',
  'Orange',
  'Bergamot',
  'Banana',
  'Apple',
  'Pineapple',
  'Mango',
  'Lemon'
];

export const duplicateArrayElements = (array: any[]): any[] => array.reduce((prev, current) => prev.concat([current, current]), []);

export const randomizeArrayElements = (array: any[]): any[] => array.sort(() => Math.random() - 0.5);