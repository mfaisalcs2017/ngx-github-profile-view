import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/profile.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  users: Profile[];
  selectedUser: Profile[];
  repos: Profile[];
  userFollower: Profile[];
  

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router) { 
    this.profileService.getProfileInfo().subscribe((profile) => {
      this.users = profile;
    });
    this.profileService.getUserRepos().subscribe((userrepos) => {
      this.repos = userrepos;
    });
  }


  ngOnInit() {
        
  }

  viewUser() {
    this.profileService.getUserDetails()
    .subscribe((detail) => {
      this.selectedUser = detail;
    });
  }

  viewFollower() {
    this.router.navigate(['/followers'], {relativeTo: this.route});
  }
}

