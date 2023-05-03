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
                        <router-link to="/" class="nav-link text-white">Home <span class="sr-only">(current)</span></router-link>
                    </li>

                    <li class="nav-item active" v-if="this.admin">
                        <router-link to="/admin/reviews/stored" class="nav-link  text-white">Danh sách bài viết <span
                                class="sr-only">(current)</span></router-link>
                    </li>

                    <li class="nav-item active" v-if="this.admin">
                        <router-link to="/admin/reviews/add" class="nav-link  text-white">Thêm bài viết <span
                                class="sr-only">(current)</span></router-link>
                    </li>
                </ul>


                <ul class="nav navbar-nav navbar-right d-flex align-items-center" v-if="this.admin">
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#" > {{ this.admin }} <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="btn bg-warn text-white nav-link" v-on:click="logout()">
                            Đăng xuất
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    computed: {
        admin() {
            const name = JSON.parse(localStorage.getItem("ad"));
            return name || null;
        }
    },
    methods: {

        logout() {
            localStorage.clear();
            this.$router.push('/');

            setTimeout(window.location.reload.bind(window.location), 200)
        }
    },
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
    background-color: rgb(178, 80, 19);
}
</style>