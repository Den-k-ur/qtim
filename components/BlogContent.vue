


<template>
    <div id="page">
        <div class="container">
            <header id="masthead" class="site-header">
            <div class="site-branding">
                <h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
                <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
            </div>
            <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle">Menu</button>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div class="menu-menu-1-container">
                <ul id="menu-menu-1" class="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="#">Pages</a>
                    <ul class="sub-menu">
                        <li><a href="portfolio-item.html">Portfolio Item</a></li>
                        <li><a href="blog-single.html">Blog Article</a></li>
                        <li><a href="shop-single.html">Shop Item</a></li>
                        <li><a href="portfolio-category.html">Portfolio Category</a></li>
                    </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            </nav>
            </header>
            <!-- #masthead -->
            <div id="content" class="site-content">
                <div id="primary" class="content-area column two-thirds">
                    <main id="main" class="site-main" role="main" v-for="post in store.posts" :key="post.id">
                        <div class="grid bloggrid">
                        
                            <article>
                            <header class="entry-header">
                            <h1 class="entry-title"><a href="blog-single.html" rel="bookmark">{{ post.title }}</a></h1>
                            <div class="entry-meta">
                                <span class="posted-on"><time class="entry-date published">{{ new Date(post.createdAt).toLocaleString('en-EN', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }) }}</time></span>						
                                <span class="comments-link"><a href="#">Leave a comment</a></span>
                            </div>
                            <div class="entry-thumbnail">						
                                <img :src="post.image" alt="preview image">
                            </div>
                            </header>
                            <div class="entry-summary">
                                <p>
                                    {{ post.preview }}
                                </p>
                            </div>
                            <div class="entry-summary">
                                <p>
                                    {{ post.description }}
                                </p>
                            </div>
                            <footer class="entry-footer">
                            </footer>
                            </article>
                            
                        </div>
                        <div class="clearfix">
                        </div>
                    </main>
                    <!-- #main -->
                </div>
                <!-- #primary -->
                
                <div id="secondary" class="column third">
                    <div id="sidebar-1" class="widget-area" role="complementary">
                        
                        <aside id="text-5" class="widget widget_text">
                            <h4 class="widget-title">About Me</h4>
                            <div class="textwidget">
                                <p>
                                    <img src="http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png" class="alignleft" style="width:80px;border-radius:50%;margin-bottom:0;"> I'm a professional photographer for 10 years. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                    </aside>
                    
                    <aside id="recent-posts-2" class="widget widget_recent_entries">
                        <h4 class="widget-title">Recent Posts</h4>
                        <ul>
                            <li>
                                <a href="blog-single.html">Somewhere in time</a>
                            </li>
                            <li>
                                <a href="blog-single.html">Thanks for watching!</a>
                            </li>
                            <li>
                                <a href="blog-single.html/">Who could have thought?</a>
                            </li>
                            <li>
                            <a href="blog-single.html">Text Alignement</a>
                        </li>
                        <li>
                            <a href="blog-single.html">HTML Tags and Formatting</a>
                        </li>
                    </ul>
                </aside>
                
                <aside id="text-6" class="widget widget_text">
                    <h4 class="widget-title">Like us on Facebook</h4>
                    <div class="textwidget">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwowthemesnet-562560840468823%2F&amp;tabs=timeline&amp;width=340&amp;height=380&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId=365036103630036" width="340" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true">
                        </iframe>
                    </div>
                </aside>
                
                <aside id="recent-comments-2" class="widget widget_recent_comments">
                    <h4 class="widget-title">Recent Comments</h4>
                    <ul id="recentcomments">
                        <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                        <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                        <li class="recentcomments"><span><a href="#" rel="external nofollow" class="url">Mr WordPress</a></span> on <a href="blog-single.html">Thanks for watching!</a></li>
                        <li class="recentcomments"><span>Maria</span> on <a href="blog-single.html">Gray Blouse</a></li>
                        <li class="recentcomments"><span>Maria</span> on <a href="blog-single.html">Retro Dress</a></li>
                    </ul>
                </aside>
                
                <aside id="text-7" class="widget widget_text">
                    <h4 class="widget-title">Follow us</h4>
                        <div class="textwidget">
                            <!-- Place this tag in your head or just before your close body tag. -->
                            <!-- Place this tag where you want the widget to render. -->
                            <div id="___page_0" style="text-indent: 0px; margin: 0px; padding: 0px; border-style: none; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 300px; height: 377px; background: transparent;">
                                <iframe frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 300px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 377px;" tabindex="0" vspace="0" width="100%" id="I0_1460806394603" name="I0_1460806394603" src="https://apis.google.com/u/0/_/widget/render/page?usegapi=1&amp;href=%2F%2Fplus.google.com%2Fu%2F0%2F110916582192388695332&amp;rel=publisher&amp;origin=http%3A%2F%2Fwww.themepush.com&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.5rbYCKK8ELg.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCNt4tfE4T2zmac5ke0V9FW49A3yCA#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1460806394603&amp;parent=http%3A%2F%2Fwww.themepush.com&amp;pfname=&amp;rpctoken=19037393" data-gapiattached="true" title="+Badge">
                                </iframe>
                            </div>
                        </div>
                    </aside>
                    
                </div>
                <!-- .widget-area -->
            </div>
            <!-- #secondary -->
        </div>
        <!-- #content -->
        <nav class="pagination">
            <span>
               &lt;&lt; prev
            </span>
            <span v-for="page in maxPages">
                <span class="current" v-if="page === store.p" :key="page">
                    {{ page }}
                </span>
                <span class="paginationButton" v-else @click="setCurrentPageAndRefresh(page)">
                    {{ page }}
                </span>
            </span>
            <span>
                Next >>
            </span>
        </nav>
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
    import { postDTO } from 'models/post.dto';
    import { usePostsStore } from '../store/posts';
    import { storeToRefs } from 'pinia'


    const store = usePostsStore();
    const {p} = storeToRefs(store);



    const currentPage = p
    
    console.log(currentPage.value)
        
    const allPagePosts = await $fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`)
    store.calculateMaxPages(allPagePosts as postDTO[], 10)
    const maxPages = store.maxPages
       


    const { data } = await useAsyncData(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts?l=10`, () => $fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`, {
        params: {
        p: currentPage.value,
        l: 10
    }}),
    {watch: [currentPage]}
    )

    watch(data, (datav) => {store.posts = datav as postDTO[]; console.log(store.posts)})
    store.posts = data.value as postDTO[] 
    
    console.log(p.value)
    
    
    const setCurrentPageAndRefresh = (page: number) => {
        store.setPage(page);
        
    }    


</script>