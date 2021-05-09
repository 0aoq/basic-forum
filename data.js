var defaultThreads = []

var defaultUsers = [{
    id: 0,
    username: "0aoq",
    bio: "Default user profile.",
    join_date: new Date().toLocaleString()
}]

var threads = defaultThreads
var users = defaultUsers

if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

if (localStorage && localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
} else {
    users = defaultUsers;
    localStorage.setItem('users', JSON.stringify(defaultUsers));
}