/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
    constructor() {
        this.sub = 0;
        this.subArr = [];
    }

    subscribe(callback) {
        this.subArr.push(callback);
    }

    setToken(data) {
        this.sub = data;
        this.subArr.forEach((item) => {
            item(data);
        });
    }

    removeToken() {
        this.sub = null;
        this.subArr.forEach((item) => {
            item(null);
        });
    }

    getToken() {
        return this.sub;
    }
}


window.TokenService = TokenService;

export default TokenService;
