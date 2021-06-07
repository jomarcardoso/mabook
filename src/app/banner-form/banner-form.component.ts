import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BANNER } from '../shared/services/banner/banner.constants';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.css']
})
export class BannerFormComponent implements OnInit {
  bannerForm = this.formBuilder.group(BANNER);

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.bannerForm.value);
    this.bannerForm.reset();
  }
}
