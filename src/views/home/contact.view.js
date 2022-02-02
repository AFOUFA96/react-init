
import { BaseView } from "../base.view.js";


export class HomeContactView extends BaseView{

    render = async () => {

       
        this.content = (`
            <div>
                Contact
            </div>
        `);
        return await this.display();
    }
    
}