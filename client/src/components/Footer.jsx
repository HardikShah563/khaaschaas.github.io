// importing from react
import { useNavigate } from "react-router";
// importing stylesheet
import "../style/footer.css";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <footer class="footer" id="footer">
                <div class="footer-sections">
                    <div class="foot-section">
                        <img
                            class="footer-logo"
                            src={
                                process.env.PUBLIC_URL +
                                "/images/whitelogo.png"
                            }
                            alt="khaas chaas logo"
                        />
                    </div>

                    <div class="foot-section">
                        <li class="heading yellow-text"><span class="foot-heading bobby">Home</span></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Flavours</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Merch</a></li>
                    </div>

                    <div class="foot-section">
                        <li class="heading yellow-text"><span class="foot-heading bobby">Shop</span></li>
                        <li><a href="#">Masala Chaas</a></li>
                        <li><a href="#">Pudina Spicy Chaas</a></li>
                        <li><a href="#">Classic Punjabi Lassi</a></li>
                        <li><a href="#">Bluberry Lassi</a></li>
                    </div>

                    <div class="foot-section">
                        <li class="heading yellow-text"><span class="foot-heading bobby">Company</span></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Review Lassi</a></li>
                        <li><a href="#">FAQ</a></li>
                    </div>

                    <div class="foot-section">
                        <li class="heading yellow-text"><span class="foot-heading bobby">Social</span></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </div>
                </div>

                <hr className="footer-hr" />

                <div class="below-footer-links">
                    <div class="below-footer-section privacy-policy">
                        <li><a href="#"><span class="yellow-text">Terms</span></a></li>
                        <li><a href="#"><span class="yellow-text">Privacy</span></a></li>
                        <li><a href="#"><span class="yellow-text">Policy</span></a></li>
                    </div>

                    <div class="below-footer-section gap30 below-footer-brands">
                        <a target="_blank" href="https://instagram.com/thekhaaschaas/"><i class="fa-brands fa-instagram"></i></a>
                        <a target="_blank" href=""><i class="fa-brands fa-youtube"></i></a>
                        <a target="_blank" href=""><i class="fa-brands fa-twitter"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/company/khaas-chaas/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>

                    <div class="below-footer-section">
                        <span>@2023&nbsp;</span>
                        <span class="yellow-text">TheKhaasChaas&nbsp;</span>
                        <span>|&nbsp;All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </>
    );
};
