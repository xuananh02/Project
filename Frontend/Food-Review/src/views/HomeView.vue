<template>
  <div class="home-view container-fluid">
    <h1 class="text-center my-4" id="title">GREEN FOOD</h1>
    <!-- Search reviews -->
    <div class="sections row mb-3 justify-content-center">
      <form class="form-inline my-2 my-lg-0">
        <label class=" form-label my-2 my-sm-0 mr-3">Tìm kiếm bài viết: </label>
        <input class="form-control mr-sm-2 col-xs-4" type="search" v-model="search" aria-label="Search">
      </form>

    </div>
    <div class="row">
      <div class="col-7">
        <h2 class="ml-4">Danh mục bài viết</h2>
        <template v-for="(review, index) in filteredList" :key="index">

          <div class="row border rounded ml-4 my-3" style="width: 40rem;">
            <div class="col-md-3 my-4">
              <router-link :to="'/reviews/' + review._id">

                <img class="card-img-top " :src="path + review.image" alt="Card image cap">
              </router-link>
            </div>
            <div>
              <div class="card-body">
                <h5 class="card-title">{{ review.name }}</h5>
                <p>Được viết bởi: {{ review.reviewer }}</p>
                <p v-if="this.admin">Mã bài viết: {{ review.ID }}</p>
                <!-- <router-link :to="'/reviews/detail/' + review._id" class="btn btn-link">
                                Xem bài viết</router-link> -->
              </div>
            </div>
          </div>

        </template>
      </div>
      <div class="col-5">
        <div class="p-1 ">
          <h4 class="px-1 py-3 text-center" id="title">
            <q>Love is important but food is what feeds people</q>
          </h4>
          <img style="width: 100%;" src="../assets/img/FR000.jpg" alt="" class="mb-4">
          <img style="width: 100%;" src="../assets/img/FR00.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import staticPath from "../assets/staticPath"
export default {

  data() {
    return {
      search: '',
      reviews: []
    };
  },
  computed: {
    admin() {
            const name = JSON.parse(localStorage.getItem("ad"));
            return name || null;
        },
        
    filteredList() {
            return this.reviews.filter(review => {
                return review.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },

    path() {
      return staticPath;
    }
  },
  created() {
    axios.get("http://localhost:2409")
      .then(res => this.reviews = res.data.reviews)
      .catch(error => console.log(error));
  }
}
</script>
<style>
h1 {
  text-align: center;
}

#title {
  font-family: "Arial";
  color: #c96b24;
}

.card img {
  flex: 1
}

.card-img-top {
  height: 100%;
}
</style>