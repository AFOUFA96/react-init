import {CategoryService} from '../services/category.service.js';
import {GenderService} from '../services/gender.service.js';
import { BaseController } from './base.controller.js';

export class HomeController extends BaseController{

    index = async () => {
        let categoryService = new CategoryService();
        this.models["categories"] = await categoryService.getAll();
        let genderService = new GenderService();
        this.models["genders"] = await genderService.getAll();
        
        return await this.getContent();
    }

    contact = async () => {
        
        return await this.getContent();
    }
}