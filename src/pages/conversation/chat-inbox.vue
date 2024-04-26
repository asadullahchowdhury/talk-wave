<template>
  <div class="messenger">
    <div class="row">

      <!--List content start-->
      <div class="col-3">
        <div class="messenger-inner">

          <!--User start-->
          <div class="user-info position-relative">
            <div class=" d-flex align-items-center gap-3">
              <div class="user-img border rounded-circle">
                <img class="img-fluid rounded-circle" src="../../assets/image/dummy-user.jpg" alt="user">
              </div>
              <div class="info">
                <h3 class="fw-bold">Dummy user</h3>
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

            <a href="javascript:void(0)" class="btn btn-light rounded-circle py-2 position-absolute end-0 top-0">
              <i class="fa-solid fa-gear"></i>
            </a>
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
                <a href="" class="text-decoration-none fw-bold text-dark active">Latest</a>
              </li>

              <li>
                <a href="" class="text-decoration-none text-muted">All</a>
              </li>

              <li>
                <a href="" class="text-decoration-none text-muted">Group</a>
              </li>
            </ul>
            <!--tab list end  -->

            <ul class="chat-list-inner m-0 p-0">
              <li class="each-friend rounded-4 px-2 py-3  d-flex align-items-center justify-content-between" :key="each"
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
      <div class="col-6">
        <div class="messenger-inner shadow rounded-5 bg-light p-0">
          <!--Inbox header start-->
          <div class="inbox-header d-flex justify-content-between rounded-top-5 py-4 px-3 align-items-center">
            <h5 class="inbox-title d-flex align-items-center fw-bold mb-0">John doe
              <span class="activity ms-2"></span>
            </h5>

            <div class="actions d-flex align-items-center gap-3">
              <a href="javascript:void(0)" class="btn rounded-circle py-2"><i class="fa-solid fa-video"></i></a>
              <a href="javascript:void(0)" class="btn rounded-circle py-2"><i class="fa-solid fa-phone"></i></a>
            </div>
          </div>
          <!--Inbox header end  -->

          <!--Inbox inner start-->
          <div class="inbox-inner p-lg-4 p-3">
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

          </div>
          <!--Inbox inner end  -->

          <!--Inbox footer start-->
          <div class="inbox-footer p-4">

            <div class="form-group position-relative">
              <input type="text" placeholder="Type here... "
                     class="form-control rounded-pill shadow border-0 height-50">
              <div class="icon position-absolute top-0 start-0 ps-3 pt-2 mt-1">
                <a href="javascript:void(0)"><i class="fa-solid fa-face-smile fs-4"></i></a>
              </div>

              <div class="send-btn position-absolute top-0 end-0 pe-4 pt-2 mt-1">
                <a href="javascript:void(0)"><i class="fa-solid fa-paper-plane fs-4"></i></a>
              </div>
            </div>
          </div>
          <!--Inbox footer end  -->
        </div>
      </div>
      <!--Inbox content end  -->

      <!--details content start-->
      <div class="col-3">
        <div class="messenger-inner border"></div>
      </div>
      <!--details content end  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
