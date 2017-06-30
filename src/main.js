$(document).ready(function () {
    const stars = 3;

    const generateNewStar = (dataRating) => {
        return `<svg height="25" width="23" class="star rating" data-rating="${dataRating}">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" />
                </svg>`
    }

    let fiveStars = '';
    for (let i = 1; i < 6; i += 1) {
        fiveStars += generateNewStar(i);
    }

    let fiveStillStars = '';
    for (let i = 1; i < 6; i += 1) {
        if (i > stars) {
            fiveStillStars += '<img src="./assets/Empty_Star.png">'
        } else {
            fiveStillStars += '<img src="./assets/Gold_Star.png">'
        }
    }
    const generateNewUser = (
        name = 'Alexander Kallaway',
        imgSrc = './assets/user.jpg',
        stars = stars,
        active = ""
    ) => {
        return `
        <a class="list-group-item ${active}" href="#">
            <div class="user">
                <div class="img">
                    <img class="img-responsive" src="${imgSrc}" alt="">
                </div>
                <div class="review-excerpt">
                    <h5>Super Good</h5>
                    <div class="still-stars">
                        ${fiveStillStars}
                    </div>
                    <div class="name">
                        <h6>${name}</h6>
                    </div>
                    <div class="message-excerpt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing...
                    </div>
                </div>
            </div>
        </a>`
    };
    const userList = $('.user-list .list-group');
    // add five stars to chat-info
    $('.chat-info .stars').append(fiveStars);

    // add five users
    let active = true;
    for (let i = 0; i < 4; i += 1) {
        userList.append(generateNewUser())
    }
    $('.star.rating').click(function () {
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
    const messagesEl = document.querySelector('.messages');
    const userListEl = document.querySelector('.user-list .list-group');
    const resizeLayout = () => {
        const userListHeight = userListEl.clientHeight;
        const messagesHeight = messagesEl.clientHeight;
        const calculatePadding = () => {
            const listGroupItemEl = document.querySelector('.user-list .list-group .list-group-item');
            const listGroupItemHeight = listGroupItemEl.clientHeight;
            return (userListHeight - (listGroupItemHeight * 5)) / 10;
        }
        if (window.innerWidth > 479) {
            setTimeout(() => {
                if (userListHeight > messagesHeight) {
                    messagesEl.style.minHeight = (userListHeight) + "px";
                }
                else if (userListHeight < messagesHeight) {
                    userListEl.style.minHeight = (messagesHeight - 22) + "px";
                    const difference = messagesHeight - userListHeight;
                    $('.message-excerpt').css('display', 'block');
                    if (difference > 0) {
                        const padding = calculatePadding();
                        if (padding > 6) {
                            $('.user-list .list-group .list-group-item').css('padding-top', `${padding}px`);
                            $('.user-list .list-group .list-group-item').css('padding-bottom', `${padding}px`);
                        }
                    }
                }
            }, 50)
        }
    };
    window.onresize = resizeLayout;
    resizeLayout();
});