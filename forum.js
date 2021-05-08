var id = window.location.search.slice(1)
var thread = threads.find(t => t.id == id)

const getCurrentDate = function() {
    return new Date().toLocaleString()
}

const thread_date = getCurrentDate()

function removeComment(comment) {
    thread.comments[comment] = {
        number: comment,
        author: "[removed]",
        date: "[removed]",
        content: "[removed]"
    }
    window.location.reload()
    localStorage.setItem('threads', JSON.stringify(threads));
}

if (id) {
    document.title = thread.title + ` (/thread/${thread.id}/)`

    window.localStorage.setItem("dev__thread_1", `
        
            <div class="page-container" style="gap: 1em;" id="main_thread_content">
                <div class="card" style="margin-bottom: 20px;" id="thread">
                    <div class="content">
                        <header style="text-align: center; margin-bottom: 20px;">
                            <h1 id="post__title">${thread.title}</h1>

                            <span><b>/thread/${thread.id}/</b> • </span>
                            <span id="thread__date" style="color: gray;">${'Started: ' + thread_date}</span>
                        </header>

                        <article>
                            <span>
                                ${thread.content}
                            </span>

                            <div id="comments" style="margin-top: 20px;">
                                <div class="card comment effect">
                                    <div class="content">
                                        <a id="add_comment" onclick="open_comment_modal()">Add Comment</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
            `)

    const html_thread = find('#thread')
    const content = window.localStorage.getItem("dev__thread_1")

    if (content) {
        html_thread.innerHTML = content
    }

    find("#comment_box").addEventListener('input', () => {
        find("#preview").innerHTML = marked(find("#comment_box").value)
        find("#characterlimit").innerHTML = `${find("#comment_box").value.length}/2000 Characters Max`
    })

    function addComment(comment) {
        document.getElementById("comment_modal").style.display = "none"
        find("#comments").innerHTML += `<div class="card comment effect">
                    <div class="content">
                        <a class="comment__name" href="#">${comment.author}</a>
                        <span class="comment__date" style="color: gray">${'Posted: ' + comment.date}</span>
                        <a onclick="removeComment('${comment.number}')" href="#">Remove Comment</a>

                        <p>${comment.content}</p>
                    </div>
                </div>`
    }

    var comments = find("#comments")
    for (let comment of thread.comments) {
        console.log(comment.number)
        addComment(comment);
    }

    find("#post_comment").addEventListener('submit', e => {
        e.preventDefault()

        var comment = {
            number: thread.comments.length,
            author: "You",
            date: getCurrentDate(),
            content: marked(find("#post_comment").comment.value)
        }

        addComment(comment)
        find("#preview").innerHTML = ""

        thread.comments.push(comment);
        localStorage.setItem('threads', JSON.stringify(threads));

        find("#post_comment").reset()
    })
}