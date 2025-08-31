

function MainPage() {
    return (
        <>
            <div className="rectangle-2" id="rectangle-2">

                <div className="scroll-content">

                    <div className="features">
                        <div className="main-feature-parent">
                            <h2 className="main-feature">Our Main Features</h2>
                        </div>
                        <div className="flashcards">
                            <h3>Flashcards</h3>
                            <p>Memorize your notes with our flashcards! FlashyCards flashcards are not just your ordinary
                                flashcards, we use advanced algorithms so you can memorize your notes effectively and
                                efficiently. Come and try it now!</p>
                        </div>
                        <div className="match">
                            <h3>Match</h3>
                            <p>Do you want to learn while having fun? Try our match feature, where FlashyCards gamify your notes
                                with one click! Not just that, we also have leaderboards, so you can be competitive while
                                learning!</p>
                        </div>
                        <div className="multiple-choice">
                            <h3>Multiple Choice</h3>
                            <p>Study like you're taking a real exam with our multiple choice feature. Our powerful A.I. helps
                                you master your notes efficiently, boost retention, and learn effectively anytime, anywhere you
                                go.</p>
                        </div>
                        <div className="many-more">
                            <h3>Many More</h3>
                            <p>FlashyCards offers more than just our top three features! With smart A.I. and proven learning
                                techniques, you can explore, study efficiently, and gamify your subject notes for better
                                retention.</p>
                        </div>
                    </div>

                    <div className="wrapper-grid">
                        <div className="why-choose-us">
                            <h2>Why Choose Us?</h2>
                            <div className="first-box top-right">
                                <h3>It's Lightning <span>FAST!</span></h3>
                                <p>FlashyCards, it's lightning fast! We prioritize speed and efficiency so our users won't
                                    experience slow and laggy situations, like other websites do.</p>
                            </div>
                            <div className="second-box bottom-right">
                                <h3>We Offer A Lot Of Learning Tools</h3>
                                <p>
                                    We also pride ourselves for our learning tools, from our basic key features to our A.I
                                    features our users can learn effectively and efficiently with it.
                                </p>
                            </div>
                            <div className="third-box bottom-left">
                                <h3>We Prioritize Our Users</h3>
                                <p>
                                    We prioritize our users feedbacks. Bugs, from basic request to complex feature request we
                                    acknowledge their suggestions all the time.
                                </p>
                            </div>
                        </div>
                    </div>




                    <div className="feedbacks">
                        <div className="feedback-header-container">
                            <h2 className="feedbacks-header">Feedbacks From Our Top Users</h2>
                        </div>
                        <div className="feedback-1">
                            <div className="profile-1 profile-icon"></div>
                            <div className="feedbacker-name-1">User_1</div>
                            <div className="feedbacker-1 feedback">"This website is a game changer. I was struggling to learn
                                all my
                                notes for my upcoming test, and this website helped me a ton"</div>

                        </div>

                        <div className="feedback-2">

                            <div className="profile-2 profile-icon"></div>
                            <div className="feedbacker-name-2">User_2</div>
                            <div className="feedbacker-2 feedback">"Wow I can't believe it, this website is not just your
                                ordinary
                                flashcards website it has a lot of features too!
                            </div>

                        </div>

                        <div className="feedback-3">
                            <div className="profile-3 profile-icon"></div>
                            <div className="feedbacker-name-3">User_3</div>


                            <div className="feedbacker-3 feedback">"I really like the match feature of this website, other
                                websites
                                need subscription to use this kind of feature more than once,</div>

                        </div>

                        <div className="feedback-4">
                            <div className="profile-4 profile-icon"></div>
                            <div className="feedbacker-name-4">User-4</div>
                            <div className="feedbacker-4 feedback">"The A.I is just great! It's super convenient, we know that
                                their
                                are days our professors give us a lot of homework, and this website just saved me!"</div>

                        </div>
                    </div>
                    <h2 className="reach-us-header">Reach Us</h2>
                    <footer className="lotus-details">
                        <div className="about-container">
                            <h3 className="about-header">About</h3>
                            <div className="about">
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Investor</a></li>
                                    <li><a href="#">Legal</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services-container">
                            <h3 className="other-services-header">Other Services</h3>
                            <div className="other-services">
                                <ul>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Investor</a></li>
                                    <li><a href="#">Legal</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-container">
                            <h3 className="contact-us-header">Contact Us</h3>
                            <div className="contact-us">

                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Investor</a></li>
                                    <li><a href="#">Legal</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="feedbacks-container">
                            <h3 className="feedbacks-header">Feedbacks</h3>
                            <div className="user-feedbacks">
                                <ul>
                                    <li><a href="#">Feedbacks</a></li>
                                    <li><a href="#">Investor</a></li>
                                    <li><a href="#">Legal</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>

                            </div>
                        </div>
                    </footer>
                    <div className="logo-footer">
                        <div className="flashy-logo">
                            <a href="#">
                                <img src="thunder-bolt.webp" width="20px" height="20px" />
                                <p>FlashyCards</p>
                            </a>
                        </div>

                        <div className="lotus-tech-logo">
                            <a href="#">
                                <img src="lotus-logo.svg" width="20px" height="20px" />
                                <p>Lotus Tech.</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MainPage;