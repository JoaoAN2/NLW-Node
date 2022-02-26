class DateTools {

    formatDateAndTime(date: Date) {
        const DateAndTimeFormated = `
        ${this.formatDate(date)}
        ${this.formatTime(date)}`;
        return DateAndTimeFormated;
    }

    formatDate(date: Date) {
        const dateNotFormat = new Date(date);
        const dateFormated = `${this.addZero(dateNotFormat.getDate())}/${this.addZero(dateNotFormat.getMonth() + 1)}/${dateNotFormat.getFullYear()}`;
        return dateFormated;
    }

    formatTime(date: Date) {
        const dateNotFormat = new Date(date);
        const timeFormated = `${this.addZero(dateNotFormat.getHours())}:${this.addZero(dateNotFormat.getMinutes())}:${this.addZero(dateNotFormat.getSeconds())}`;
        return timeFormated;
    }
    
    addZero(value: Number) {
        return String(value).padStart(2, "0");
    }

}

export { DateTools };