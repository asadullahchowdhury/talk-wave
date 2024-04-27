<template>
  <div class="messenger">
    <div class="row">

      <!--List content start-->
      <div class="col-xxl-3 col-xl-4 col-md-5">
        <div class="messenger-inner">

          <!--User start-->
          <div class="user-info position-relative">
            <div class=" d-flex align-items-center gap-3">
              <div class="user-img border rounded-circle">
                <img class="img-fluid rounded-circle" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>
              <div class="info mt-3">
                <h3 class="title fw-bold">Dummy user</h3>
                <p class="text-muted">@dummy_user</p>

                <!--Active status-->
                <div class="d-flex gap-3 align-items-center">
                   <span class="toggle success">
                  <input id="retail-sales" type="checkbox"/>
                  <label></label>
                </span>
                  <div class="fw-semibold text-muted">Active</div>
                </div>
              </div>
            </div>

            <a href="javascript:void(0)" class="btn setting-btn btn-light rounded-circle py-2 position-absolute"
               data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-gear"></i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0)">Profile</a></li>
              <li><a class="dropdown-item" href="javascript:void(0)">Settings</a></li>
              <li><a class="dropdown-item" href="javascript:void(0)">Logout</a></li>
            </ul>
          </div>
          <!--User end  -->

          <!--Search input start-->
          <div class="form-group my-4 position-relative">
            <input type="text" class="form-control pe-5 height-60 rounded-4 shadow-none" placeholder="Search contact">
            <div class="search-icon position-absolute top-0 end-0 p-3 mt-1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <!--Search input end  -->


          <div class="chat-list">
            <h4 class="fw-bold">Chats</h4>
            <!--tab list start-->
            <ul class="tab-list list-unstyled d-flex gap-4">
              <li>
                <a href="" class="text-decoration-none active">Latest</a>
              </li>

              <li>
                <a href="" class="text-decoration-none">All</a>
              </li>

              <li>
                <a href="" class="text-decoration-none">Group</a>
              </li>
            </ul>
            <!--tab list end  -->

            <ul class="chat-list-inner m-0 p-0">
              <li class="each-friend rounded-4 px-2 py-3  d-flex align-items-center justify-content-between" :key="each" @click="goToChat"
                  v-for="each in [1,2,3,4,5,6,7,8,9]">
                <div class="d-flex flex-grow-1 gap-3 align-items-center">
                  <img class="width-50 height-50 rounded-circle border" src="../../assets/image/dummy-user.jpg"
                       alt="user">
                  <div class="">
                    <p class="name mb-0 fw-semibold">John doe {{ each }}</p>
                    <p class="text-muted small mb-0">Typing...</p>
                  </div>
                </div>
                <div>
                  <p class="small text-muted">11:49</p>
                </div>
              </li>
            </ul>

          </div>


        </div>
      </div>
      <!--List content end  -->

      <!--Inbox content start-->
      <div class=""
           :class="details === true ? 'col-xl-6 col-md-7 d-md-block d-none' : 'col-xxl-9 col-xl-8 col-md-7 d-md-block d-none'">
        <div class="messenger-inner shadow rounded-5 bg-light p-0">

          <!--Inbox header start-->
          <div class="inbox-header d-flex justify-content-between rounded-top-5 py-4 px-3 align-items-center">
            <router-link :to="{name:'InboxDetails'}" class="text-dark text-decoration-none">
              <h5 class="inbox-title d-flex align-items-center fw-bold mb-0">John doe
                <span class="activity ms-2"></span>
              </h5>
            </router-link>

            <div class="actions d-flex align-items-center gap-3">
              <a href="javascript:void(0)" @click="showDetails"
                 class="btn rounded-circle d-xl-flex d-none justify-content-center align-items-center">
                <i class="fa-solid fa-info"></i>
              </a>
              <a href="javascript:void(0)"
                 class="btn rounded-circle d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-video"></i>
              </a>
              <a href="javascript:void(0)"
                 class="btn rounded-circle d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
          <!--Inbox header end  -->

          <!--Inbox inner start-->
          <div class="inbox-inner p-lg-4 p-3" :class="details === true ? 'full' : 'half mx-auto'">
            <!--Outgoing msg start-->
            <div class="outgoing-msg d-flex justify-content-end mb-3 gap-3">
              <div class="msg shadow position-relative">
                this is a message.
                <span class="time position-absolute end-0 bottom-0 p-1 pe-3 text-muted">11:32 am</span>
              </div>
              <div class="user">
                <img class="user-img" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>
            </div>
            <!--Outgoing msg end  -->

            <!--Outgoing msg start-->
            <div class="outgoing-msg d-flex justify-content-end mb-3 gap-3">
              <div class="msg shadow position-relative">
                this is a message. this is a message. this is a message. this is a message.
                <span class="time position-absolute end-0 bottom-0 p-1 pe-3 text-muted">11:32 am</span>
              </div>
              <div class="user">
                <img class="user-img" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>
            </div>
            <!--Outgoing msg end  -->


            <!--Incoming msg start-->
            <div class="incoming-msg d-flex justify-content-start mb-3 gap-3">
              <div class="user">
                <img class="user-img" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>

              <div class="msg shadow position-relative">
                Hey there i'm a demo user
                <span class="time position-absolute end-0 bottom-0 p-1 pe-3 text-muted">11:32 am</span>
              </div>
            </div>
            <!--Incoming msg end  -->

            <!--Outgoing msg start-->
            <div class="outgoing-msg d-flex justify-content-end mb-3 gap-3">
              <div class="msg shadow position-relative">
                Hey there how are you? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, minus, omnis! Ab
                accusamus accusantium aliquam amet architecto aspernatur assumenda culpa cum cumque dolores ducimus,
                eius eos exercitationem fugiat inventore ipsum iure labore laboriosam laudantium libero magni minus
                necessitatibus nostrum praesentium provident quia quisquam recusandae reprehenderit sed, unde. Ab ad
                aspernatur autem delectus dolorem doloribus eum excepturi facere laborum laudantium magni minus
                mollitia, natus nesciunt, non obcaecati odio odit optio quaerat quam quasi quisquam quo rem sequi sint
                sunt ut, voluptas. A aspernatur consectetur corporis earum fugiat ipsa iure officiis, optio, quos rem,
                sapiente soluta velit voluptatem! Corporis ducimus minus quibusdam.
                <span class="time position-absolute end-0 bottom-0 p-1 pe-3 text-muted">11:32 am</span>
              </div>
              <div class="user">
                <img class="user-img" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>
            </div>
            <!--Outgoing msg end  -->

          </div>
          <!--Inbox inner end  -->

          <!--Inbox footer start-->
          <div class="inbox-footer p-4" :class="details === true ? 'full' : 'half mx-auto'">

            <div class="form-group position-relative">

              <input type="text" placeholder="Type here... "
                     class="form-control rounded-pill shadow border-0 height-60">

              <div class="icon position-absolute top-0 start-0 ps-3 pt-3 mt-1">
                <a href="javascript:void(0)"><i class="fa-solid fa-face-smile fs-4"></i></a>
              </div>

              <div class="send-btn position-absolute top-0 end-0 pe-4 pt-3 mt-1">
                <a href="javascript:void(0)"><i class="fa-solid fa-paper-plane fs-4"></i></a>
              </div>
            </div>
          </div>
          <!--Inbox footer end  -->
        </div>
      </div>
      <!--Inbox content end  -->

      <!--details content start-->
      <div :class="details === true ? 'col-xxl-3 col-xl-2 d-xl-block d-none' : 'd-none'">
        <div class="messenger-inner">
          <div class="inbox-details">

            <!--Details header start-->
            <div class="d-flex justify-content-center align-items-center flex-column mb-4">
              <div class="user-img rounded-circle mb-3 border">
                <img class="img-fluid rounded-circle" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>
              <h4 class="name fw-bold mb-0">Tamara</h4>
              <p class="text-muted">@tamara_cia</p>
            </div>
            <!--Details header end  -->

            <div class="border mb-4"></div>

            <p class="fw-bold mb-0">Phone</p>
            <p class="text-muted small">+234 2134 234 23423</p>

            <p class="fw-bold mb-0">Description</p>
            <p class="text-muted small">Available</p>

            <p class="fw-bold mb-0">Email</p>
            <p class="text-muted mb-4 small">tamara@gmail.com</p>

            <div class="border mb-4"></div>

            <div class="d-flex align-items-center justify-content-between mb-3">
              <p class="fw-bold mb-0">Shared file</p>
              <p class="text-muted small mb-0">640MB</p>
            </div>

            <!--Doc File-->
            <a href="javascript:void(0)"
               class="each-file-wrapper rounded-4 text-decoration-none d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-center gap-3">
                <span class="icon-wrapper rounded-3">
                <i class="fa-regular fa-file fs-3"></i>
              </span>
                <div>
                  <p class="mb-0 text-dark fw-semibold small">Document</p>
                  <p class="mb-0 small text-muted">10MB</p>
                </div>
              </div>

              <span class="right-arrow text-dark pe-2">
                <i class="fa-solid small fa-chevron-right"></i>
              </span>
            </a>

            <!--Image File-->
            <a href="javascript:void(0)"
               class="each-file-wrapper rounded-4 text-decoration-none d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-center gap-3">
                <span class="icon-wrapper image rounded-3">
                <i class="fa-regular fa-file-image fs-3"></i>
              </span>
                <div>
                  <p class="mb-0 text-dark fw-semibold small">Image</p>
                  <p class="mb-0 small text-muted">100MB</p>
                </div>
              </div>

              <span class="right-arrow text-dark pe-2">
                <i class="fa-solid small fa-chevron-right"></i>
              </span>
            </a>

            <!--Video File-->
            <a href="javascript:void(0)"
               class="each-file-wrapper rounded-4 text-decoration-none d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-center gap-3">
                <span class="icon-wrapper video rounded-3">
                <i class="fa-regular fa-file-video fs-3"></i>
              </span>
                <div>
                  <p class="mb-0 text-dark fw-semibold small">Video</p>
                  <p class="mb-0 small text-muted">530MB</p>
                </div>
              </div>

              <span class="right-arrow text-dark pe-2">
                <i class="fa-solid small fa-chevron-right"></i>
              </span>
            </a>

          </div>
        </div>
      </div>
      <!--details content end  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: false,
      single: false,
    }
  },
  mounted() {
    window.onresize = function (event) {
      if (event.srcElement.innerWidth < 767){
        this.single = true;
        console.log(this.single,'s')
      }
    };

  },
  methods: {
    showDetails() {
      this.details = this.details !== true;
    },

    goToChat() {
      this.$router.push({name: 'ChatInbox'})
      // if (this.single === true) {
      //   console.log(123)
      //   this.$router.push({name: 'ChatInbox'})
      // }
    }
  }
}
</script>
