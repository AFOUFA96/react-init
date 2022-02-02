import { BaseView } from "../base.view.js";


export class TestTotoView extends BaseView{

    render = async () => {

       
        this.content = (`
            <div>
                Toto
            </div>
        `);
        return await this.display();
    }
    
}