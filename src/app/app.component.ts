import { Component } from '@angular/core';
import { Students } from './../app/model/Students';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  studObj:Students = new Students();
  studCollection:Array<Students> = Array<Students>();
  disabledBtn:boolean = true;
  
  submit(studData:Students){
    
    if(this.studObj.id != null){ 
    this.studCollection.push(studData);
    console.log(this.studCollection);
    }else{
      let pos = studData.id;
      this.studCollection.splice(pos,1,studData);
    }
    this.studObj = new Students();
  }

  // delete(i){
  //   this.studCollection.splice(i,1);
  // }
  edit(studentData:Students,id:number){
     this.studObj.name = studentData.name;
     this.studObj.contact = studentData.contact;
     this.studObj.address = studentData.address;
     this.studObj.id = id;
   }
}