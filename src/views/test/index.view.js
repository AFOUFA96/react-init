import { BaseView } from "../base.view.js";


export class TestIndexView extends BaseView{

    render = async () => {

       
        this.content = (`
            <div>
                Index
            </div>
        `);
        return await this.display();
    }
    
}