'use strict';

$(document).ready(function () {
    var stars = 3;

    var generateNewStar = function generateNewStar(dataRating) {
        return '<svg height="25" width="23" class="star rating" data-rating="' + dataRating + '">\n                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" />\n                </svg>';
    };

    var fiveStars = '';
    for (var i = 1; i < 6; i += 1) {
        fiveStars += generateNewStar(i);
    }

    var fiveStillStars = '';
    for (var _i = 1; _i < 6; _i += 1) {
        if (_i > stars) {
            fiveStillStars += '<img src="./assets/Empty_Star.png">';
        } else {
            fiveStillStars += '<img src="./assets/Gold_Star.png">';
        }
    }
    var generateNewUser = function generateNewUser() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Alexander Kallaway';
        var imgSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './assets/user.jpg';
        var stars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stars;
        var active = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

        return '\n        <a class="list-group-item ' + active + '" href="#">\n            <div class="user">\n                <div class="img">\n                    <img class="img-responsive" src="' + imgSrc + '" alt="">\n                </div>\n                <div class="review-excerpt">\n                    <h5>Super Good</h5>\n                    <div class="still-stars">\n                        ' + fiveStillStars + '\n                    </div>\n                    <div class="name">\n                        <h6>' + name + '</h6>\n                    </div>\n                    <div class="message-excerpt">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing...\n                    </div>\n                </div>\n            </div>\n        </a>';
    };
    var userList = $('.user-list .list-group');
    // add five stars to chat-info
    $('.chat-info .stars').append(fiveStars);

    // add five users
    var active = true;
    for (var _i2 = 0; _i2 < 5; _i2 += 1) {
        userList.append(generateNewUser());
    }
    $('.star.rating').click(function () {
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
});