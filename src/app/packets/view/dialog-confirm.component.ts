import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface Confirm {
  name: string;
}
@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
  styles:['']
})


export class DialogConfirm {

  constructor(public dialogRef: MatDialogRef<DialogConfirm>,
    @Inject(MAT_DIALOG_DATA) public confirmForm: Confirm) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}