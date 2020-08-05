/*
  Задача написать функцию baseExpect которая будет работать следующим образом
  Пример
  baseExpect(4).toBe(4) === true
  baseExpect(5).toBe(4) === false
  baseExpect(5).toBe.not(4) === true
  baseExpect(5).toBe.not(5) === false
  Примечание: Должно работать только с числами
 */
function baseExpect(a) {
    baseExpect.toBe = (b) => {
        if (!isNaN(a) && !isNaN(b)) {
            return a === b;
        }
        return new Error("NaN");
    };
    baseExpect.toBe.not = (b) => {
        if (!isNaN(a) && !isNaN(b)) {
            return a !== b;
        }
        return new Error("NaN");
    };
    return baseExpect;

}

window.baseExpect = baseExpect;

export default baseExpect;
