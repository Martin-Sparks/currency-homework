import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
        data:{
            currency:{},
            selectedCurrency: 0
        }, 

        methods:{
            getCurrency: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(data => this.currency = data)
            }
        },
    mounted(){
        this.getCurrency()
    }

  });
});

