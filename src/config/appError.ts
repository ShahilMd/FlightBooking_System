
import { HTTPSTATUSCODE,type HttpstatusCodeType } from "./http.config.js";

export class AppError extends Error{
  public statusCode:HttpstatusCodeType;
  public errorCode?:String[];
  public success:boolean;
  public message:string

  constructor(
    statusCode =HTTPSTATUSCODE.INTERNAL_SERVER_ERROR,
    message ="Somthing Went Wrong",
    errorCode =[],
    success = false
  ){
    super(message)
    this.statusCode=statusCode
    this.errorCode= errorCode
    this.message = message
    this.success = success
    Error.captureStackTrace(this,this.constructor)
  }

}