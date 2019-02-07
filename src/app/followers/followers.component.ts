import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/profile.model';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
userFollower: Profile[];
  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router) { 
    this.profileService.getUserFollowers()
    .subscribe((followers) => {
      this.userFollower = followers;
    });
  }

  ngOnInit() {
  }

  viewUser() {
    this.router.navigate(['/profile'], {relativeTo: this.route});
  }
}