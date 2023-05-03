<template>
    <div class="edit-review container-fluid">
        <h1 class="text-center my-4" id="title">Sửa bài viết</h1>
        <div class="container">
            <form method="POST" @submit.prevent="updateReview" class="container">
                <div class="form-group">
                    <label for="ID" class="text-dark">Mã bài viết</label>
                    <input type="text" class="form-control" id="ID" v-model="review.ID">
                </div>

                <div class="form-group">
                    <label for="name-review" class="text-dark">Tên bài viết</label>
                    <input type="text" class="form-control" id="name-review" v-model="review.name">
                </div>

                <div class="form-group">
                    <label for="name-writer" class="text-dark">Tên người viết</label>
                    <input type="text" class="form-control" id="name-writer" v-model="review.reviewer">
                </div>

                <div class="form-group">
                    <label for="descript" class="text-dark">Nội dung</label>
                    <textarea class="form-control" id="descript" v-model="review.content"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label text-dark" for="pathURL">Chọn ảnh bìa</label><br>

                    <input type="file" id="pathURL" class="text-dark" accept="image/jpeg,image/gif,image/png"
                        multiple="multiple">
                </div>
                <button type="submit" class="btn btn-primary mt-4" @click="getNameFileImg">Thêm</button>
                <button type="button" v-on:click="comebackHome()" class="btn btn-secondary btn  mx-3 mt-4">Về trang
                    chủ</button>
            </form>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            review: {
                ID: null,
                name: null,
                image: null,
                reviewer: null,
                content: null,
            }
        }
    },

    computed: {
        id() {
            return this.$route.params.id;
        }
    },

    created() {
        axios
            .get('http://localhost:2409/reviews/edit/' + this.id)
            .then(res => {
                this.review = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },

    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },

        updateReview() {
            axios.put('http://localhost:2409/reviews/update/' + this.id, this.review)
                .then(res => {
                    if (res.data.status === 201) {
                        this.$router.push('/admin/reviews/stored');
                        window.alert("Cập nhật thông tin bài viết thành công")
                    }
                    else if (res.data.status === 501) {
                        window.alert("Cập nhật thông tin bài viết thất bại")
                    }

                })
                .catch(err => console.log(err))
        },
    }

}
</script>
<style scoped>
.add-review {
    margin: 18px auto;
}
</style>