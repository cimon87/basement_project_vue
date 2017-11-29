export default class TableFormatter {
  static dateFormatter(value, key, item) {
    let [date, time] = value.toLocaleString("pl-PL").split(", ");
    return date + " " + time;
  };
}
