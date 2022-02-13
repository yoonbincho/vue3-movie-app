<template>
    <div 
    :style="{ backgroundImage: `url(${movie.Poster})` }"
    class="movie">
    <div class="info">
        <div class="year">
            {{ movie.Year }}
        </div>
        <div class="title">
            {{ movie.Title }}
        </div>
    </div>
        
    </div>
</template>

<script>
export default {
    props: {
        movie: {
        type: Object,
        default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.movie{
    $width: 200px;
    width: $width;
    height: $width * 3 / 2;
    margin: 10px;
    border-radius: 4px ;
    background-color: $gray-400;
    background-size: cover;
    overflow: hidden;
    position: relative;
    &:hover::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 6px solid $primary;
    }
    .info{
        background-color: rgba($black, .3);
        width: 100%;
        padding: 14px;
        font-size: 14px;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        backdrop-filter: blur(10px);
        .year{
            color: $primary;
        }
        .title{
            color: $white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

}
</style>