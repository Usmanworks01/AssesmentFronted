import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  throwError(errorResponse:any){
    Swal.fire({
      icon: 'error',
      title:errorResponse?.status?errorResponse.status:'Wrong',
      text: errorResponse?.error?.message?errorResponse.error.message:'Some thing went wrong!'
    })
  }

  selfMessage(iconValue:any, titleValue:string, textValue:string){
    Swal.fire({
      icon: iconValue,
      title: titleValue,
      text: textValue
    })
  }
}
