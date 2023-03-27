class DateConverter {
  addMonthZero(month) {
    month += 1;
    if (month < 10) {
      return `0${month}`;
    }

    return `${month}`;
  }

  formatDate(date) {
    const dayNumber = date.getDate();
    const month = this.addMonthZero(date.getMonth());
    const year = date.getFullYear();

    return `${dayNumber}-${month}-${year}`;
  }
}
export default DateConverter;
