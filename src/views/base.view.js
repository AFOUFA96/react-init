import { ModuleImporter } from "../helpers/moduleImporter.js";

export class BaseView{

    constructor(models){
        this.models = models;
        this.templates = ["MyHeader", "MyFooter"]
        this.import();
    }

    import = async (templates) => {

        for(let template of (templates || this.templates)){
            await ModuleImporter.import(template,"templates")
        }
    }

    display = async () => {

        // await ModuleImporter.import("MyHeader","templates")
        // await ModuleImporter.import("MyFooter","templates")

        return (`
            <my-header text="Header"></my-header>
                ${this.content}
            <my-footer text="Footer"></my-footer>
        `);
    }

}