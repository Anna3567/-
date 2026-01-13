    var cursor1 = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $small: document.querySelector(".cursor_small"),
    $big: document.querySelector(".cursor_big"),
    
    init: function() {
        this.smallSize = this.$small.offsetWidth;
        this.bigSize = this.$big.offsetWidth;

        this.event();
        this.animate();
    },

    event: function() {
        var main = this;
        document.querySelectorAll("a").forEach(function(t) {
            t.addEventListener("mouseover", function() {
                    main.cursorEnlarged = true;
                    main.cursorSize();
            });
            t.addEventListener("mouseout", function() {
                    main.cursorEnlarged = false;
                    main.cursorSize();
            });
        });
        document.addEventListener("mousedown", function() {
                main.cursorEnlarged = true;
                main.cursorSize();
        });
        document.addEventListener("mouseup", function() {
                main.cursorEnlarged = false;
                main.cursorSize();
        });
        document.addEventListener("mousemove", function(e) {
                main.cursorVisible = true;
                main.Visible();

                main.endX = e.clientX;
                main.endY = e.clientY;
                main.$small.style.top = main.endY + "px";
                main.$small.style.left = main.endX + "px";
        });

        document.addEventListener("mouseenter", function(e) {
                main.cursorVisible = true;
                main.Visible();
                main.$small.style.opacity = 1;
                main.$big.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function(e) {
                main.cursorVisible = true;
                main.Visible();
                main.$small.style.opacity = 0;
                main.$big.style.opacity = 0;
        });
    },
            
    animate: function(){
        var main = this;
        main._x += (main.endX - main._x) / main.delay;
        main._y += (main.endY - main._y) / main.delay;
        main.$big.style.top = main._y + "px";
        main.$big.style.left = main._x + "px";
        requestAnimationFrame(this.animate.bind(main));
    },
    cursorSize: function(){
    var main = this;
        
        if (main.cursorEnlarged) {
            main.$small.style.transform = "translate(-50%, -50%) scale(4)";
            main.$big.style.transform = "translate(-50%, -50%) scale(0)";
        } else {
            main.$small.style.transform = "translate(-50%, -50%) scale(1)";
            main.$big.style.transform = "translate(-50%, -50%) scale(1)";
        }
    },


    Visible: function() {
        var main = this;
    
        if (main.cursorVisible) {
            main.$small.style.opacity = 1;
            main.$big.style.opacity = 1;
        } else {
            main.$small.style.opacity = 0;
            main.$big.style.opacity = 0;
        }
    }
}
cursor1.init();







