import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProfilesService } from '../../services/profiles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile: any = []
  repos: any = []
  starred: any = []
  faCodeBranch = faCodeBranch;
  faStar = faStar;
  loading: boolean = true;

  constructor(
    public title: Title,
    public router: Router,
    public route: ActivatedRoute,
    private service: ProfilesService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Gendo | FrontEnd Test');

    this.route.params.subscribe(params => {
      if (params['login']) {
        this.getProfile(params['login']);
        this.getRepos(params['login']);
        this.getStarred(params['login']);
      }
    });
  }

  getProfile(login){
    this.loading = true;
    this.service.getProfileByLogin(login)
    .subscribe(res => {
      this.profile = [res]
      this.loading = false;
    })
  }

  getRepos(login){
    this.loading = true;
    this.service.getRepos(login)
    .subscribe(res => {
      this.repos = res
      this.loading = false;
    })
  }

  getStarred(login){
    this.loading = true;
    this.service.getStarred(login)
    .subscribe(res => {
      this.starred = res
      this.loading = false;
    })
  }

}
