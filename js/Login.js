new Vue({
	el:'#app',
	data:{
		isClicked:{
			isUnameClicked:false,
			isPwdClicked:false,
			isLoginClicked:false
		},
		formData:{
			username:'',
			password:''
		}
	},
	methods:{
		getUname(){
			this.isClicked.isUnameClicked = !this.isClicked.isUnameClicked
			if(this.isClicked.isUnameClicked){
				this.$refs.uname.focus()
			}
		},
		getPwd(){
			this.isClicked.isPwdClicked = !this.isClicked.isPwdClicked
			if(this.isClicked.isPwdClicked){
				this.$refs.pwd.focus()
			}
		},
		submit(){
			this.isClicked.isLoginClicked = !this.isClicked.isLoginClicked
			if (this.isClicked.isLoginClicked) {
				this.$refs.loginBtn.innerText = ""
			} else{
				this.$refs.loginBtn.innerText = "login"
			}
		}
	}
})