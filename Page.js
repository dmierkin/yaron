import Component from 'gia/Component';
import eventbus from 'gia/eventbus';

export default class Page extends Component {
    constructor(element) {
        super(element);

        var video = document.querySelector("#videoElement");

        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
              video.srcObject = stream;
            })
            .catch(function (err0r) {
              console.log("Something went wrong!");
            });
        }

    }
    mount() {
        console.log("Page !!!!")
    }
}
