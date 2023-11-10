<template>
    <div class="col col-md-4">
        <div class="card position-relative">
            <img class="card-img-top" src="./../../public/Screenshot_1.png"
                style="height: 280px; width: 100%; display: block;">
            <div class="card-body">
                <h5 class="card-title">{{ articleProps.title }}</h5>
                <p class="card-text">{{ articleProps.description }}</p>
                <p class="text-muted">{{ articleProps.createdAt }}</p>
                <a href="#" class="btn btn-primary mr-3">Go somewhere</a>
                <a href="#" class="btn btn-danger">Go somewhere</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArticlesCord',
    props: {
        articleProps: {
            type: Object,
            required: true
        }
    }
}
</script>