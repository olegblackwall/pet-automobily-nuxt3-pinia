<template>
    <div class="col">
        <div class="card h-100">
            <img :src="car.image" class="card-img-top" :alt="car.name" />
            <div class="card-body">
                <h5 class="card-title">{{ car.name }}</h5>
                <p class="card-text">Объем двигателя: {{ car.engine }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import type { CardType } from '@/types/Card'

defineProps({
    car: {
        type: Object as PropType<CardType>
    }
})
</script>