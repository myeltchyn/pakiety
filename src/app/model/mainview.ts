interface Message {
    type: string;
    text: string;
}

interface SimpleMessage {
    text: string;
}

class Alert<T> {
    print ( message : T) {
        if (message['type']) {
            console.log( message['type'] + ': ' + message['text'] );
        } else {
            console.log( message['text'] );
        }
    }
}

let alert1 = new Alert();
let alert2 = new Alert();

alert1.print( { type : 'Error', text: 'Some custom message'} );
alert2.print( { type2:'cos',text: 'Some other message'} );