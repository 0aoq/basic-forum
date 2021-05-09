var defaultThreads = [{
        "id": 0,
        "title": "/dev/",
        "author": "You",
        "date": "5/8/2021, 10:58:48 PM",
        "content": "Development",
        "locked": false,
        "comments_allowed": false,
        "comments": []
    },
    {
        "id": 1,
        "title": "Comments Enabled",
        "author": "You",
        "date": "5/8/2021, 10:59:03 PM",
        "content": "",
        "locked": false,
        "comments_allowed": true,
        "comments": [{
                "number": 0,
                "author": "You",
                "date": "5/8/2021, 11:00:06 PM",
                "content": "<p>Comment testing.</p>\n<h1 id=\"h1\">h1</h1>\n<h2 id=\"h2\">h2</h2>\n<h3 id=\"h3\">h3</h3>\n<h3 id=\"h4\">h4</h3>\n<h4 id=\"h5\">h5</h4>\n<h5 id=\"h6\">h6</h5>\n<pre><code>code block\n</code></pre>\n<blockquote>\n<p>blockquote</p>\n</blockquote>\n"
            },
            {
                "number": "1",
                "author": "[removed]",
                "date": "[removed]",
                "content": "[removed]"
            }
        ]
    },
    {
        "id": "_",
        "title": "[removed]",
        "content": "[removed]",
        "date": "(Removed Date) 5/8/2021, 11:00:26 PM",
        "locked": true
    }
]

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