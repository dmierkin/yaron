import Component from 'gia/Component';

export default class SampleComponent extends Component {
    constructor(element) {
      super(element);
 
      this.ref = {
        pages: [], 
      };
    }
 
    mount() {
      document.querySelector('#output').innerHTML = JSON.stringify(this.ref, null, 4);
      console.log(this.ref);
    }
  }