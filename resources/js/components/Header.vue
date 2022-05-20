<template>
    <div class="header-background">
        <img class="header-background__circle" src="img/circle.svg">
        <h1 class="mb-3 header-title">Top 5 <span class="header-title-gradient">Web Design</span> Podcasts</h1>
        <img class="header-background__triangle" src="img/triangle.svg">
    </div>
</template>

<style>
.header-background__circle {
    position: relative;
    top: -150px;
    left: 55%;
}

.header-background__triangle {
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 250px;
    left: 45%;
}

.header-background {
    max-height: 150px;
    background-color: #4e105c;
    overflow: hidden;
    position: relative;
    color: white;
}
.header-title {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    color: #eee;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.header-title-gradient {
    background: -webkit-linear-gradient(#f00dc8, #ff6511, #731772);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
}
</style>
