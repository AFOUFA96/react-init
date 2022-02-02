import { BaseController } from './base.controller.js';

export class TestController extends BaseController{

    index = async (params) => {
        // let categoryService = new CategoryService();
        // this.models["categories"] = categoryService.getAll();
        
        return await this.getContent();
    }

    toto = async (params) => {
        // let categoryService = new CategoryService();
        // this.models["categories"] = categoryService.getAll();
        
        return await this.getContent();
    }
}