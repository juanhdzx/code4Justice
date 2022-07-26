import React, { Component } from 'react';
//import "./footer.css";

class Footer extends Component {
    render(){
        return(

            <footer id="footer">
                <section className="social-media">
                    <a href="https://www.facebook.com/"  class="fa fa-facebook" aria-label="Facebook"> </a>
                    <a href="https://www.twitter.com/"   class="fa fa-twitter" aria-label="Twitter"> </a>
                    <a href="https://www.instagram.com/"  class="fa fa-instagram" aria-label="Instagram"> </a>
                </section>

                <div className="footer-text">
                    <div className="copyright">
                        <p>copyright - 2022 Juan Hernandez | OFFICIAL SITE, ALL RIGHTS RESERVED</p>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer 