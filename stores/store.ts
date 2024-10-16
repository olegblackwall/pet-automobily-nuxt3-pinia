import { defineStore } from 'pinia'
import axios from "axios"


export const useCarsStore = defineStore('carsStore', {
    state: () => ({
        cars: []
    }),
    actions: {
        getCars() {
            axios
                .get('https://am111.05.testing.place/api/v1/cars/list')
                .then(response => {
                    this.cars = response.data
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
})