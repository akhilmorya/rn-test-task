export default class Utility {
  static changeStringStyle(string, textType) {
    switch (textType) {
      case 'fullCapital':
        string = string.toUpperCase();
        break;
      case 'firstCapital':
        string =
          string.toLowerCase().charAt(0).toUpperCase() +
          string.slice(1).toLowerCase();
        break;
      case 'pascalCapital':
        string = string
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        break;
      default:
        break;
    }
    return string;
  }
}
