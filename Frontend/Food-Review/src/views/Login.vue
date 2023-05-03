<template >
    <div>
        <section class="vh-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 text-black">
                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form method="POST" @submit.prevent="loginAdmin" style="width: 23rem;">

                                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

                                <div class="form-outline mb-4">
                                    <input type="text" id="form2Example18" class="form-control form-control-lg"
                                        v-model="login.username" />
                                    <label class="form-label" for="form2Example18">Username</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg"
                                        v-model="login.password" />
                                    <label class="form-label" for="form2Example28">Password</label>
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-color btn-lg btn-block" type="submit">Login</button>
                                </div>

                                <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                                <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

                            </form>

                        </div>
                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src="../assets/img/FR0.jpg" alt="Login image" class="w-100 vh-140"
                            style="object-fit: cover; object-position: left;">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            login: {
                username: null,
                password: null
            }
        }
    },

    methods: {

        async loginAdmin() {
            await axios.post('http://localhost:2409/admin/auth/login', this.login)
                .then(res => {
                    if (res.data.status == 200) {
                        const value = res.data.user.name;
                        localStorage.setItem('ad', JSON.stringify(value));
                        this.$router.push('/');
                    }

                    if (res.data.status == 404) {
                        window.alert("Sai tài khoản hoặc mật khẩu")
                    }
                })
                .catch(err => console.log(err));
        },
    }
}
</script>
<style scoped>


.btn-color {
    background-color: rgb(186, 99, 37);
}
</style>