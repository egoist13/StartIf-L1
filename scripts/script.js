$(window).ready(function(){
    function setRating(rating) {
        var r = [];
        for (var i = 1; i <= 5; i++, rating--) {
            if (rating > 0) {
                r.unshift("<span>&#9733;</span>");
            } else {
                r.unshift("<span>&#9734;</span>");
            };
        };
        return r.join('');
    };
    
    var txt = '';
    for (i in gallery) {
        if ( (i % 4) === 1 ) {
            txt += `<div class="row">`;
        };
        txt += `<div class="col-sm-6 col-md-3">
                    <div class="panel panel-primary">
                        <div class="panel-body">
                            <img src="images/` + i + `.jpg" class="img-responsive" alt="img">
                        </div>
                        <div class="panel-footer">
                            <a href="product.html">` + gallery[i].name + `</a>
                            <p class="more">` + gallery[i].description + `</p>
                            <div class="clearfix"></div>
                            <p class="container-fluid flex-container space-between">
                                <span class="label label-info lb-lg">` + gallery[i].price + `$</span>
                                <span class="rating">
                                    ` + setRating(gallery[i].rating) + `
                                </span>
                            </p>
                            <div class="container-fluid flex-container space-between">
                                <button type="button" class="btn btn-success btn-sm">Buy Now!</button>
                                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal">Add to Cart!</button>
                            </div>
                        </div>
                    </div>
                </div>`
        
        if ( (i % 4) === 0 ) {
            txt += `</div>`;
        };
    };
    
    if ( (i % 4) !== 0 ) {
        txt += '</div>';
    };
    
    $("#product").html(txt);
});