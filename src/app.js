import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
        data:{
            currency:{},
            selectedCurrency: [],
            selectedCurrency2: []
            
        }, 

        methods:{
            getCurrency: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(data => this.currency = data)
            },

            addToCurrency1: function(){
                this.selectedCurrency.push(this.selectedCurrency)
              },

            addToCurrency2: function(){
                this.selectedCurrency2.push(this.selectedCurrency2)
              }
        },
    mounted(){
        this.getCurrency()
    }

  });
});

