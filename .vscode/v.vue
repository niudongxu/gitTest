<template>
    <div>
       <div></div>
       <div v-for="item in items" :key="item.id">
           {{ item }}
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: value
            }
        },
        computed: {
            name() {
                return this.data 
            }
        },
        watch: {
            
        },
        methods: {
            name() {
                
            }
        },
        destroyed () {
            ;
        },
    }
</script>

<style lang="scss" scoped>

</style>