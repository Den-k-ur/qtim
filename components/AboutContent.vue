<!-- Please remove this file from your project -->
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
				
				<article class="hentry">
				<header class="entry-header">
				<h1 class="entry-title">About</h1>	
				</header>
				<!-- .entry-header -->

				<div class="entry-content">
				<p><img style="border:10px solid #f4f5f6" src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2016/04/14134452/about1.jpg" alt="bg5" width="430" class="alignright"></p>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<h2 style="font-family: 'Herr Von Muellerhoff';color:#ccc;font-weight:300;">Yours, Von Muellerhoff</h2>
				</div><!-- .entry-content -->
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

<script>

export default {
  name: 'AboutContent'
}
</script>
