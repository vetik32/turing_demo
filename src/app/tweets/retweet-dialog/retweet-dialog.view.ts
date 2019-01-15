import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Tweet } from '../tweet.model';

@Component({
  selector: 'dmo-retwit-dialog',
  templateUrl: './retweet-dialog.view.html',
  styleUrls: ['./retweet-dialog.view.scss']
})
export class RetweetDialogView {
  form: FormGroup;
  content: string;
  tweet: Tweet;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RetweetDialogView>,
    @Inject(MAT_DIALOG_DATA) public data: Tweet
  ) {

    this.tweet = data;

    this.form = fb.group({
      comment: ''
    });
  }

  retweet() {
    this.dialogRef.close(this.form.value.comment);
  }

  close() {
    this.dialogRef.close();
  }
}
