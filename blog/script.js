let firebaseConfig = {
    apiKey: "AIzaSyDurbKhMAsdw2RbkNiBWxf0His6Awy30o0",
    authDomain: "labcub-fde87.firebaseapp.com",
    databaseURL: "https://labcub-fde87-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "labcub-fde87",
    storageBucket: "labcub-fde87.appspot.com",
    messagingSenderId: "508256740769",
    appId: "1:508256740769:web:460353610706f7844817e0",
    measurementId: "G-5PE8TYDV8W"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const posts = document.querySelector('.list');

db.collection("post").get().then((post) => {
    post.forEach(blog => {
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    posts.innerHTML += `
    <div class="posts">
        <div class="post-top">
            <a href=""><img class="post-img" src="${data.image_url}" alt=""></a>
        </div>
        <div class="post-bottom">
            <a href="">
                <h3>${data.title.substring(0, 50) + "..."}</h3>
            </a>
            <p class="bottom-detail">${data.desc.substring(0, 100) + "..."}</p>
        </div>
        <a class="read-btn" href="${data.post_url}">
            <span>READ</span>
        </a>
    </div>
    `;

}
