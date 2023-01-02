import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
import { Role } from '../model/role.model';

import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  user: User;
  roles?: Role[];

  @ViewChild('userForm') form: any;

  constructor(private router: Router, 
    private userService: UserService, private roleService: RoleService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.roleService.findAll().subscribe(data => {
      this.roles = data;
    });
    this.user.enabled = false
    this.user.role = ""
  }

  onSubmit() {   
    console.log(this.user);
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  onEnabledSelected(value: string): void {
    var enabled = (value =="True")
    this.user.enabled = enabled
	}

  onRoleSelected(value: string): void {
		console.log(value)
    var selectedRoleId = this.roles?.find(role => role.name === value)?.id
    this.user.role = `http://localhost:8080/rest/roles/${selectedRoleId}`
	}
}