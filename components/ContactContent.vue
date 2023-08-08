<template>
    <div id="page">
        <div class="container">
            <header id="masthead" class="site-header">
                <div class="site-branding">
                    <h1 class="site-title"><NuxtLink to="/" rel="home">Moschino</NuxtLink></h1>
                    <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
                </div>
                <nav id="site-navigation" class="main-navigation">
                    <button class="menu-toggle">Menu</button>
                    <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
                    <div class="menu-menu-1-container">
                        <ul id="menu-menu-1" class="menu">
                            <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li><NuxtLink to="/about">About</NuxtLink></li>
                            <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                            <li><NuxtLink to="/elements">Elements</NuxtLink></li>
                            <li><NuxtLink to="#">Pages</NuxtLink>
                            <ul class="sub-menu">
                                <li><NuxtLink to="/portfolio-item">Portfolio Item</NuxtLink></li>
                                <li><NuxtLink to="/blog-single">Blog Article</NuxtLink></li>
                                <li><NuxtLink to="/shop-single">Shop Item</NuxtLink></li>
                                <li><NuxtLink to="/portfolio-category">Portfolio Category</NuxtLink></li>
                            </ul>
                            </li>
                            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <!-- #masthead -->
            <div id="content" class="site-content">
                <div id="primary" class="content-area column full">
                    <main id="main" class="site-main">
                    <article id="post-39" class="post-39 page type-page status-publish hentry">
                    <header class="entry-header">
                    <h1 class="entry-title">Contact</h1>
                    </header>
                    <!-- .entry-header -->
                    <div class="entry-content">
                            
                        <!-- BEGIN MAP -->
                        <div style='overflow:hidden;height:380px;width:100%;'>
                        <div id='gmap_canvas' style='height:380px;width:100%;'></div>
                        <div>embed google maps</div>
                        </div>
                        <!-- END MAP -->
                            
                        <div class="wpcmsdev-columns">
                            <div class="column column-width-one-half">
                                <h4>Quick Contact</h4>						
                                
                                <form class="wpcf7" method="post" action="contact.php" id="contactform">
                                    <div class="form">
                                        <p><input type="text" name="name" placeholder="Name *"></p>
                                        <p><input type="text" name="email" placeholder="E-mail Address *"></p>
                                        <p><textarea name="comment" rows="3" placeholder="Message *"></textarea></p>
                                        <input type="submit" id="submit" class="clearfix btn" value="Send">
                                    </div>
                                </form>
                                <div class="done">								
                                    Your message has been sent. Thank you!
                                </div>
                                
                            </div>
                            <div class="column column-width-one-half">
                                <h4>Find Us: (888) 252 389 3571</h4>
                                <p>
                                    If you want to hire me or have any feedback or questions about our service in general, please send us a message by completing our enquiry form. It’s best to call though, someone we’ll always be there for you.
                                </p>
                                <p>
                                    Monday – Friday: 9am to 5pm<br>
                                    Saturday: 10am to 2pm<br>
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- .entry-content -->
                    </article>
                    </main>
                    <!-- #main -->
                </div>
                <!-- #primary -->
            </div>
            <!-- #content -->
        </div>
        <!-- .container -->
        <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="site-info">
                <h1 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">Moschino</h1>
                <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
            </div>
        </div>
        </footer>
        <a href="#top" class="smoothup" title="Back to top"><span class="genericon genericon-collapse"></span></a>
    </div>
</template>

<script setup lang="ts">
  
</script>