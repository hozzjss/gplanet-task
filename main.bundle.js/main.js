'use strict';

$(document).ready(function () {
    $('.star.rating').click(function () {
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
    var generateNewStar = function generateNewStar(dataRating) {
        return '<svg height="25" width="23" class="star rating" data-rating="' + dataRating + '">\n                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" />\n                </svg>';
    };
    var generateNewUser = function generateNewUser() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Alexander Kallaway';
        var imgSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './assets/user.jpg';
        var stars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

        return '\n        <a class="list-group-item" href="#">\n            <div class="user">\n                <div class="img">\n                    <img class="img-responsive" src="' + imgSrc + '" alt="">\n                </div>\n                <div class="review-excerpt">\n                    <h5>Super Good</h5>\n                    <div class="stars" data-stars="' + stars + '">\n                        ' + generateNewStar(1) + '\n                        ' + generateNewStar(2) + '\n                        ' + generateNewStar(3) + '\n                        ' + generateNewStar(4) + '\n                        ' + generateNewStar(5) + '\n                    </div>\n                    <div class="name">\n                        <h6>' + name + '</h6>\n                    </div>\n                    <div class="message-excerpt">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam odit mollitia, architecto enim autem ipsa earum cupiditate\n                        itaque odio nam.\n                    </div>\n                </div>\n            </div>\n        </a>';
    };
    var userList = $('.user-list .list-group');
    for (var i = 0; i < 5; i += 1) {
        userList.append(generateNewUser());
    }
});