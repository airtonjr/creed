<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    async setup() {
        const podcasts = ref(null);
        const screenSize = window.matchMedia('(max-width: 600px)').matches ? false : true;

        const response = await axios.get('/api/podcast');

        podcasts.value = response.data.podcasts;

        return {
            podcasts,
            screenSize
        };
    }

    /* OPTION #1
    setup() {
        const state = reactive({
            podcasts: ref(null),
        });

        const fetchPodcasts = async() => {
            await fetch('/api/podcast').then(response =>
                response.json().then(data => ({
                        data: data,
                        status: response.status
                    })
                ).then(res => {
                    state.podcasts = res.data.podcasts
                }));
        };

        onMounted(() => {
            setTimeout(fetchPodcasts, 4000);
        });

        return {
            state,
        };
    } */
}

</script>

<template>
    <div>
        <div class="card shadow-sm m-3" v-for="(podcast, index) in podcasts" :key="podcast.id">
            <div :class="screenSize ? 'card-horizontal' : 'card'">
                <div class="img-square-wrapper">
                <span class="rank">
                    <img :class="screenSize ? 'img-card shadow-sm' : 'card-img-top shadow-sm'" :src="podcast.image" alt="Podcast Image">
                    <span class="rank__number shadow-sm">{{ index + 1 }}</span></span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">{{ podcast.title }}</h3>
                    <p class="card-text card-text-additional">by {{ podcast.publisher }} <br> {{ podcast.total_episodes }} episodes</p>
                    <hr>
                    <p class="card-text blockquote-footer">{{ podcast.description }}</p>
                </div>
            </div>
            <div class="card-footer">
                <div :class="screenSize ? 'float-end' : 'd-flex aligns-items-center justify-content-center'">
                    <span class="text-muted p-2"><a target="_blank" :href="podcast.itunes_id"><font-awesome-icon icon="apple-whole" /> iTunes</a></span>
                    <span class="text-muted p-2"><a target="_blank" :href="podcast.website"><font-awesome-icon icon="link"/> WEB</a></span>
                    <span class="text-muted p-2"><a target="_blank" :href="podcast.rss"><font-awesome-icon icon="rss" /> RSS</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
a {
    text-decoration: none;
    color: #6C757D;
}

.card-title {
    font-family: 'Space Mono', monospace;
    font-weight: 800;
}

.card-text-additional {
    font-family: 'Nunito', sans-serif;
}

.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}

.rank {
    background-color: #eee;
    width: 48px;
    height: 42px;
    text-align: center;
    padding-top: 6px;
}

.rank__number {
    font-family: 'Space Mono', monospace;
    font-weight: 800;
    font-size:30px;
    background-color:red;
    width:50px;
    line-height: 50px;
    text-align: center;
    color
    :#fff;
    z-index: 2;
    border-radius: 30px;
    position: absolute;
    top: 65px;
    left: -120px;
    background: rgb(131,58,180);
    background: linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}

.card-horizontal img {
    margin-left: -50px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 150px;
    height: 150px !important;
}

@media only screen and (max-width: 600px) {
    .rank__number {
        font-family: 'Space Mono', monospace;
        font-weight: 800;
        font-size:30px;
        background-color:red;
        width:50px;
        line-height: 50px;
        text-align: center;
        color:#fff;
        z-index: 10;
        border-radius: 30px;
        position: absolute;
        left: 15px;
        top: 15px;
        background: rgb(131,58,180);
        background: linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    }
}
</style>
