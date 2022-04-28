import {
    addPostActionCreator, deleteLikePostAC,
    ProfileReducer,
    ProfileStateType, setLikePostAC,
    updateNewPostTextActionCreator, updateStatusAC
} from "../Reducers-Store/Profile-reducer";

let startState: ProfileStateType;

beforeEach(() => {

    startState = {
        myPostData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12, youLikes: false},
            {id: 2, message: "It's my first post", likesCount: 91, youLikes: true},
            {id: 3, message: 'Yea ) ', likesCount: 24, youLikes: false},
            {id: 4, message: 'Second post', likesCount: 116, youLikes: false},
        ],
        newPostText: '',
        profileUser: null,
        status: '',
    };
})

test("new post should be added", () => {

    const action = addPostActionCreator();

    const endState = ProfileReducer(startState, action);

    expect(endState.myPostData.length).toBe(5);
    expect(endState.myPostData[0].id).toBe(6);

});

test("update new post text in profile posts", () => {

    const action = updateNewPostTextActionCreator("New post text is updated");

    const endState = ProfileReducer(startState, action);

    expect(endState.newPostText.length).not.toBe(0);
    expect(endState.newPostText).toBe("New post text is updated");

});

test("Change status in profile info", () => {

    const action = updateStatusAC("Status id updated");

    const endState = ProfileReducer(startState, action);

    expect(endState.status.length).not.toBe(0);
    expect(endState.status).toBe("Status id updated");

});

test("set like count in profile post", () => {

    const action = setLikePostAC(startState.myPostData[0].id);

    const endState = ProfileReducer(startState, action);

    expect(endState.myPostData[0].likesCount).toBe(startState.myPostData[0].likesCount + 1);
    expect(endState.myPostData[0].youLikes).toBe(true);

});

test("delete like count in profile post", () => {

    const action = deleteLikePostAC(startState.myPostData[1].id);

    const endState = ProfileReducer(startState, action);

    expect(endState.myPostData[1].likesCount).toBe(startState.myPostData[1].likesCount - 1);
    expect(endState.myPostData[0].youLikes).toBe(false);

});