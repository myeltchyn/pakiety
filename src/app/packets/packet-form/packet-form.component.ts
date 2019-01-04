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
      this.controls = this.jednOrg.map(() => new FormControl(true));
      this.profileForm = new FormGroup({
        nazwa: new FormControl('', {
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)]
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
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)]
        }),
        jednOrg: new FormArray(this.controls)
      }, { updateOn: 'blur' });
    }
    );
  }
  onSubmit() {
    if (this.profileForm.valid) {
      let packetToSave = new Pakiet();
      packetToSave.nazwa = this.profileForm.value.nazwa;
      packetToSave.dataWydania = this.profileForm.value.dataWydania;
      packetToSave.opis = this.profileForm.value.opis;
      packetToSave.terminWykonania = this.profileForm.value.terminWykonania;
      packetToSave.wymaganyZalacznik = this.profileForm.value.wymaganyZalacznik;
      packetToSave.dotUS = [];
      this.jednOrg.map((j, i, a) => this.profileForm.value.jednOrg[i] ? packetToSave.dotUS.push(j.id) : null);
      this.rest.savePacket(packetToSave).subscribe(resp=>console.log(resp));
    }
    else {
      console.warn('Fields in forms not validated!');
    }
  }
}