function stepper(start, step = 1) {
    const stepper_odj = {
        step: function () {
            return start = start + step;
        }
    }
    return stepper_odj.step;
}

const generator = stepper(0, 3);
const generator1 = stepper(10);

console.log("3 " + generator());
console.log('6 ' + generator());

console.log('11 ' + generator1());
console.log('12 ' + generator1());

console.log('9 ' + generator());

console.log('13 ' + generator1());
console.log('14 ' + generator1());
