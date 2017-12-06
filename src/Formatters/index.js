export default class TableFormatter {
  static dateFormatter(value, key, item) {
    let dParsed = new Date(value);
    let [date, time] = dParsed.toLocaleString("pl-PL").split(", ");
    return date + " " + time;
  };
}
