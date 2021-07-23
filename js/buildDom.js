class buildCards {
    constructor() {

    }

    h2(title) {
        const h2 = $("<h2></h2>");
        $(h2).addClass(title);
    }

    p(content) {
        const p = $("<p></p>");
        $(p).text(content);
        return p;
    }

    img(src) {
        const img = $("<img>");
        $(img).attr("src", src);
        return img;
    }


}