
function get_day_info(date) {

    function validateDate (vd) {
        let buffer = vd.split(".");
        if (buffer[0] !== undefined && buffer[1] !== undefined && buffer[2] !== undefined) {
            buffer[0] = parseInt(buffer[0]);
            buffer[1] = parseInt(buffer[1]);
            buffer[2] = parseInt(buffer[2]);
            if (0 < buffer[0] && buffer[0] <= 31 &&
                0 < buffer[1] && buffer[1] <= 12 &&
                0 < buffer[2]) {
                return buffer;
            }
        }
        return false;
    }

    function getWeekNumber (gwn_d) {
        return (0 | gwn_d.getDate() / 7)+1;
    }

    function getWeekDay (gwd_d) {
        const weekday = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        return weekday[gwd_d.getDay()];
    }

    function getMonth (gm_d) {
        const weekday = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        return weekday[gm_d.getMonth()];
    }

    date = validateDate(date);
    if (!date) {
        console.log("Не верный формат даты (dd.mm.YY)");
        return false;
    }

    let currentDate = new Date(date[2], date[1] - 1, date[0]);
    if (!currentDate instanceof Date || isNaN(currentDate)) {
        return false;
    }

    let weekNumber = getWeekNumber(currentDate);
    let weekDay = getWeekDay(currentDate);
    let month = getMonth(currentDate);

    return `${weekDay}, ${weekNumber} неделя ${month} ${date[2]} года`;
}

let dates = document.querySelectorAll(`[data-date]`);

for (let i = 0; i < dates.length; i++) {
    let date = dates[i];
    date.innerHTML = get_day_info(date.getAttribute("data-date"));
}