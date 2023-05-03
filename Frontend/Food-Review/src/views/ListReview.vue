<template>
    

    <div class="list-reviews">
        <br>
        <h1 class="text-uppercase clor-text">Quản lý bài viết</h1>
        <br>
        <table class="table">
            <thead class="thead-color text-white">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên bài viết</th>
                    <th scope="col">Người viết bài</th>
                    <th scope="col" colspan="2"></th>
                </tr>
            </thead>
            <tbody v-for="(review, index) in reviews" :key="index">
                <tr class="text-justify">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ review.name }}</td>
                    <td>{{ review.reviewer }}</td>
                    <td>
                        <router-link :to="'/reviews/edit/' + review._id" class="btn btn-link">Sửa</router-link>
                        <a href="" class="btn btn-link" @click="getIdReview(review)" data-toggle="modal"
                            data-target="#delete-review-modal">Xóa</a>
                    </td>
                </tr>
            </tbody>
        </table>


        <div class="modal fade" id="delete-review-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Xóa bài viết?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Bạn có chắc muốn xóa bài viết này?
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deleteReview()" class="btn btn-danger">Xóa
                            bỏ</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {

    data(){
        return {
            reviews: [],
            id: null
        }
    },
    created() {
        axios.get('http://localhost:2409/')
            .then(res => {
                this.reviews = res.data.reviews;
            })
            .catch(err => {
                console.log(err)
            });
    },
    methods: {
        getIdReview(review) {
            this.id = review._id;
            console.log(this.id);
        },
        deleteReview() {
            axios.delete('http://localhost:2409/reviews/delete/' + this.id)
                .then(() => {
                    this.$router.push('/admin/reviews/stored');
                    window.alert("Xóa thành công")
                    window.location.reload()
                })
                .catch(err => console.log(err));
        },
    }
}
</script>
<style scoped>
.clor-text {
    color: #c96b24;
}

.thead-color {
    background-color: rgb(186, 99, 37);
}
</style>