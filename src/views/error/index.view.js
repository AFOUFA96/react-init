import { BaseView } from "../base.view.js";


export class ErrorIndexView extends BaseView{

    render = async () => {

       
        this.content = (`
            <div>
                Erreur 404 !
            </div>
        `);
        return await this.display();
    }
    
}