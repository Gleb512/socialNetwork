import profileReducer, {AddPost, DeletePost} from "./profile-reducer";
import React from "react";
let state = {
    posts: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            description: 'Vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit.'
        },
        {
            id: 2,
            name: 'Lorem Dollor',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        },
        {
            id: 3,
            name: 'Dollor Ipsum',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        },
        {
            id: 4,
            name: 'Holly Dolly',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        },
        {
            id: 5,
            name: 'Lorem Ipsum',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        }
    ]
};

test('lenght of post should be incremented', () => {
    //1. Test data
    let action = AddPost("Post title", "Post content");

    //2. action
    let newState = profileReducer(state,action)

    //expectation ( waiting for )
    expect(newState.posts.length).toBe(6);
});//new post should be added
test('name of new post should be correct', () => {
    //1. Test data
    let action = AddPost("Post title", "Post content");

    //2. action
    let newState = profileReducer(state,action)

    //expectation ( waiting for )
    expect(newState.posts[5].name).toBe("Post title");
});
test('description of new post should be correct', () => {
    //1. Test data
    let action = AddPost("Post title", "Post content");

    //2. action
    let newState = profileReducer(state,action)

    //expectation ( waiting for )
    expect(newState.posts[5].description).toBe("Post content");
});
test('after deleting leght of posts should be decrement', () => {
    //1. Test data
    let action = DeletePost(1);

    //2. action
    let newState = profileReducer(state,action)

    //expectation ( waiting for )
    expect(newState.posts.length).toBe(5);
});
test('post shouldt be deleted if id is wrong', () => {
    //1. Test data
    let action = DeletePost(10000);

    //2. action
    let newState = profileReducer(state,action)

    //expectation ( waiting for )
    expect(newState.posts.length).toBe(5);
});