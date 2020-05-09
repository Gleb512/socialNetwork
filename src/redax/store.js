import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
    _state: {
        profilePage: {
            newPostTextValue: 'New Post Text',
            newPostNameValue: 'New Post Name',
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
        },
        dialogPage: {
            dialogs: [
                { name: 'Jack Estrada', id: 1 },
                { name: 'Brian Cruz', id: 2 },
                { name: 'Barbara Scott', id: 3 },
                { name: 'Danielle Jones', id: 4 },
                { name: 'George Taylor', id: 5 },
                { name: 'Joggy Too', id: 6 },
                { name: 'Bindy Marks', id: 6 }
            ],
            messages: [
                { value: 'Hello', user: 1 },
                { value: 'Hi!', user: 1 },
                { value: 'How are you?', user: 1 },
                { value: 'I\'m fine, thank you. And how are you?', user: 1 }
            ],
            newMessageTextValue: 'New Massage Text "Hello World"'
        }

    },
    getState(){
        return  this._state;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
}
window.state = store;

export default store;





/*if(action.type === addPost){
            let newPostObj = {
                id: 1,
                name: (this._state.profilePage.newPostNameValue),
                description: (this._state.profilePage.newPostTextValue)
            }
            this._state.profilePage.posts.push(newPostObj);
            this._state.profilePage.newPostTextValue = '';
            this._state.profilePage.newPostNameValue = '';
            this._callSubscriber();
        }else if (action.type === getPostName){
            this._state.profilePage.newPostNameValue = action.pn;
            this._state.profilePage.newPostTextValue = action.pt;
            this._callSubscriber();
        }
        else if (action.type === addMessage){
            let newMesObj = {
                value: (this._state.dialogPage.newMessageTextValue),
                user: 1
            }
            this._state.dialogPage.messages.push(newMesObj);
            this._state.dialogPage.newMessageTextValue = '';
            this._callSubscriber();
        }else if (action.type === getNewMessageTextValue){
            this._state.dialogPage.newMessageTextValue = action.mt;
            this._callSubscriber();
        }*/