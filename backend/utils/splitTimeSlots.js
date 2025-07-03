function splitTimeSlots(startTime, endTime, interval = 30) {
    const toMinutes = (time) => {
        const [hour, min] = time.split(':').map(Number);
        return hour * 60 + min;
    };

    const toTimeString = (minutes) => {
        const hour = String(Math.floor(minutes / 60)).padStart(2, '0');
        const min = String(minutes % 60).padStart(2, '0');
        return `${hour}:${min}`;
    };

    const slots = [];
    let current = toMinutes(startTime);
    const end = toMinutes(endTime);

    while (current < end) {
        const next = current + interval;
        if (next <= end) {
            slots.push(`${toTimeString(current)} - ${toTimeString(next)}`);
        }
        current = next;
    }

    return slots;
}
