<template>

<form name="loginForm" v-on:submit.prevent="onSubmit" novalidate>
    <div ng-show="loginError" class="alert alert-danger">{{loginError}}</div>

    <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" class="form-control" v-model="credentials.email" id="email"
               placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="credentials.password" id="password"
               placeholder="Password">
    </div>
    <button type="submit" class="btn btn-default">Login</button>
</form>

</template>

<script>
export default {
  data () {
    return {
      credentials: {}
    }
  },
  methods : {
    onSubmit : function(event) {console.log(this.credentials.email);return true}
  },
  ready : function() {
    console.log("ready for login");
  }
}
</script>

