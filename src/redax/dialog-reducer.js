const addMessage = "addMessage";
let initialState = {
    dialogs: [
        { name: 'Jack Estrada', id: 1 },
        { name: 'Brian Cruz', id: 2 },
        { name: 'Barbara Scott', id: 3 },
        { name: 'Danielle Jones', id: 4 },
        { name: 'George Taylor', id: 5 },
        { name: 'Joggy Too', id: 6 },
        { name: 'Bindy Marks', id: 7 }
    ],
    messages: [
        { value: 'Hello', user: 1, messageId:1 },
        { value: 'Hi!', user: 1, messageId:2 },
        { value: 'How are you?', user: 1, messageId:3 },
        { value: 'I\'m fine, thank you. And how are you?', user: 1, messageId:4 }
    ]
};

const dialogReducer = (state = initialState ,action) => {
    switch (action.type) {
        case addMessage:
            let newMesObj = {
                value: (action.newMessageBody),
                user: 1
            }
            return {
                ...state,
                messages: [...state.messages,newMesObj]
            };
        default:
            return state;
    }

}
export const sendMessageCreator = (newMessageBody) => ({type: addMessage, newMessageBody});
export default dialogReducer;