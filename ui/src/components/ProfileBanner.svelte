<script>
export let name;
export let user;
export let title;
export let description;

</script>

<style>

  .left-side {background-color: #FFFCFC;}

  @media only screen and (max-width: 600px) {

    p {font-size: 10px;}

  }

</style>




<div class="z-depth-1">
<div class="col s12 m12 l12">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row left-side">
            <div class="col s3 l2 center">
              <a href="profile"><img src="https://api.adorable.io/avatars/40/{user}" alt="" class="responsive-img"></a>
              <p class="">{name}</p>
            </div>
            <div class="col s9 l10">
            <p>{title}</p>
              <span class="black-text">
               {description}
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>