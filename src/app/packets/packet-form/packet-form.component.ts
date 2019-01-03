import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/core/rest.service';
import { Jorg } from 'src/app/model/jorg';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { pakiet, Pakiet } from 'src/app/model/pakiet';
@Component({
  selector: 'app-packet-form',
  templateUrl: './packet-form.component.html',
  styleUrls: ['./packet-form.component.css']
})
export class PacketFormComponent implements OnInit {

  jednOrg: Jorg[] = [];
  controls: FormControl[];
  profileForm: FormGroup;

  constructor(private rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.pipe(map((data) => data.jo)).subscribe(jorg => {
      this.jednOrg = jorg;
      this.controls = this.jednOrg.map(c => new FormControl(true));
      this.profileForm = new FormGroup({
        nazwa: new FormControl('', {
          validators: [Validators.required,Validators.minLength(4),Validators.maxLength(50)]
        }),
        dataWydania: new FormControl(new Date(), {
          validators: [Validators.required]
        }),
        terminWykonania: new FormControl(new Date(), {
          validators: [Validators.required]
        }),
        wymaganyZalacznik: new FormControl('NIE', {
          validators: [Validators.required]
        }),
        opis: new FormControl('', {
          validators: [Validators.required,Validators.minLength(4),Validators.maxLength(50)]
        }),
        jednOrg: new FormArray(this.controls)
      },{updateOn: 'blur'});
    }
    );
  }
  onSubmit() {
    console.warn(this.profileForm.value);
    let packetToSave=new Pakiet();
    packetToSave.nazwa=this.profileForm.value.nazwa;
    console.log(packetToSave.nazwa);
    this.profileForm.value
    this.profileForm.valid ? this.rest.savePacket(packetToSave):null;
  }
}