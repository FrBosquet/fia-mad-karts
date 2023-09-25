export const getslug = (name: string) => {
  return name.toLowerCase().replace(/ /g, '');
}