import React from "react"
import "./styles.css"
import Logo from "../Logo"
import {MdFacebook} from "react-icons/md"
import api from "../../utils/api"

function Login(props) {
  //ESTADOS
  const [userName, setUserName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  //FUNÇÕES
  const loginUser = () => {
    const data = {
      name: userName,
      email: email,
      password: password
    }
    setLoading(true)
    api
      .post("/login", data)
      .then((response) => {
        //SUCESSO!!!!
        setLoading(false)
        props.onLogin(response.data)
        localStorage.setItem("acessToken", response.data.acessToken)
      })
      .catch((error) => {
        //FALHAAA!!!
        setLoading(false)
      })
  }
  return (
    <div className="main">
      <div className="row">
        <div className="login-img-cel">
          <div className="phone-img-box">
            <img
              className="photo-login-static"
              alt="logo img static"
              src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
              href="https://www.instagram.com/"
            ></img>
          </div>
        </div>

        <div className="component-input-login">
          <div className="form  ">
            <Logo />
            <div className="input-form">
              <input
                type="text"
                id="userName"
                placeholder="username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>

            <div className="input-form">
              <input
                className="component-input-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <div>
              <button
                className={
                  userName.length < 5 ||
                  email.search("@") === -1 ||
                  password.length < 4 ||
                  loading
                    ? "btn-login disable"
                    : "btn-login"
                }
                disable={
                  userName.length < 5 ||
                  email.search("@") === -1 ||
                  password.length < 4 ||
                  loading
                }
                onClick={() => loginUser()}
              >
                {!loading ? "Log In" : "Loading..."}
              </button>
            </div>
            <div>
              <div className="add-login-way">or</div>
            </div>
            <button className="fb-box">
              <a
                className="link-login-fb"
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221ruvvfiai6c4b3mdm3513zekxw1v8k8h5k3q3cfyk3k9h1wbqum2%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Da34713b8-372b-4029-b220-e466f0ac978c%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221ruvvfiai6c4b3mdm3513zekxw1v8k8h5k3q3cfyk3k9h1wbqum2%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0"
              >
                <span className="fb-icon">
                  <MdFacebook />
                </span>
                <span className="fb-login" href="https://www.facebook.com/">
                  Log in with a facebook
                </span>
              </a>
            </button>
          </div>
          <div className="creat-acc">
            <p>
              Don't Have an account?{" "}
              <a
                className="create-acc"
                href="https://www.instagram.com/accounts/emailsignup/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Sign up</span>
              </a>
            </p>
          </div>
          <div className="download-store">
            <p>Get the app.</p>
            <div>
              <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
                <img
                  className="btn-store"
                  alt="Avaliable on the App Store"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA9F2A0D2-EFAB-4F43-BE45-7AC79A645746%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img
                  className="btn-store"
                  alt="Avaliable on the App Store"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
