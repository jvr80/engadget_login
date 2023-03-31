import React from 'react'

const Hero = () => {
  return (
    <>


<div class="container">
        <div class="containt">
            <img src="./image/elog.png" alt=""/>
            <h1>Welcome To Engadget</h1>
            <p>Create an account and join the commnity</p>
        </div>



        {/* <!-- Section page laout --> */}


        <div class="login-page">
            <img src="image/elog.png" alt=""/>
            <p>Sing in</p>
            <div class="input-text">
                <input type="Email" placeholder="Email Address" class="input-Email"/>
                <input type="submit" value="Next" class="input-next" placeholder=""/>

            </div>

            <div class="signed-link">
                <div>
                    <span>
                        <input type="checkbox" value="sing-in" placeholder=""/>
                        Stay signed in</span>
                </div>
                <div>
                    <span>Forgot username?</span>
                </div>
            </div>

            <div class="input-create">
                <input type="submit" value="Create an account" class="input-account"/>

            </div>

            <div class="para">
                <p>Or, Continue With</p>
            </div>

            {/* <!-- <div class="input-create">
                <input type="submit" value="Google" class="input-google">

            </div> --> */}

            <div>
                <button><i class="fa-brands fa-google"></i>Google</button>
            </div>


            <div class="footer-bar">
                <p>Terms | Privacy</p>
            </div>



        </div>
    </div>

    
    
    
    </>
  )
}

export default Hero