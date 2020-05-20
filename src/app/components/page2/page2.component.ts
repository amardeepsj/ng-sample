import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProfileService } from './../../services/profile.service'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  successMsg: string;
  errorMsg: string;
  posts: any;

  cols = [
    { field: 'userId', header: 'UserId' },
    { field: 'id', header: 'PostId' },
    { field: 'title', header: 'Post' }
  ];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  createUser() {
    console.log('--profileForm--', this.profileForm);
/*     this.profileService.createUser(this.profileForm.value).subscribe(data => {
      this.successMsg = "User " + this.profileForm.value.username + " created successfully."
    }, error => {
      this.errorMsg = "Error while creating user."
    }); */
    this.successMsg = "User " + this.profileForm.value.username + " created successfully."
  }

  getPosts() {
    this.profileService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
