
//UNREAD MSG PART & COUNT PART--->

let unReadMessages = document.querySelectorAll('.unread');
let unReadMessagesCount = document.getElementById('num-notif');
let markAll = document.getElementById('mark-as-read');

unReadMessagesCount.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove('unread');
        const newUnreadMessages = document.querySelectorAll('.unread');
        unReadMessagesCount.innerText  = newUnreadMessages.length;
    });
});

//MARK AS ALL READ PART--->

markAll.addEventListener('click', () => {
    unReadMessages.forEach((message) => {
        message.classList.remove('unread');
        const newUnreadMessages = document.querySelectorAll('.unread');
        unReadMessagesCount.innerText = newUnreadMessages.length;
    });
});




















