const logger = number => console.log(number);

const log1000 = throttle(logger, 1000);

log1000(1);
log1000(2);
log1000(3);

function throttle(func, time) {
    let breaker = true;
    let buffer = "";
    return string => {
        buffer = string;
        if (breaker) {
            breaker = false;
            func(buffer);
            buffer = "";
            setTimeout(() => {
                breaker = true;
                if (buffer !== "") {
                    func(buffer);
                }
            }, time);
        }
    }
}
