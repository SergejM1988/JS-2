const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    cart: [],
    filteredGoods: [],
    searchLine: "",
    isVisibleCart: "",

    methods: {
      makeGETRequest(url, callback) {
        const API_URL =
          "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
        var xhr;
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            callback(xhr.responseText);
          }
        };
        xhr.open("GET", url, true);
        xhr.send();
      },
      filterGoods() {
        let text = this.searchText.toLowerCase().trim();
        if (text === "") {
          this.filterGoods = this.goods;
        } else {
          this.filterGoods = this.goods.filter((el) => {
            return el.product_name.toLowerCase().includes(text);
          });
        }
      },
      sumCart() {
        return this.cart.reduce(function (sum, price) {
          return sum + this.goods.price;
        }, 0);
      },
      mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
          this.goods = goods;
          this.filteredGoods = goods;
        });
      },
    },
  },
});
console.log(app);
