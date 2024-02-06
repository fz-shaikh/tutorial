import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PracServService } from '../prac-serv.service';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent {

  public formData: any;
  allData: any = []
  constructor(private fb: FormBuilder, private ser: PracServService) {
    this.formData = this.fb.group({
      title: ['',],
      category: ['',],
      price: ['',],
      id: ['']
    })
  }

  ngOnInit() {
    this.getData();
  }

  addData() {
    console.log(this.formData.value);
    if (this.formData.value.id) {
      this.ser.putApiData(this.formData.value).subscribe(
        (res: any) => {
          this.getData();
          alert("Data Updated succesfully")
          this.formData.reset()
        }
      )
    } else {
      this.ser.postApiData(this.formData.value).subscribe((res: any) => {
        alert("succesfully Data submitted")
        this.getData();
        this.formData.reset()
      })
    }


  }

  getData() {
    this.ser.getApiData().subscribe(
      (res: any) => {
        this.allData = res
      },
      (err: any) => {
        console.log(err);

      }
    )
  }

  onUpDate(dt: any) {
    this.formData.patchValue(dt)
  }

  onDeleteData(dt: any) {
    this.ser.deleteApiData(dt).subscribe(
      (res: any) => {
        this.getData()
      }
    )

  }

}
