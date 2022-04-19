import {
    addPostActionCreator,
    ProfileReducer,
    ProfileStateType,
    updateNewPostTextActionCreator, updateStatusAC
} from "../redax/Profile-reducer";

let startState: ProfileStateType;

beforeEach(() => {

    startState = {
        myPostData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 90},
            {id: 3, message: 'Yea ) ', likesCount: 24},
            {id: 4, message: 'Second post', likesCount: 116},
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