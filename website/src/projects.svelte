<script>

</script>

<style type="text/scss">
  .container {
    min-height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .box {
    position: relative;
    box-sizing: border-box;
    width: 200px;
    flex: 1 40%;
    margin: 2%;
    .box-image {
      height: 100%;
      opacity: 0.2;
      background-image: url("./images/the_times_device_spread.png");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      transition: all 0.5s ease-in;
    }
    .box-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.85);
      color: white;
      transition: all 0.5s ease-in;
    }
    &:hover {
      .box-image {
        opacity: 1;
      }
      .box-overlay {
        opacity: 0;
      }
    }
  }
</style>

<div class="container">
  <div class="box">
    <div class="box-image" />
    <div class="box-overlay">
      <h1>Projects</h1>
    </div>
  </div>
  <div class="box">
    <div class="box-image" />
    <div class="box-overlay" />
  </div>
  <div class="box">
    <div class="box-image" />
    <div class="box-overlay" />
  </div>
  <div class="box">
    <div class="box-image" />
    <div class="box-overlay" />
  </div>
</div>
