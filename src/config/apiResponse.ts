
import { HTTPSTATUSCODE, type HttpstatusCodeType } from "./http.config.js";

class AppResponse{
  public statusCode:HttpstatusCodeType
  public data: any
  public success : boolean
  constructor(
    statusCode = HTTPSTATUSCODE.OK,
    data = '',
    message = 'Success',
    success = true
  ){
    this.statusCode = statusCode
    this.data = data
    this.success = success

  }
}