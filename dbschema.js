let db = {
    users: [
        {
            userId: "2SeerZHPs1gITHuNXr3YEKpWjM82",
            email: "user@email.com",
            createdAt: "October 25, 2019 @ 12:01:00 AM UTC-6",
            imageUrl: "",
            bio: "",
            website: "",
            location: ""
        }
    ],
    posts: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-10-25T18:54:20.564Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: '',
            body: "",
            createdAt: ""
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: "",
            read: "true || false", //false by default 
            screamId: "",
            type: "",
            createdAt: ""
        }
    ],
};
const userDetails = {
    // Redux data
    credentials: {
        userId: "",
        email: "",
        createdAt: "",
        imageUrl: "",
        bio: "",
        website: "",
        location: ""
    },
    likes: [
        {
            userHandle: "",
            screamId: "",
        },
        {
            userHandle: "",
            screamId: ""
        }
    ]
}