<template>
    <div>
        <Menu />
        <Header />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div v-if="errorLoading">{{ errorLoadind }}</div>
                    <Suspense v-else>
                        <template #default>
                            <Card></Card>
                        </template>
                        <template #fallback>
                                <CardSkeleton></CardSkeleton>
                        </template>
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onErrorCaptured, ref } from 'vue';
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import Menu from './Menu';
import Header from './Header';

export default {
    setup() {
        const errorLoading = ref(null);

        onErrorCaptured(() => {
            errorLoading.value = "We are suffering with this error more than you! Sorry!";
        });

        return {
            errorLoading,
        }
    },

    components: {
        Card,
        CardSkeleton,
        Menu,
        Header
    },
    mounted() {
        // Just to check if our component is mounted. We can remove later.
        console.log('Component mounted.')
    }
}
</script>
