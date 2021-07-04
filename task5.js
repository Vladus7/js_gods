const logger = number => console.log(number);

const log1000 = throttle(logger, 1000);

log1000(1);
log1000(2);
log1000(3);

function throttle(func, time) {
    const throttle_odj = {
        breaker: true,
        text: "",
        process: function (string) {
            this.text = string;
            if (this.breaker) {
                this.breaker = false;
                func(this.text);
                setTimeout(() => {
                    this.breaker = true;
                    func(this.text);
                }, time);
            }
        }
    }
    return throttle_odj.process.bind(throttle_odj);
}
