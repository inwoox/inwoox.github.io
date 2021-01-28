<template>

  <div class="container">
    <div>
      <footer class="footer">
        <span class="copyright">&copy;2021 INWOO</span>
        <ul class="footer-links list-inline float-right">
          <li class="list-inline-item spread-underline"><font-awesome-icon :icon="['fab','youtube']"/><a href="#"> Youtube</a></li>
          <li class="list-inline-item spread-underline"><font-awesome-icon :icon="['fab','pied-piper']"/><a href="#"> Blog</a></li>
          <li class="list-inline-item spread-underline"><font-awesome-icon :icon="['fab','github']"/><a href="#"> Github</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .container { width:100%; position: absolute; bottom: 0; }
  .copyright { position: fixed; left: 0; margin-left: 5%;}
  .footer-links a { color: #666; text-decoration: none; }

  .spread-underline {
    color: #333; text-decoration: none; display: inline-block;
    padding: 15px 0; position: relative;
  }
  .spread-underline:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0; content: ""; display: block; height: 2px;
    left: 50%; position: absolute; background: #ffb000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s; width: 0;
  }
  .spread-underline:hover:after {  width: 100%;  left: 0;  }
</style>