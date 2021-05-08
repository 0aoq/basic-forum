var defaultThreads = [{
        id: 0,
        title: "Thread 1",
        author: "Aaron",
        date: new Date().toLocaleString(),
        content: "Thread content",
        locked: false,
        comments: [{
                number: 0,
                author: "Jack",
                date: new Date().toLocaleString(),
                content: "Hey there"
            },
            {
                number: 1,
                author: "Arthur",
                date: new Date().toLocaleString(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 1,
        title: "Thread 2",
        author: "Aaron",
        date: new Date().toLocaleString(),
        content: "Thread content 2",
        locked: false,
        comments: [{
                number: 0,
                author: "Jack",
                date: new Date().toLocaleString(),
                content: "This is the second thread!"
            },
            {
                number: 1,
                author: "Arthur",
                date: new Date().toLocaleString(),
                content: "Yeah man!!"
            }
        ]
    }
]

var threads = defaultThreads

if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}