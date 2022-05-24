<script>
    let search=""
</script>



<div class="jumbotron" style="padding: 10px;">
    <div class="navbar navbar-expand-lg">
		<a href="/"><img src="\src\lib\header\reel.png" width="80" height="80" alt=""></a>
        <nav class="nav navbar-nav mr-auto">
            <a sveltekit:prefetch href="/popular" class="nav-item nav-link">Popular</a>
            <a sveltekit:prefetch href="/popularKids" class="nav-item nav-link" >Popular kids movie</a>
        </nav>
        <nav class="nav navbar-nav ml-auto">
            <form class="nav-item justify-content-end" role="search">
                <div class="input-group">
                    <input bind:value={search}  type="text" class="form-control" placeholder="Search">
                    <a href="/search/{search}" class="nav-item nav-link"><button class="btn btn-default"><i class="fa fa-search"></i></button></a>
                </div>
            </form>
        </nav>
    </div>
</div>
