import { Component, OnInit } from '@angular/core';
import { MedbuddyAPIService } from '../medbuddy-api.service';
import { Doctors } from '../doctors';

@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.component.html',
  styleUrls: ['./manage-doctors.component.css']
})
export class ManageDoctorsComponent implements OnInit {

  btnText = 'Add';
  doctor: Doctors = { id: 0, location: 'Hyderbad', name: '', specialization: '' };
  doctorList: Doctors[];
  editPos: number;

  constructor(private service: MedbuddyAPIService) { }

  ngOnInit() {
    this.service.getDoctors().subscribe(resp => this.doctorList = resp);
  }

  submit() {
    if (this.btnText === 'Add') {
      this.service.addDoctors(this.doctor).subscribe(resp => {
        console.log('added');
        this.doctorList.push(resp);
      });
    } else {
      this.service.updateDoctors(this.doctor).subscribe(resp => {this.doctorList[this.editPos] = resp});
    }
  }

  edit(item) {
    this.editPos = this.doctorList.indexOf(item);
    this.doctor = item;
    this.btnText = 'Update';
  }

  delete(doctor: Doctors) {
    const indPos = this.doctorList.indexOf(doctor);
    this.service.removeDoctors(doctor).subscribe( resp => {
      this.doctorList.splice(indPos, 1);
    });
  }
}
