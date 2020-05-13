import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
        data:{
            currency:{},
            selectedCurrency: []
        }, 

        methods:{
            getCurrency: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(data => this.currency = data)
            },

            addToCurrency: function(){
                this.selectedCurrency.push(this.selectedCurrency)
              },
        },
    mounted(){
        this.getCurrency()
    }

  });
});

