export default class Utility {
  static changeStringStyle(string, textType) {
    switch (textType) {
      case 'fullCapital':
        string = string.toUpperCase();
        break;
      case 'firstCapital':
        string =
          string
            .toLowerCase()
            .charAt(0)
            .toUpperCase() + string.slice(1).toLowerCase();
        break;
      case 'pascalCapital':
        string = string
          .toLowerCase()
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        break;
      default:
        break;
    }
    return string;
  }

  static getUserName(email) {
    if (email === 'admin1234') {
      return 'Admin User';
    } else {
      return 'Guest User';
    }
  }

  static getButtonsOption() {
    const buttonOptions = [
      {
        optionText: '1',
        value: 1,
      },
      {
        optionText: '2',
        value: 2,
      },
      {
        optionText: '3',
        value: 3,
      },
      {
        optionText: '4',
        value: 4,
      },
    ];
    return buttonOptions;
  }
}
