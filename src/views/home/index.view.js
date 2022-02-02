
import { BaseView } from "../base.view.js";


export class HomeIndexView extends BaseView{

    render = async () => {

        await this.import(["MyCard"]);

        const {categories, genders} = this.models;
        const liste = categories.map(cat => {
            return `<my-card className="text-primary" cardText="${cat.description}" cardTitle="${cat.title}"
            imgSrc="http://dummyimage.com/281x140.bmp/5fa2dd/ffffff"></my-card>`;
        })
        this.content = (`
            <div>
                ${genders.map(gender => gender.title)}
                ${liste}
            </div>
        `);
        return await this.display();
    }
    
}