(function(window) {
    function triggerCallback(e, callback) {
        if(!callback || typeof callback !== 'function') {
            return;
        }
        var files;
        if(e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if(e.target) {
            files = e.target.files;
        }
        callback.call(null, files);
    };
    function makeDroppable(ele, callback) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('multiple', true);
        input.style.display = 'none';
        input.setAttribute('id', 'file');
        input.addEventListener('change', function(e) {
            triggerCallback(e, callback);
        });
        ele.appendChild(input);

        ele.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.stopPropagation();
            ele.classList.add('dragover');
        });

        ele.addEventListener('dragleave', function(e) {
            e.preventDefault();
            e.stopPropagation();
            ele.classList.remove('dragover');
        });

        ele.addEventListener('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            ele.classList.remove('dragover');
            triggerCallback(e, callback);
        });

        ele.addEventListener('click', function() {
            input.value = null;
            input.click();
        });
    }
    window.makeDroppable = makeDroppable;

})(this);

(function(window) {
    makeDroppable(window.document.querySelector('.droppable'), function(files) {
        console.log(files[0]);
    });
})(this);

$(document).ready(function(){
    $("#file").change(function(){
        var file = $(this)[0].files[0];
        var reader = new FileReader;
        var modal = $("#modal");
        var span = $(".close");
        var fType = file.name.split(".")[1];

        if (fType == "bmp" || fType == "png" || fType == "jpg" || fType == "jpeg" || fType == "gif") {
            $(reader).on("load", function(e) {
                $(".droppable").css("background-image", `url(${e.currentTarget.result})`);
            });
            reader.readAsDataURL(file);
        } else {
            modal.css("display", "block");
            span.click(function(){
                modal.css("display", "none");
            });
            $(window).click(function(event){
                if (event.target == modal[0])
                    modal.css("display", "none");
            });
        }
    }) 
});

$("#price").keypress(function(event){
    if (event.which == 46 || event.which >= 48 && event.which <= 57) {
        return;
    } else {
        event.preventDefault();
    };  
});

$("#price").keyup(function(event){
    if (event.which == 8) {
        this.value = this.value.slice(0, -2);
    };
    $(this).val(function(i,v) {
        return v.replace(' $','') + " $";
    });
    
    if (event.which == 8 && this.value.length <= 2) {
        this.value = '';
    };
});

$("button:reset").mousedown(function(){
    $(".droppable").css("background-image", "none");
});