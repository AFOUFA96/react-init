import { BaseController } from './base.controller.js';

export class ErrorController extends BaseController{
    
    index = async () => {

        return await this.getContent();
    }
}