import { ModuleImporter } from "../helpers/moduleImporter.js";


export class BaseController{

    action;
    view;
    models = {};
    params;

    constructor(routeParts){
        this.action = routeParts?.shift() || "index";
        let ctrlName = this.constructor.name.remove("Controller");
        this.view = `${ctrlName}${this.action.capitalize()}View`;
        this.params = routeParts;
        
    }

    getContent = async (models = this.models, view = this.view) => {
        
        if(models){
            this.models = models;
        }
        if(view){
            this.view = view;
        }
        this.view = new this.view(this.models);
        return await this.view.render();
    }

    render = async () => { 
        this.view = await ModuleImporter.import(this.view);
        if(!this[this.action] || !this.view){
            //return new ErrorController().index();
            //TODO Redirection Error Page
        }
        this.action = this[this.action];
        
        return await this.action();
        
    }


}