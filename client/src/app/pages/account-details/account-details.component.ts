import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatDialog } from "@angular/material";
import { EditFormComponent } from "./components/edit-form/edit-form.component";
import { UsersService } from "src/app/services/users.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.scss"]
})
export class AccountDetailsComponent implements OnInit {
  userId: string;
  user: User;
  canEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get("id");
      this.usersService.getUser(this.userId).subscribe(
        (user: User) => {
          this.user = user;
          if (this.userId === this.authService.getUserId()) this.canEdit = true;
        },
        () => this.router.navigate(["/"])
      );
    });
  }

  editInfo(infoType: string) {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: "580px",
      data: { user: this.user, infoType }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService
          .updateUser(this.userId, { result })
          .subscribe((user: User) => (this.user = user));
      }
    });
  }
}
