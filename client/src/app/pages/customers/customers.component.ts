import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  customers: Array<User>;
  filteredAndSortedCustomers: Array<User>;
  currentPage: number = 1;
  searchFor: string = "";
  perPage: number = 20;
  totalPages: number;
  currentSort: string = "Name: A-Z";
  customersSubscription: Subscription;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customersSubscription = this.usersService
      .getAllUsers(this.authService.getUserId())
      .subscribe((customers: Array<User>) => {
        this.customers = customers;
        this.filteredAndSortedCustomers = customers;
        this.setTotalPages();
      });
  }

  ngOnDestroy(): void {
    if (this.customersSubscription) this.customersSubscription.unsubscribe();
  }

  filterByName(): void {
    const arr: Array<User> = [];
    for (let customer of this.customers) {
      if (
        customer.name.lastName
          .toLowerCase()
          .includes(this.searchFor.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchFor.toLowerCase())
      )
        arr.push(customer);
    }
    this.filteredAndSortedCustomers = arr;
    this.setTotalPages();
    this.currentPage = 1;
  }

  selectPerPage(num: number): void {
    this.perPage = num;
    this.setTotalPages();
    this.currentPage = 1;
  }

  setTotalPages(): void {
    this.totalPages = Math.ceil(
      this.filteredAndSortedCustomers.length / this.perPage
    );
  }

  setCurrentPage(num: number): void {
    this.currentPage = num;
  }

  changeSort(sortName: string): void {
    this.currentSort = sortName;
  }

  goToUser(event: any, id: string): void {
    event.preventDefault();
    this.router.navigate([`/account/${id}/details`]);
  }
}
