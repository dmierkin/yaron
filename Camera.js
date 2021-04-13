import Component from 'gia/Component';
import eventbus from 'gia/eventbus';


export default class Camera extends Component {
    constructor(element) {
        super(element);
    }

    mount() {
        console.log("Camera ON !!!!")
    }

    unmount() {
        console.log("Camera OFF !!!!")
    }
}


