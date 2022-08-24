import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  newsletter: FormControl = new FormControl('Hello@msn.com');

  subscriptionForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    birthdate: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  artistProfile = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    genres: this._fb.array(
      [this._fb.control('', Validators.required)],
      [Validators.required]
    ),
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  get genres() {
    return this.artistProfile.get('genres') as FormArray;
  }

  hasError(
    myForm: FormGroup,
    inputName: string,
    validator: string
  ): Boolean | undefined {
    return (
      myForm.get(inputName)?.hasError(validator) &&
      (myForm.get(inputName)?.touched || myForm.get(inputName)?.dirty)
    );
  }

  addGenres() {
    this.genres.push(this._fb.control(''));
  }

  removeGenres(index: number) {
    this.genres.removeAt(index);
  }

  handleSubmit() {
    console.log(this.subscriptionForm.value);
    this.subscriptionForm.reset();
  }
}
