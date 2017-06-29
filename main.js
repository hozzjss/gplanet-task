$(document).ready(function () {
    const generateNewStar = (dataRating) => {
        return `<svg height="25" width="23" class="star rating" data-rating="${dataRating}">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" />
                </svg>`
    }
    let fiveStars = '';
    for (let i = 1; i < 6; i += 1) {
        fiveStars += generateNewStar(i);
    }
    const generateNewUser = (
        name = 'Alexander Kallaway',
        imgSrc = './assets/user.jpg',
        stars = '1'
    ) => {
        return `
        <a class="list-group-item" href="#">
            <div class="user">
                <div class="img">
                    <img class="img-responsive" src="${imgSrc}" alt="">
                </div>
                <div class="review-excerpt">
                    <h5>Super Good</h5>
                    <div class="stars" data-stars="${stars}">
                        ${fiveStars}
                    </div>
                    <div class="name">
                        <h6>${name}</h6>
                    </div>
                    <div class="message-excerpt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam odit mollitia, architecto enim autem ipsa earum cupiditate
                        itaque odio nam.
                    </div>
                </div>
            </div>
        </a>`
    };
    const userList = $('.user-list.list-group');
    // add five stars to chat-info
    $('.chat-info .stars').append(fiveStars);

    // add five users
    for (let i = 0; i < 5; i += 1) {
        userList.append(generateNewUser())
    }
    $('.star.rating').click(function () {
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
});