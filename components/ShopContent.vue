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
                                <li><NuxtLink to="/shop/shop-single">Shop Item</NuxtLink></li>
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
                    <main id="main" class="site-main" role="main">
                    <p class="woocommerce-result-count">
                        Showing 1–8 of 12 results
                    </p>
                    <form class="woocommerce-ordering" method="get">
                        <select name="orderby" class="orderby">
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by newness</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </form>
                    <ul class="products">
                    
                        <li class="first product">
                        <a href="shop-single.html">
                        <span class="onsale">Sale!</span>
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j4-520x520.jpg" alt="">
                        <h3>Cool Fedora</h3>
                        <span class="price"><span class="amount">$34.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>

                        <li class="product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j10-520x780-520x600.jpg" alt="">
                        <h3>Beige Blouse</h3>
                        <span class="price"><span class="amount">$66.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                        <li class="product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j1-520x780-520x600.jpg" alt="">
                        <h3>Black Jacket</h3>
                        <span class="price"><span class="amount">$125.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                        <li class="last product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j9-520x780-520x600.jpg" alt="">
                        <h3>Brown Jacket</h3>
                        <span class="price"><span class="amount">$28.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                        <li class="first product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j12-520x668-520x600.jpg" alt="">
                        <h3>Gray Blouse</h3>
                        <span class="price"><span class="amount">$15.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                        <li class="product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/f11-520x755-520x600.jpg" alt="">
                        <h3>Male Bag</h3>
                        <span class="price"><span class="amount">$16.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                        <li class="product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j6-520x779-520x600.jpg" alt="">
                        <h3>Hugo Jeans</h3>
                        <span class="price"><span class="amount">$36.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                        <li class="last product">
                        <a href="shop-single.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j2-520x780-520x600.jpg" alt="">
                        <h3>Male T-Shirt</h3>
                        <span class="price"><span class="amount">$49.00</span></span>
                        </a><a href="#" class="button">Add to cart</a>
                        </li>
                        
                    </ul>
                    <nav class="woocommerce-pagination">
                    <ul class="page-numbers">
                        <li><span class="page-numbers current">1</span></li>
                        <li><a class="page-numbers" href="#">2</a></li>
                        <li><a class="next page-numbers" href="#">→</a></li>
                    </ul>
                    </nav>
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

<script>
    export default {
        
    }
</script>