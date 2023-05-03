<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light navigate">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <img class="logo" alt="..." src="../assets/img/logo.png">

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn bg-warn text-white my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.logo {
    width: 48px;
}

.navigate {
    background-color: rgb(186, 99, 37);
}

.bg-warn {
    background-color: rgb(228, 132, 43);
}
</style>