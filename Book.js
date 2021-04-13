import Component from 'gia/Component';
import eventbus from 'gia/eventbus';
import getComponentFromElement from 'gia/getComponentFromElement';

export default class Book extends Component {
    constructor(element) {
        super(element);

        this.ref = {
            pages: [], 
        };

        this.index = null;

        var me = this;
        this.timer_id = setInterval(function () {
            me.nextPage();
        }, 5000);
    }

    nextPage(){
        this.setState({
            'page_idx' : (this.index + 1) % this.ref.pages.length,
        })        
    }

    mount() {
        this.setState({
            'page_idx' : 0,
        })
    }
    
    unmount() {
        clearInterval(this.timer_id);
    }    

    render() {
        this.ref.pages.forEach(item => {
            item.style.display = "none";
        });
        this.ref.pages[this.index].style.display = "block";
    }

    stateChange(stateChanges) {
        if('page_idx' in stateChanges) {
            this.index = stateChanges['page_idx']
            this.render()
        };
    }    
}
