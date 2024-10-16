<template>
    <div class="container py-5">
        <h1 class="text-center mb-5">Автомобилка</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <Card 
                v-for="car in cars" 
                :key="car.id" 
                :car="car" 
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCarsStore } from '@/stores/store'
import Card from '@/components/Card.vue'
import type { CardType } from '@/types/Card'

const carsStore = useCarsStore()

onMounted(() => {
    carsStore.getCars()
})

const cars = computed<CardType[]>(() => carsStore.cars)
</script>