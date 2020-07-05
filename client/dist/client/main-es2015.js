(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<button\n  id=\"scroll-button\"\n  class=\"button is-primary scroll-to-top\"\n  (click)=\"scrollToTop()\"\n>\n  <i class=\"fas fa-arrow-up\"></i>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-details/account-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-details/account-details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"container\">\n  <div class=\"title\">Account details</div>\n  <button\n    [routerLink]=\"['/account', userId, 'purchases']\"\n    class=\"button is-primary purchases-button\"\n  >\n    Purchases\n  </button>\n  <div class=\"info-title\">Personal informations</div>\n  <a\n    *ngIf=\"canEdit\"\n    title=\"Edit personal informations\"\n    class=\"edit\"\n    (click)=\"editInfo('personal')\"\n    ><i class=\"fas fa-edit\"></i\n  ></a>\n  <div class=\"detail\">\n    <p class=\"detail-title\">Email:</p>\n    {{ user.email }}\n  </div>\n  <div class=\"detail\">\n    <p class=\"detail-title\">First name:</p>\n    {{ user?.name?.firstName }}\n  </div>\n  <div class=\"detail\">\n    <p class=\"detail-title\">Last name:</p>\n    {{ user?.name?.lastName }}\n  </div>\n  <div class=\"info-title\">Address details</div>\n  <a\n    *ngIf=\"canEdit\"\n    title=\"Edit address details\"\n    class=\"edit\"\n    (click)=\"editInfo('address')\"\n    ><i class=\"fas fa-edit\"></i\n  ></a>\n  <div class=\"detail\">\n    <p class=\"detail-title\">Street:</p>\n    {{ user?.address?.street }}\n  </div>\n  <div class=\"detail\">\n    <p class=\"detail-title\">City:</p>\n    {{ user?.address?.city }}\n  </div>\n  <div class=\"detail\">\n    <p class=\"detail-title\">Country:</p>\n    {{ user?.address?.country }}\n  </div>\n  <div class=\"detail\">\n    <p class=\"detail-title\">Postcode:</p>\n    {{ user?.address?.postcode }}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-details/components/edit-form/edit-form.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-details/components/edit-form/edit-form.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">\n  {{\n    data.infoType === \"personal\"\n      ? \"Edit personal informations\"\n      : \"Edit address details\"\n  }}\n</div>\n\n<form\n  *ngIf=\"data.infoType === 'personal'\"\n  #personalForm=\"ngForm\"\n  (ngSubmit)=\"updatePersonalInfo()\"\n>\n  <input\n    [(ngModel)]=\"personalInformations.email\"\n    #email=\"ngModel\"\n    name=\"email\"\n    type=\"email\"\n    class=\"input\"\n    placeholder=\"Email address\"\n    required\n    pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$\"\n  />\n  <input\n    [(ngModel)]=\"personalInformations.firstName\"\n    #firstName=\"ngModel\"\n    name=\"firstName\"\n    type=\"text\"\n    class=\"input\"\n    placeholder=\"First name\"\n  />\n  <input\n    [(ngModel)]=\"personalInformations.lastName\"\n    #lastName=\"ngModel\"\n    name=\"lastName\"\n    type=\"text\"\n    class=\"input\"\n    placeholder=\"Last name\"\n  />\n  <button\n    type=\"submit\"\n    [disabled]=\"!personalForm.valid\"\n    class=\"button is-primary\"\n  >\n    Submit\n  </button>\n</form>\n\n<form *ngIf=\"data.infoType === 'address'\" (ngSubmit)=\"updateAddressDetails()\">\n  <input\n    [(ngModel)]=\"addressDetails.street\"\n    #street=\"ngModel\"\n    name=\"street\"\n    type=\"text\"\n    class=\"input\"\n    placeholder=\"Street\"\n  />\n  <input\n    [(ngModel)]=\"addressDetails.city\"\n    #city=\"ngModel\"\n    name=\"city\"\n    type=\"text\"\n    class=\"input\"\n    placeholder=\"City\"\n  />\n  <input\n    [(ngModel)]=\"addressDetails.country\"\n    #country=\"ngModel\"\n    name=\"country\"\n    type=\"text\"\n    class=\"input\"\n    placeholder=\"Country\"\n  />\n  <input\n    [(ngModel)]=\"addressDetails.postcode\"\n    #postcode=\"ngModel\"\n    name=\"postcode\"\n    type=\"text\"\n    class=\"input\"\n    placeholder=\"Postcode\"\n  />\n  <button type=\"submit\" class=\"button is-primary\">Submit</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-purchases/account-purchases.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-purchases/account-purchases.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-container\">\n  <div class=\"control has-icons-left\">\n    <input\n      class=\"input is-medium is-rounded\"\n      type=\"text\"\n      placeholder=\"Search by name\"\n      [(ngModel)]=\"searchFor\"\n      (input)=\"filterByName()\"\n    />\n    <span class=\"icon is-left\">\n      <i class=\"fas fa-search\"></i>\n    </span>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p class=\"title\">\n    {{ isAdmin ? \"All purchases\" : \"Your purchase history\" }}\n  </p>\n  <button\n    [routerLink]=\"['/account', userId, 'details']\"\n    class=\"button is-primary details-button\"\n  >\n    Account details\n  </button>\n\n  <div class=\"selects-container\">\n    <div class=\"pages-container\">\n      <app-per-page\n        (perPageSelected)=\"selectPerPage($event)\"\n        [perPage]=\"perPage\"\n      ></app-per-page>\n      <app-secondary-pagination\n        *ngIf=\"filteredAndSortedPurchases\"\n        [currentPage]=\"currentPage\"\n        [totalPages]=\"totalPages\"\n        (pageChanged)=\"setCurrentPage($event)\"\n      ></app-secondary-pagination>\n    </div>\n    <div class=\"sort-container\">\n      <app-sort-by\n        page=\"purchases\"\n        [toSortArr]=\"filteredAndSortedPurchases\"\n        [currentSort]=\"currentSort\"\n        (sortChanged)=\"changeSort($event)\"\n      ></app-sort-by>\n    </div>\n  </div>\n\n  <div *ngIf=\"!filteredAndSortedPurchases\" class=\"loading\">Loading...</div>\n  <div *ngIf=\"filteredAndSortedPurchases\">\n    <div\n      *ngFor=\"\n        let purchase of filteredAndSortedPurchases.slice(\n          currentPage * perPage - perPage,\n          currentPage * perPage\n        )\n      \"\n      class=\"purchase-container\"\n    >\n      <div class=\"purchase\">\n        <a\n          [title]=\"\n            purchase.shippingDetails.lastName +\n            ' ' +\n            purchase.shippingDetails.firstName\n          \"\n          *ngIf=\"isAdmin\"\n          class=\"user-name\"\n          [href]=\"'/account/' + purchase._userId + '/details'\"\n          (click)=\"goToUser($event, purchase._userId)\"\n        >\n          Buyer:\n          <span class=\"last-name\"\n            >{{ purchase.shippingDetails.lastName }}\n          </span>\n          <span>{{ purchase.shippingDetails.firstName }}</span>\n        </a>\n        <div class=\"image-and-name\">\n          <div class=\"image\">\n            <img [src]=\"purchase.product.imageUrl\" />\n          </div>\n          <a\n            [href]=\"'/product/' + purchase.product._id\"\n            class=\"name\"\n            (click)=\"goToProduct($event, purchase.product._id)\"\n            >{{ purchase.product.name }}</a\n          >\n        </div>\n        <p class=\"prop date\">Date: {{ purchase.date | date }}</p>\n        <p class=\"prop qty\">Qty: {{ purchase.quantity }}</p>\n        <p class=\"prop price\">\n          Price: ${{ purchase.quantity * purchase.product.price }}\n        </p>\n      </div>\n      <a class=\"more-details\" (click)=\"toggleShippingDetails(purchase._id)\"\n        >Shipping details</a\n      >\n      <div\n        class=\"details\"\n        *ngIf=\"showShippingDetailsIds.includes(purchase._id)\"\n      >\n        <p class=\"detail\">\n          {{ purchase.shippingDetails.firstName }}\n          {{ purchase.shippingDetails.lastName }}\n        </p>\n        <p class=\"detail\">\n          {{ purchase.shippingDetails.street }}\n        </p>\n        <p class=\"detail\">\n          {{ purchase.shippingDetails.city }}\n        </p>\n        <p class=\"detail\">\n          {{ purchase.shippingDetails.country }}\n        </p>\n        <p class=\"detail\">\n          {{ purchase.shippingDetails.postcode }}\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container pagination-container\">\n  <app-main-pagination\n    [currentPage]=\"currentPage\"\n    [totalPages]=\"totalPages\"\n    (pageChanged)=\"setCurrentPage($event)\"\n  ></app-main-pagination>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <p class=\"title\">Your shopping cart</p>\n  <div *ngIf=\"cart.length > 1\" class=\"button-container\">\n    <button\n      class=\"button is-rounded is-danger clear-button\"\n      (click)=\"clearCart()\"\n    >\n      Clear all\n    </button>\n  </div>\n\n  <div *ngFor=\"let cartItem of cart\" class=\"product\">\n    <div class=\"image\">\n      <img [src]=\"cartItem.product.imageUrl\" />\n    </div>\n\n    <a\n      [title]=\"cartItem.product.name.toUpperCase()\"\n      class=\"name\"\n      (click)=\"goToProduct(cartItem.product._id)\"\n      >{{ cartItem.product.name }}</a\n    >\n    <div class=\"price\">Price: ${{ cartItem.product.price }}</div>\n\n    <div class=\"input-container\">\n      <button\n        class=\"button is-primary is-rounded\"\n        (click)=\"decrementProducts(cartItem)\"\n        [disabled]=\"cartItem.quantity === 1\"\n      >\n        <i class=\"fas fa-minus\"></i>\n      </button>\n      <input\n        class=\"input is-rounded\"\n        [value]=\"cartItem.quantity\"\n        (change)=\"validateControl($event, cartItem)\"\n      />\n      <button\n        class=\"button is-primary is-rounded\"\n        (click)=\"incrementProducts(cartItem)\"\n      >\n        <i class=\"fas fa-plus\"></i>\n      </button>\n    </div>\n\n    <div class=\"price\">\n      Total: ${{ cartItem.quantity * cartItem.product.price }}\n      <p\n        (click)=\"removeFromCart(cartItem.product)\"\n        title=\"Remove\"\n        class=\"remove\"\n      >\n        <i class=\"fas fa-times has-text-danger\"></i>\n      </p>\n\n      <button\n        (click)=\"removeFromCart(cartItem.product)\"\n        title=\"Remove\"\n        class=\"button is-rounded is-danger remove-button\"\n      >\n        Remove <i class=\"fas fa-times\"></i>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"total\">Total: ${{ totalPrice }}</div>\n\n  <div *ngIf=\"cart.length > 0\" class=\"button-container\">\n    <button class=\"button is-rounded is-success\" (click)=\"navigateToCheckout()\">\n      Checkout\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!showSuccessMessage\" class=\"container\">\n  <div class=\"title\">Checkout</div>\n  <h1 class=\"details\">Shipping details:</h1>\n  <form #checkoutForm=\"ngForm\" (ngSubmit)=\"order()\">\n    <input\n      [(ngModel)]=\"shippingDetails.firstName\"\n      #firstName=\"ngModel\"\n      name=\"firstName\"\n      type=\"text\"\n      class=\"input\"\n      placeholder=\"First name\"\n      required\n    />\n    <input\n      [(ngModel)]=\"shippingDetails.lastName\"\n      #lastName=\"ngModel\"\n      name=\"lastName\"\n      type=\"text\"\n      class=\"input\"\n      placeholder=\"Last name\"\n      required\n    />\n    <input\n      [(ngModel)]=\"shippingDetails.street\"\n      #street=\"ngModel\"\n      name=\"street\"\n      type=\"text\"\n      class=\"input\"\n      placeholder=\"Street\"\n      required\n    />\n    <input\n      [(ngModel)]=\"shippingDetails.city\"\n      #city=\"ngModel\"\n      name=\"city\"\n      type=\"text\"\n      class=\"input\"\n      placeholder=\"City\"\n      required\n    />\n    <input\n      [(ngModel)]=\"shippingDetails.country\"\n      #country=\"ngModel\"\n      name=\"country\"\n      type=\"text\"\n      class=\"input inline-input\"\n      placeholder=\"Country\"\n      required\n    />\n    <div class=\"total total-big\">Total price: ${{ totalPrice }}</div>\n    <input\n      [(ngModel)]=\"shippingDetails.postcode\"\n      #postcode=\"ngModel\"\n      name=\"postcode\"\n      type=\"text\"\n      class=\"input inline-input\"\n      placeholder=\"Postcode\"\n      required\n    />\n    <div *ngIf=\"!checkoutForm.valid\" class=\"error error-small has-text-danger\">\n      All shipping details must be provided\n    </div>\n    <div class=\"total total-small\">Total price: ${{ totalPrice }}</div>\n    <button\n      type=\"submit\"\n      class=\"button is-success\"\n      [disabled]=\"!checkoutForm.valid\"\n    >\n      ORDER\n    </button>\n    <div *ngIf=\"!checkoutForm.valid\" class=\"error error-big has-text-danger\">\n      All shipping details must be provided\n    </div>\n  </form>\n</div>\n\n<div *ngIf=\"showSuccessMessage\" class=\"container message-container\">\n  <div class=\"success-message has-text-success\">\n    Thank you for shopping with us!\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customers/customers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customers/customers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-container\">\n  <div class=\"control has-icons-left\">\n    <input\n      class=\"input is-medium is-rounded\"\n      type=\"text\"\n      placeholder=\"Search by name or email\"\n      [(ngModel)]=\"searchFor\"\n      (input)=\"filterByName()\"\n    />\n    <span class=\"icon is-left\">\n      <i class=\"fas fa-search\"></i>\n    </span>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"title\">Customers</div>\n\n  <div class=\"selects-container\">\n    <div class=\"pages-container\">\n      <app-per-page\n        (perPageSelected)=\"selectPerPage($event)\"\n        [perPage]=\"perPage\"\n      ></app-per-page>\n      <app-secondary-pagination\n        *ngIf=\"filteredAndSortedCustomers\"\n        [currentPage]=\"currentPage\"\n        [totalPages]=\"totalPages\"\n        (pageChanged)=\"setCurrentPage($event)\"\n      ></app-secondary-pagination>\n    </div>\n    <div class=\"sort-container\">\n      <app-sort-by\n        page=\"customers\"\n        [toSortArr]=\"filteredAndSortedCustomers\"\n        [currentSort]=\"currentSort\"\n        (sortChanged)=\"changeSort($event)\"\n      ></app-sort-by>\n    </div>\n  </div>\n\n  <a\n    class=\"customer-container\"\n    *ngFor=\"let customer of filteredAndSortedCustomers\"\n    [href]=\"'/account/' + customer._id + '/details'\"\n    (click)=\"goToUser($event, customer._id)\"\n  >\n    <div class=\"name\">\n      Name: <span class=\"last-name\">{{ customer.name.lastName }}</span>\n      {{ customer.name.firstName }}\n    </div>\n    <div class=\"mail\">Email: {{ customer.email }}</div>\n  </a>\n</div>\n\n<div class=\"container pagination-container\">\n  <app-main-pagination\n    [currentPage]=\"currentPage\"\n    [totalPages]=\"totalPages\"\n    (pageChanged)=\"setCurrentPage($event)\"\n  ></app-main-pagination>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"socials\">\n    <a href=\"https://www.facebook.com/\"><i class=\"fab fa-facebook\"></i></a>\n    <a href=\"https://www.twitter.com/\"><i class=\"fab fa-twitter-square\"></i></a>\n    <a href=\"https://www.youtube.com/\"><i class=\"fab fa-youtube\"></i></a>\n    <a href=\"https://www.instagram.com/\"><i class=\"fab fa-instagram\"></i></a>\n    <a href=\"https://www.github.com/\"><i class=\"fab fa-github\"></i></a>\n  </div>\n\n  <div class=\"contacts\">\n    <div class=\"contact-item\">\n      <div class=\"contact-title\">\n        <i class=\"fas fa-map-marker-alt has-text-primary\"></i> Address\n      </div>\n      <div class=\"contact-content\">\n        Lorem ipsum dolor sit amet <br />\n        consectetur adipiscing elit. <br />\n      </div>\n    </div>\n    <div class=\"contact-item\">\n      <div class=\"contact-title\">\n        <i class=\"fas fa-envelope has-text-primary\"></i> Have any question?\n      </div>\n      <div class=\"contact-content\">\n        mail@mail.com\n      </div>\n    </div>\n    <div class=\"contact-item\">\n      <div class=\"contact-title\">\n        <i class=\"fas fa-phone has-text-primary\"></i> Customer service\n      </div>\n      <div class=\"contact-content\">\n        +1-541-754-3010\n      </div>\n    </div>\n  </div>\n  <hr />\n  <div class=\"copyright\">\n    &copy; 2019 Ecom. All rights reserved.\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/product-card/product-card.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/product-card/product-card.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [href]=\"'/product/' + product._id\" class=\"container\">\n  <div class=\"top\">\n    <figure class=\"image\">\n      <img [src]=\"product.imageUrl\" />\n    </figure>\n  </div>\n  <div class=\"bottom\">\n    <div [title]=\"product.name.toUpperCase()\" class=\"name\">\n      {{ product.name }}\n    </div>\n    <div class=\"description has-text-grey\">\n      {{ product.shortDescription }}\n    </div>\n    <div class=\"price has-text-success\">${{ product.price }}</div>\n    <button\n      class=\"button cart-button is-rounded is-pulled-right\"\n      (click)=\"manageCart(); $event.stopPropagation()\"\n      [ngClass]=\"{ 'in-cart': addedToCart, 'not-in-cart': !addedToCart }\"\n    >\n      <i class=\"fas fa-cart-plus\"></i>\n    </button>\n    <div *ngIf=\"isAdmin\" class=\"admin-panel\">\n      <div\n        title=\"edit\"\n        class=\"admin-button edit\"\n        (click)=\"editProduct($event); $event.stopPropagation()\"\n      >\n        <i class=\"fas fa-edit\"></i>\n      </div>\n      <div\n        title=\"delete\"\n        class=\"admin-button trash\"\n        (click)=\"deleteProduct($event); $event.stopPropagation()\"\n      >\n        <i class=\"fas fa-trash-alt\"></i>\n      </div>\n    </div>\n  </div>\n</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-container\">\n  <div class=\"control has-icons-left\">\n    <input\n      class=\"input is-medium is-rounded\"\n      type=\"text\"\n      placeholder=\"Search by name\"\n      [(ngModel)]=\"searchFor\"\n      (input)=\"filterByTagsAndName()\"\n    />\n    <span class=\"icon is-left\">\n      <i class=\"fas fa-search\"></i>\n    </span>\n  </div>\n</div>\n\n<div class=\"buttons-container\">\n  <div\n    id=\"phone\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('phone') }\"\n  >\n    Phones\n  </div>\n  <div\n    id=\"laptop\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('laptop') }\"\n  >\n    Laptops\n  </div>\n  <div\n    id=\"tablet\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('tablet') }\"\n  >\n    Tablets\n  </div>\n  <div\n    id=\"console\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('console') }\"\n  >\n    Consoles\n  </div>\n  <div\n    id=\"pc\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('pc') }\"\n  >\n    PCs\n  </div>\n  <div\n    id=\"2in1\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('2in1') }\"\n  >\n    2 in 1\n  </div>\n  <div\n    id=\"allinone\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('allinone') }\"\n  >\n    All in one\n  </div>\n  <div\n    id=\"tv\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('tv') }\"\n  >\n    TVs\n  </div>\n  <div\n    id=\"monitor\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('monitor') }\"\n  >\n    Monitors\n  </div>\n  <div\n    id=\"photography\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('photography') }\"\n  >\n    Photography\n  </div>\n  <div\n    id=\"other\"\n    class=\"button is-rounded\"\n    (click)=\"filterByTagsAndName($event)\"\n    [ngClass]=\"{ 'is-active': currentFilters.includes('other') }\"\n  >\n    Other\n  </div>\n</div>\n\n<div class=\"container\">\n  <button\n    *ngIf=\"isAdmin$ | async\"\n    class=\"button is-success is-rounded new-product\"\n    (click)=\"newProduct()\"\n  >\n    Add product\n  </button>\n  <div class=\"products-found has-text-grey\">\n    {{ filteredAndSortedProducts?.length }} products found\n  </div>\n  <div class=\"selects-container\">\n    <div class=\"pages-container\">\n      <app-per-page\n        (perPageSelected)=\"selectPerPage($event)\"\n        [perPage]=\"perPage\"\n      ></app-per-page>\n      <app-secondary-pagination\n        *ngIf=\"filteredAndSortedProducts\"\n        [currentPage]=\"currentPage\"\n        [totalPages]=\"totalPages\"\n        (pageChanged)=\"setCurrentPage($event)\"\n      ></app-secondary-pagination>\n    </div>\n    <div class=\"sort-container\">\n      <button\n        (click)=\"clearTags()\"\n        *ngIf=\"currentFilters.length > 1\"\n        class=\"button is-rounded is-danger clear-tags\"\n      >\n        Clear tags <i class=\"fas fa-times\"></i>\n      </button>\n      <app-sort-by\n        page=\"products\"\n        [toSortArr]=\"filteredAndSortedProducts\"\n        [currentSort]=\"currentSort\"\n        (sortChanged)=\"changeSort($event)\"\n      ></app-sort-by>\n    </div>\n  </div>\n  <div *ngIf=\"!filteredAndSortedProducts\" class=\"loading\">Loading...</div>\n  <div *ngIf=\"filteredAndSortedProducts\" class=\"cards-container\">\n    <app-product-card\n      *ngFor=\"\n        let product of filteredAndSortedProducts.slice(\n          currentPage * perPage - perPage,\n          currentPage * perPage\n        )\n      \"\n      [product]=\"product\"\n      [addedToCart]=\"idsOfProductsInCart?.includes(product._id)\"\n      [isAdmin]=\"isAdmin$ | async\"\n      (click)=\"goToProduct($event, product._id); $event.stopPropagation()\"\n    ></app-product-card>\n    <div class=\"no-found\" *ngIf=\"filteredAndSortedProducts.length === 0\">\n      No products found\n    </div>\n  </div>\n</div>\n\n<div class=\"container pagination-container\">\n  <app-main-pagination\n    [currentPage]=\"currentPage\"\n    [totalPages]=\"totalPages\"\n    (pageChanged)=\"setCurrentPage($event)\"\n  ></app-main-pagination>\n</div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  (appClickOutside)=\"deactivate()\"\n  class=\"navbar is-fixed-top\"\n  role=\"navigation\"\n  aria-label=\"main navigation\"\n>\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/\">\n      <p class=\"title logo\">ecom</p>\n    </a>\n    <a\n      (click)=\"toggleIsActive()\"\n      [ngClass]=\"isActive && 'is-active'\"\n      role=\"button\"\n      class=\"navbar-burger burger\"\n      aria-label=\"menu\"\n      aria-expanded=\"false\"\n      data-target=\"navbar\"\n    >\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n\n  <div id=\"navbar\" class=\"navbar-menu\" [ngClass]=\"isActive && 'is-active'\">\n    <div class=\"navbar-start\">\n      <a\n        class=\"navbar-item\"\n        routerLink=\"/products\"\n        (click)=\"deactivate()\"\n        routerLinkActive=\"active-link\"\n      >\n        Home\n      </a>\n      <a\n        *ngIf=\"isAdmin$ | async\"\n        class=\"navbar-item\"\n        routerLink=\"/purchases\"\n        (click)=\"deactivate()\"\n        routerLinkActive=\"active-link\"\n      >\n        Purchases\n      </a>\n      <a\n        *ngIf=\"isAdmin$ | async\"\n        class=\"navbar-item\"\n        routerLink=\"/customers\"\n        (click)=\"deactivate()\"\n        routerLinkActive=\"active-link\"\n      >\n        Customers\n      </a>\n      <div\n        *ngIf=\"loggedInUserId$ | async\"\n        class=\"navbar-item has-dropdown is-hoverable\"\n      >\n        <a\n          class=\"navbar-link\"\n          routerLink=\"/account/{{ loggedInUserId$ | async }}/details\"\n          (click)=\"deactivate()\"\n        >\n          Account\n        </a>\n        <div class=\"navbar-dropdown\">\n          <a\n            class=\"navbar-item\"\n            (click)=\"deactivate()\"\n            routerLink=\"/account/{{ loggedInUserId$ | async }}/details\"\n            routerLinkActive=\"active-link\"\n          >\n            Details\n          </a>\n          <a\n            class=\"navbar-item\"\n            (click)=\"deactivate()\"\n            routerLink=\"/account/{{ loggedInUserId$ | async }}/purchases\"\n            routerLinkActive=\"active-link\"\n          >\n            My purchases\n          </a>\n        </div>\n      </div>\n      <a\n        *ngIf=\"isLoggedIn$ | async\"\n        class=\"navbar-item\"\n        routerLink=\"/cart\"\n        routerLinkActive=\"active-link\"\n        (click)=\"deactivate()\"\n      >\n        Cart\n      </a>\n      <a\n        href=\"https://www.facebook.com/\"\n        target=\"blank\"\n        class=\"navbar-item\"\n        (click)=\"deactivate()\"\n      >\n        Contact\n      </a>\n    </div>\n    <div class=\"navbar-end\">\n      <div class=\"navbar-item\" (click)=\"deactivate()\">\n        <a\n          *ngIf=\"!(isLoggedIn$ | async)\"\n          class=\"button is-primary\"\n          routerLink=\"/login\"\n        >\n          <strong>Log in</strong>\n        </a>\n        <a\n          *ngIf=\"isLoggedIn$ | async\"\n          class=\"button is-primary\"\n          (click)=\"logout()\"\n        >\n          <strong>Log out</strong>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"code has-text-danger\">404</div>\n  <div class=\"text has-text-white\">Oops! Page not found</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"product\" class=\"container\">\n  <button\n    [routerLink]=\"[baseUrlToReturn, urlToReturnParams]\"\n    class=\"button is-primary back\"\n  >\n    <i class=\"fas fa-arrow-left\"></i>Back\n  </button>\n  <div class=\"name\">{{ product?.name }}</div>\n  <div\n    class=\"has-text-success added-info\"\n    [ngClass]=\"{ faded: !showAddedToCartMessage }\"\n  >\n    Added to cart\n  </div>\n  <div class=\"inner-container\">\n    <div class=\"image\">\n      <img *ngIf=\"product\" [src]=\"product.imageUrl\" />\n    </div>\n    <div class=\"helper-container\">\n      <div class=\"descriptions-container\">\n        <div class=\"short-description\">\n          <p class=\"about-info\">About the product:</p>\n          {{ product?.shortDescription }}\n        </div>\n        <div class=\"long-description\">\n          <p class=\"about-info\">Full description:</p>\n          {{ product?.longDescription }}\n        </div>\n      </div>\n      <div class=\"buy-options\">\n        <div class=\"price has-text-success\">${{ product?.price }}</div>\n        <div class=\"button-and-quantity\">\n          <div class=\"input-container\">\n            <button\n              class=\"button is-primary is-rounded\"\n              (click)=\"decrementProducts()\"\n              [disabled]=\"numberOfProducts === 1\"\n            >\n              <i class=\"fas fa-minus\"></i>\n            </button>\n            <input\n              [value]=\"numberOfProducts\"\n              (change)=\"validateControl($event)\"\n              class=\"input is-rounded\"\n            />\n            <button\n              class=\"button is-primary is-rounded\"\n              (click)=\"incrementProducts()\"\n            >\n              <i class=\"fas fa-plus\"></i>\n            </button>\n          </div>\n\n          <button\n            (click)=\"addToCart()\"\n            class=\"button cart-button is-rounded is-primary\"\n          >\n            Add to cart <i class=\"fas fa-cart-plus\"></i>\n          </button>\n          <button\n            class=\"button cart-button is-rounded is-success\"\n            [routerLink]=\"isLoggedIn ? ['/checkout', product._id] : ['/login']\"\n            [queryParams]=\"{ quantity: numberOfProducts }\"\n          >\n            Buy now!\n          </button>\n        </div>\n        <div class=\"info\"><i class=\"far fa-clock\"></i>Delivery in 48h!</div>\n        <div class=\"info\"><i class=\"fas fa-truck\"></i>Free shipping!</div>\n        <div *ngIf=\"isAdmin$ | async\" class=\"admin-panel\">\n          <div title=\"edit\" class=\"admin-button edit\" (click)=\"editProduct()\">\n            <i class=\"fas fa-edit\"></i>\n          </div>\n          <div\n            title=\"delete\"\n            class=\"admin-button trash\"\n            (click)=\"deleteProduct()\"\n          >\n            <i class=\"fas fa-trash-alt\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/display-message/display-message.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/display-message/display-message.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isSuccess\" class=\"container has-background-success\">\n  <div class=\"text\">\n    {{ text }}\n  </div>\n</div>\n\n<div *ngIf=\"!isSuccess\" class=\"container has-background-danger\">\n  <div class=\"text\">\n    {{ text }}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/form-header/form-header.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/form-header/form-header.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-header title has-text-primary\">\n  {{ text }}\n</div>\n<div class=\"form-break\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/form-info/form-info.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/form-info/form-info.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-info has-text-grey\" *ngIf=\"page === 'signup'\">\n  <div class=\"info-text\">\n    Already have an account? <a routerLink=\"/login\">Log in</a> now!\n  </div>\n</div>\n\n<div *ngIf=\"page === 'login'\">\n  <div class=\"form-info has-text-grey\">\n    Don't have an account? <a routerLink=\"/signup\">Sign up</a> now!\n  </div>\n  <div class=\"form-info has-text-grey\">\n    Forgot your password? <a routerLink=\"/forgot\">Click here</a>!\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  *ngIf=\"formGroup.get('confirmPassword')\"\n  type=\"submit\"\n  [disabled]=\"\n    formGroup.invalid ||\n    formGroup.get('confirmPassword').value !== formGroup.get('password').value\n  \"\n  class=\"button submit-button is-primary is-medium\"\n>\n  submit\n</button>\n<button\n  *ngIf=\"!formGroup.get('confirmPassword')\"\n  type=\"submit\"\n  [disabled]=\"formGroup.invalid\"\n  class=\"button submit-button is-primary is-medium\"\n>\n  submit\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"field\" [formGroup]=\"formGroup\">\n  <p class=\"control has-icons-left\">\n    <input\n      [formControlName]=\"controlName\"\n      class=\"input is-medium\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n    />\n    <span\n      *ngIf=\"controlName === 'password' || controlName === 'confirmPassword'\"\n      class=\"icon is-small is-left\"\n    >\n      <i class=\"fas fa-lock\"></i>\n    </span>\n    <span *ngIf=\"controlName === 'email'\" class=\"icon is-small is-left\">\n      <i class=\"fas fa-envelope\"></i>\n    </span>\n  </p>\n</div>\n<div *ngIf=\"controlName === 'email'\">\n  <div\n    class=\"form-error-message has-text-danger\"\n    *ngIf=\"formGroup.get('email').invalid && formGroup.get('email').value\"\n  >\n    Invalid email address\n  </div>\n</div>\n<div *ngIf=\"controlName === 'password'\">\n  <div\n    class=\"form-error-message has-text-danger\"\n    *ngIf=\"formGroup.get('password').invalid && formGroup.get('password').value\"\n  >\n    Password must contain at least 1 letter, one uppercase, one lowercase and be\n    minimum 8 characters long\n  </div>\n</div>\n<div *ngIf=\"controlName === 'confirmPassword'\">\n  <div\n    class=\"form-error-message has-text-danger\"\n    *ngIf=\"\n      formGroup.get('confirmPassword').value !==\n        formGroup.get('password').value &&\n      formGroup.get('confirmPassword').dirty &&\n      !formGroup.get('password').invalid\n    \"\n  >\n    Passwords must match\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\n  <div class=\"white-box\">\n    <app-form-header text=\"Forgot password\"></app-form-header>\n\n    <app-display-message\n      *ngIf=\"displayErrorMessage\"\n      text=\"Provided email address is invalid\"\n    ></app-display-message>\n\n    <app-display-message\n      *ngIf=\"displaySuccessMessage\"\n      isSuccess=\"true\"\n      text=\"Check your email to reset password\"\n    ></app-display-message>\n\n    <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n      <app-user-auth-control\n        [formGroup]=\"forgotPasswordForm\"\n        controlName=\"email\"\n        type=\"email\"\n        placeholder=\"Email\"\n      ></app-user-auth-control>\n\n      <app-submit-button [formGroup]=\"forgotPasswordForm\"></app-submit-button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/login/login.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/login/login.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\n  <div class=\"white-box\">\n    <app-form-header text=\"Log in\"></app-form-header>\n\n    <app-display-message\n      *ngIf=\"displayErrorMessage\"\n      text=\"Provided email address or password are invalid\"\n    ></app-display-message>\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <app-user-auth-control\n        [formGroup]=\"loginForm\"\n        controlName=\"email\"\n        type=\"email\"\n        placeholder=\"Email\"\n      ></app-user-auth-control>\n\n      <app-user-auth-control\n        [formGroup]=\"loginForm\"\n        controlName=\"password\"\n        type=\"password\"\n        placeholder=\"Password\"\n      ></app-user-auth-control>\n\n      <app-submit-button [formGroup]=\"loginForm\"></app-submit-button>\n\n      <div class=\"checkbox-container\">\n        <label class=\"checkbox has-text-grey\">\n          <input formControlName=\"remember\" type=\"checkbox\" />\n          Remember me\n        </label>\n      </div>\n    </form>\n\n    <app-form-info page=\"login\"></app-form-info>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/reset-password/reset-password.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/reset-password/reset-password.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\n  <div class=\"white-box\">\n    <app-form-header text=\"Reset password\"></app-form-header>\n\n    <app-display-message\n      *ngIf=\"displayErrorMessage\"\n      text=\"Something went wrong. Please try again later\"\n    ></app-display-message>\n    <app-display-message\n      *ngIf=\"displaySuccessMessage\"\n      text=\"Password changed! You will be redirected to log in page in {{\n        secondsLeft\n      }} seconds...\"\n      isSuccess=\"true\"\n    ></app-display-message>\n\n    <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\n      <app-user-auth-control\n        [formGroup]=\"resetForm\"\n        controlName=\"password\"\n        type=\"password\"\n        placeholder=\"New password\"\n      ></app-user-auth-control>\n\n      <app-user-auth-control\n        [formGroup]=\"resetForm\"\n        controlName=\"confirmPassword\"\n        type=\"password\"\n        placeholder=\"Confirm new password\"\n      ></app-user-auth-control>\n\n      <app-submit-button [formGroup]=\"resetForm\"></app-submit-button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/signup/signup.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/signup/signup.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\n  <div class=\"white-box\">\n    <app-form-header text=\"Sign up\"></app-form-header>\n\n    <app-display-message\n      *ngIf=\"errorMessage\"\n      [text]=\"errorMessage\"\n    ></app-display-message>\n\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n      <app-user-auth-control\n        [formGroup]=\"signupForm\"\n        controlName=\"email\"\n        type=\"email\"\n        placeholder=\"Email\"\n      ></app-user-auth-control>\n\n      <app-user-auth-control\n        [formGroup]=\"signupForm\"\n        controlName=\"password\"\n        type=\"password\"\n        placeholder=\"Password\"\n      ></app-user-auth-control>\n\n      <app-user-auth-control\n        [formGroup]=\"signupForm\"\n        controlName=\"confirmPassword\"\n        type=\"password\"\n        placeholder=\"Confirm password\"\n      ></app-user-auth-control>\n\n      <app-submit-button [formGroup]=\"signupForm\"></app-submit-button>\n    </form>\n\n    <app-form-info page=\"signup\"></app-form-info>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/main-pagination/main-pagination.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/main-pagination/main-pagination.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"pagination is-centered is-rounded\"\n  role=\"navigation\"\n  aria-label=\"pagination\"\n>\n  <button\n    class=\"pagination-previous button\"\n    (click)=\"previousPage()\"\n    [disabled]=\"currentPage === 1\"\n  >\n    Previous\n  </button>\n  <button\n    class=\"pagination-next button\"\n    (click)=\"nextPage()\"\n    [disabled]=\"currentPage === totalPages || totalPages === 0\"\n  >\n    Next page\n  </button>\n  <ul class=\"pagination-list\">\n    <li>\n      <a\n        class=\"pagination-link\"\n        [ngClass]=\"currentPage === 1 && 'is-current'\"\n        (click)=\"goToPage(1)\"\n        >1</a\n      >\n    </li>\n    <li *ngIf=\"currentPage > 3 && totalPages > 4\">\n      <span class=\"pagination-ellipsis has-text-white\">&hellip;</span>\n    </li>\n    <li *ngIf=\"totalPages > 2\">\n      <a\n        #first\n        class=\"pagination-link\"\n        [ngClass]=\"currentPage == first.textContent && 'is-current'\"\n        (click)=\"goToPage(first.textContent)\"\n        >{{\n          currentPage < 3 || totalPages < 5\n            ? 2\n            : currentPage > totalPages - 2\n            ? totalPages - 3\n            : currentPage - 1\n        }}</a\n      >\n    </li>\n    <li *ngIf=\"totalPages > 3\">\n      <a\n        #second\n        class=\"pagination-link\"\n        [ngClass]=\"currentPage == second.textContent && 'is-current'\"\n        (click)=\"goToPage(second.textContent)\"\n        >{{\n          currentPage < 3 || totalPages < 5\n            ? 3\n            : currentPage > totalPages - 2\n            ? totalPages - 2\n            : currentPage\n        }}</a\n      >\n    </li>\n    <li *ngIf=\"totalPages > 4\">\n      <a\n        #third\n        class=\"pagination-link\"\n        [ngClass]=\"currentPage == third.textContent && 'is-current'\"\n        (click)=\"goToPage(third.textContent)\"\n        >{{\n          currentPage < 3 || totalPages < 5\n            ? 4\n            : currentPage > totalPages - 2\n            ? totalPages - 1\n            : currentPage + 1\n        }}</a\n      >\n    </li>\n    <li *ngIf=\"currentPage < totalPages - 2 && totalPages > 4\">\n      <span class=\"pagination-ellipsis has-text-white\">&hellip;</span>\n    </li>\n    <li *ngIf=\"totalPages > 1\">\n      <a\n        class=\"pagination-link\"\n        [ngClass]=\"currentPage === totalPages && 'is-current'\"\n        (click)=\"goToPage(totalPages)\"\n        >{{ totalPages }}</a\n      >\n    </li>\n  </ul>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/per-page/per-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/per-page/per-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown\" [ngClass]=\"isActive && 'is-active'\">\n  <div\n    class=\"dropdown-trigger\"\n    (click)=\"toggleIsActive()\"\n    (appClickOutside)=\"deactivate()\"\n  >\n    <button\n      class=\"button is-rounded\"\n      aria-haspopup=\"true\"\n      aria-controls=\"dropdown-menu\"\n    >\n      <span>{{ perPage }}</span>\n      <span class=\"icon is-small\">\n        <i\n          class=\"fas fa-angle-down\"\n          [ngClass]=\"isActive ? 'fa-angle-up' : 'fa-angle-down'\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"dropdown-menu\" id=\"dropdown-menu\" role=\"menu\">\n    <div class=\"dropdown-content\">\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"perPage === 20 && 'is-active'\"\n        (click)=\"selectPerPage($event.target.textContent)\"\n      >\n        20\n      </a>\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"perPage === 40 && 'is-active'\"\n        (click)=\"selectPerPage($event.target.textContent)\"\n      >\n        40\n      </a>\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"perPage === 60 && 'is-active'\"\n        (click)=\"selectPerPage($event.target.textContent)\"\n      >\n        60\n      </a>\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"perPage === 80 && 'is-active'\"\n        (click)=\"selectPerPage($event.target.textContent)\"\n      >\n        80\n      </a>\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"perPage === 100 && 'is-active'\"\n        (click)=\"selectPerPage($event.target.textContent)\"\n      >\n        100\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-form/product-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-form/product-form.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">\n  {{ data.type === \"new\" ? \"New product\" : \"Edit product\" }}\n</div>\n\n<form #productForm=\"ngForm\" (ngSubmit)=\"submit()\">\n  <input\n    [(ngModel)]=\"product.name\"\n    #name=\"ngModel\"\n    type=\"text\"\n    class=\"input\"\n    name=\"name\"\n    placeholder=\"Product name\"\n    required\n  />\n  <input\n    [(ngModel)]=\"product.imageUrl\"\n    #image=\"ngModel\"\n    type=\"text\"\n    class=\"input\"\n    name=\"image\"\n    placeholder=\"Image URL\"\n    required\n  />\n  <textarea\n    [(ngModel)]=\"product.shortDescription\"\n    #shortDescription=\"ngModel\"\n    class=\"textarea\"\n    name=\"shortDescription\"\n    placeholder=\"Short description\"\n    rows=\"5\"\n    required\n  ></textarea>\n  <textarea\n    [(ngModel)]=\"product.longDescription\"\n    #shortDescription=\"ngModel\"\n    class=\"textarea\"\n    name=\"longDescription\"\n    placeholder=\"Long description\"\n    rows=\"5\"\n    required\n  ></textarea>\n  <input\n    [(ngModel)]=\"product.price\"\n    #shortDescription=\"ngModel\"\n    type=\"number\"\n    min=\"0\"\n    class=\"input\"\n    name=\"price\"\n    (change)=\"validatePrice($event)\"\n    required\n  />\n  <input\n    [(ngModel)]=\"product.tag\"\n    #shortDescription=\"ngModel\"\n    type=\"text\"\n    class=\"input\"\n    name=\"tag\"\n    placeholder=\"Tag i.e. phone\"\n    required\n  />\n  <button\n    class=\"button is-primary\"\n    [disabled]=\"!productForm.valid\"\n    type=\"submit\"\n  >\n    Submit\n  </button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/secondary-pagination/secondary-pagination.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/secondary-pagination/secondary-pagination.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pagination-container\">\n  <button\n    class=\"button is-rounded\"\n    (click)=\"previousPage()\"\n    [disabled]=\"currentPage === 1\"\n  >\n    <i class=\"fas fa-arrow-left\"></i>\n  </button>\n  <input\n    type=\"number\"\n    class=\"input is-rounded\"\n    [value]=\"totalPages > 0 ? currentPage : 0\"\n    (change)=\"validatePageControl($event)\"\n    [disabled]=\"totalPages === 0\"\n  />\n  <label class=\"has-text-grey\">of {{ totalPages }}</label>\n  <button\n    class=\"button is-rounded\"\n    (click)=\"nextPage()\"\n    [disabled]=\"currentPage === totalPages || totalPages === 0\"\n  >\n    <i class=\"fas fa-arrow-right\"></i>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/sort-by/sort-by.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/sort-by/sort-by.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"dropdown\"\n  [ngClass]=\"{ 'is-active': isActive, 'is-right': innerWidth > 460 }\"\n>\n  <div\n    class=\"dropdown-trigger\"\n    (click)=\"toggleIsActive()\"\n    (appClickOutside)=\"deactivate()\"\n  >\n    <button\n      class=\"button is-rounded\"\n      aria-haspopup=\"true\"\n      aria-controls=\"dropdown-menu\"\n    >\n      <span>{{ currentSort }}</span>\n      <span class=\"icon is-small\">\n        <i\n          class=\"fas fa-angle-down\"\n          [ngClass]=\"isActive ? 'fa-angle-up' : 'fa-angle-down'\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"dropdown-menu\" id=\"dropdown-menu\" role=\"menu\">\n    <div class=\"dropdown-content\">\n      <a\n        *ngIf=\"page === 'products'\"\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Randomize' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Randomize\n      </a>\n      <a\n        *ngIf=\"page === 'purchases'\"\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Date: new first' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Date: new first\n      </a>\n      <a\n        *ngIf=\"page === 'purchases'\"\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Date: old first' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Date: old first\n      </a>\n      <a\n        *ngIf=\"page != 'customers'\"\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Price: ascending' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Price: ascending\n      </a>\n      <a\n        *ngIf=\"page != 'customers'\"\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Price: descending' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Price: descending\n      </a>\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Name: A-Z' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Name: A-Z\n      </a>\n      <a\n        class=\"dropdown-item\"\n        [ngClass]=\"currentSort === 'Name: Z-A' && 'is-active'\"\n        (click)=\"changeSort($event.target.textContent)\"\n      >\n        Name: Z-A\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _pages_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/account-details/account-details.component */ "./src/app/pages/account-details/account-details.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _pages_account_purchases_account_purchases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/account-purchases/account-purchases.component */ "./src/app/pages/account-purchases/account-purchases.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/customers/customers.component */ "./src/app/pages/customers/customers.component.ts");












const routes = [
    { path: "", pathMatch: "full", redirectTo: "products" },
    { path: "products", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "cart", component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "product/:id", component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    {
        path: "account",
        component: _pages_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_6__["AccountDetailsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: "account/:id/details",
        component: _pages_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_6__["AccountDetailsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: "account/:id/purchases",
        component: _pages_account_purchases_account_purchases_component__WEBPACK_IMPORTED_MODULE_9__["AccountPurchasesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: "purchases",
        component: _pages_account_purchases_account_purchases_component__WEBPACK_IMPORTED_MODULE_9__["AccountPurchasesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]]
    },
    {
        path: "customers",
        component: _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_11__["CustomersComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]]
    },
    {
        path: "checkout/:id",
        component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    { path: "checkout", component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-to-top {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  width: 40px;\n  height: 40px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG59XHJcbiIsIi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    onWindowScroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            document.getElementById("scroll-button").style.opacity = "1";
        }
        else {
            document.getElementById("scroll-button").style.opacity = "0";
        }
    }
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
], AppComponent.prototype, "onWindowScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var _pages_user_auth_pages_user_auth_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-auth-pages/user-auth-pages.module */ "./src/app/pages/user-auth-pages/user-auth-pages.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_web_req_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/web-req.interceptor */ "./src/app/interceptors/web-req.interceptor.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_home_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/components/product-card/product-card.component */ "./src/app/pages/home/components/product-card/product-card.component.ts");
/* harmony import */ var _shared_components_sort_by_sort_by_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-components/sort-by/sort-by.component */ "./src/app/shared-components/sort-by/sort-by.component.ts");
/* harmony import */ var _shared_components_per_page_per_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared-components/per-page/per-page.component */ "./src/app/shared-components/per-page/per-page.component.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/click-outside.directive */ "./src/app/directives/click-outside.directive.ts");
/* harmony import */ var _shared_components_main_pagination_main_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared-components/main-pagination/main-pagination.component */ "./src/app/shared-components/main-pagination/main-pagination.component.ts");
/* harmony import */ var _shared_components_secondary_pagination_secondary_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared-components/secondary-pagination/secondary-pagination.component */ "./src/app/shared-components/secondary-pagination/secondary-pagination.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _pages_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/account-details/account-details.component */ "./src/app/pages/account-details/account-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pages_account_details_components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/account-details/components/edit-form/edit-form.component */ "./src/app/pages/account-details/components/edit-form/edit-form.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _pages_account_purchases_account_purchases_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/account-purchases/account-purchases.component */ "./src/app/pages/account-purchases/account-purchases.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared-components/product-form/product-form.component */ "./src/app/shared-components/product-form/product-form.component.ts");
/* harmony import */ var _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/customers/customers.component */ "./src/app/pages/customers/customers.component.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _pages_home_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ItemCardComponent"],
            _shared_components_sort_by_sort_by_component__WEBPACK_IMPORTED_MODULE_12__["SortByComponent"],
            _shared_components_per_page_per_page_component__WEBPACK_IMPORTED_MODULE_13__["PerPageComponent"],
            _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_14__["ClickOutsideDirective"],
            _shared_components_main_pagination_main_pagination_component__WEBPACK_IMPORTED_MODULE_15__["MainPaginationComponent"],
            _shared_components_secondary_pagination_secondary_pagination_component__WEBPACK_IMPORTED_MODULE_16__["SecondaryPaginationComponent"],
            _pages_product_product_component__WEBPACK_IMPORTED_MODULE_17__["ProductComponent"],
            _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"],
            _pages_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_20__["AccountDetailsComponent"],
            _pages_account_details_components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_22__["EditFormComponent"],
            _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__["CheckoutComponent"],
            _pages_account_purchases_account_purchases_component__WEBPACK_IMPORTED_MODULE_24__["AccountPurchasesComponent"],
            _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
            _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_26__["PageNotFoundComponent"],
            _shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__["ProductFormComponent"],
            _pages_customers_customers_component__WEBPACK_IMPORTED_MODULE_28__["CustomersComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _pages_user_auth_pages_user_auth_pages_module__WEBPACK_IMPORTED_MODULE_7__["UserAuthPagesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptors_web_req_interceptor__WEBPACK_IMPORTED_MODULE_9__["WebReqInterceptor"], multi: true }
        ],
        entryComponents: [_pages_account_details_components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_22__["EditFormComponent"], _shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__["ProductFormComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/directives/click-outside.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/click-outside.directive.ts ***!
  \*******************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.appClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside)
            this.appClickOutside.emit();
    }
};
ClickOutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClickOutsideDirective.prototype, "appClickOutside", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event.target"])
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appClickOutside]"
    })
], ClickOutsideDirective);



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_web_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/web-request.service */ "./src/app/services/web-request.service.ts");






let AdminGuard = class AdminGuard {
    constructor(webService, authService, router) {
        this.webService = webService;
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return this.webService.get(`users/${this.authService.getUserId()}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            if (res.body.isAdmin)
                return true;
            this.router.navigate(["/"]);
            return false;
        }));
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_web_request_service__WEBPACK_IMPORTED_MODULE_5__["WebRequestService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AdminGuard);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.checkIsLoggedIn()) {
            this.router.navigate(["/"]);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/is-logged-in.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/is-logged-in.guard.ts ***!
  \**********************************************/
/*! exports provided: IsLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedInGuard", function() { return IsLoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let IsLoggedInGuard = class IsLoggedInGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.checkIsLoggedIn()) {
            this.router.navigate(["/"]);
            return false;
        }
        return true;
    }
};
IsLoggedInGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsLoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], IsLoggedInGuard);



/***/ }),

/***/ "./src/app/interceptors/web-req.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/interceptors/web-req.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WebReqInterceptor = class WebReqInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    intercept(request, next) {
        request = this.addAuthHeader(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            if (error.status === 401) {
                // 401 error so we are unauthorized
                // try to refresh the access token
                return this.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
                    request = this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
                    this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request to refresh the access
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
                this.refreshingAccessToken = false;
                this.accessTokenRefreshed.next();
            }));
        }
    }
    addAuthHeader(request) {
        const token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    "x-access-token": token
                }
            });
        }
        return request;
    }
};
WebReqInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
WebReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], WebReqInterceptor);



/***/ }),

/***/ "./src/app/pages/account-details/account-details.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/account-details/account-details.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 50px;\n}\n.container .purchases-button {\n  display: block;\n}\n@media (max-width: 1024px) {\n  .container {\n    height: 94.5vh;\n    margin-top: 0;\n    border-radius: 0;\n  }\n}\n.container .info-title {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  font-size: 24px;\n  display: inline-block;\n}\n.container .edit {\n  margin-left: 10px;\n}\n.container .detail {\n  margin: 5px 0;\n}\n.container .detail .detail-title {\n  display: inline-block;\n  margin-right: 5px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWxzL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50LWRldGFpbHNcXGFjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWxzL2FjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREVFO0VBUEY7SUFRSSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VDQ0Y7QUFDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0FDREo7QURHSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWxzL2FjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIC5wdXJjaGFzZXMtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgaGVpZ2h0OiA5NC41dmg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIC5pbmZvLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZWRpdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWwge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAuZGV0YWlsLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNvbnRhaW5lciAucHVyY2hhc2VzLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDk0LjV2aDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi5jb250YWluZXIgLmluZm8tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhaW5lciAuZWRpdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlsIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5jb250YWluZXIgLmRldGFpbCAuZGV0YWlsLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/account-details/account-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-details/account-details.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function() { return AccountDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-form/edit-form.component */ "./src/app/pages/account-details/components/edit-form/edit-form.component.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let AccountDetailsComponent = class AccountDetailsComponent {
    constructor(route, usersService, dialog, authService, router) {
        this.route = route;
        this.usersService = usersService;
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
        this.canEdit = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.userId = paramMap.get("id");
            this.usersService.getUser(this.userId).subscribe((user) => {
                this.user = user;
                if (this.userId === this.authService.getUserId())
                    this.canEdit = true;
            }, () => this.router.navigate(["/"]));
        });
    }
    editInfo(infoType) {
        const dialogRef = this.dialog.open(_components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_4__["EditFormComponent"], {
            width: "580px",
            data: { user: this.user, infoType }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.usersService
                    .updateUser(this.userId, { result })
                    .subscribe((user) => (this.user = user));
            }
        });
    }
};
AccountDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-account-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-details/account-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-details.component.scss */ "./src/app/pages/account-details/account-details.component.scss")).default]
    })
], AccountDetailsComponent);



/***/ }),

/***/ "./src/app/pages/account-details/components/edit-form/edit-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account-details/components/edit-form/edit-form.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  margin: 10px 0;\n}\n\n.button {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWxzL2NvbXBvbmVudHMvZWRpdC1mb3JtL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50LWRldGFpbHNcXGNvbXBvbmVudHNcXGVkaXQtZm9ybVxcZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50LWRldGFpbHMvY29tcG9uZW50cy9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtZGV0YWlscy9jb21wb25lbnRzL2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiLmlucHV0IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/account-details/components/edit-form/edit-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/account-details/components/edit-form/edit-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let EditFormComponent = class EditFormComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.personalInformations = new PersonalInformations(this.data.user.email, this.data.user.name.firstName, this.data.user.name.lastName);
        this.addressDetails = new AddressDetails(this.data.user.address.street, this.data.user.address.city, this.data.user.address.country, this.data.user.address.postcode);
    }
    updatePersonalInfo() {
        this.dialogRef.close({
            email: this.personalInformations.email,
            name: {
                firstName: this.personalInformations.firstName,
                lastName: this.personalInformations.lastName
            }
        });
    }
    updateAddressDetails() {
        this.dialogRef.close({
            address: {
                street: this.addressDetails.street,
                city: this.addressDetails.city,
                country: this.addressDetails.country,
                postcode: this.addressDetails.postcode
            }
        });
    }
};
EditFormComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
EditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-details/components/edit-form/edit-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-form.component.scss */ "./src/app/pages/account-details/components/edit-form/edit-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditFormComponent);

class PersonalInformations {
    constructor(email, firstName, lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class AddressDetails {
    constructor(street, city, country, postcode) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.postcode = postcode;
    }
}


/***/ }),

/***/ "./src/app/pages/account-purchases/account-purchases.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account-purchases/account-purchases.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-container {\n  margin: 0 auto;\n  margin-top: 20px;\n  max-width: 1344px;\n  text-align: center;\n}\n.input-container .control {\n  width: 90%;\n  margin: 0 auto;\n}\n.container {\n  margin-top: 20px;\n}\n.container .loading {\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 20px;\n}\n@media (max-width: 360px) {\n  .container .title {\n    font-size: 26px;\n  }\n}\n.container .details-button {\n  margin-bottom: 20px;\n}\n.container .selects-container {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 580px) {\n  .container .selects-container {\n    padding: 0 10px;\n  }\n}\n@media (max-width: 460px) {\n  .container .selects-container {\n    flex-direction: column-reverse;\n  }\n}\n.container .selects-container .pages-container {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 460px) {\n  .container .selects-container .pages-container {\n    margin-top: 20px;\n  }\n}\n.container .selects-container .sort-container {\n  display: flex;\n}\n.container .purchase-container {\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 5px;\n}\n.container .purchase-container .purchase {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n}\n@media (max-width: 950px) {\n  .container .purchase-container .purchase {\n    display: block;\n  }\n}\n.container .purchase-container .purchase .user-name {\n  font-weight: bold;\n  max-width: 190px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #4a4a4a;\n}\n.container .purchase-container .purchase .user-name:hover {\n  text-decoration: underline;\n}\n.container .purchase-container .purchase .user-name .last-name {\n  text-transform: uppercase;\n}\n.container .purchase-container .purchase .image-and-name {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 420px) {\n  .container .purchase-container .purchase .image-and-name {\n    display: block;\n  }\n}\n.container .purchase-container .purchase .image-and-name .image {\n  width: 80px;\n}\n@media (max-width: 950px) {\n  .container .purchase-container .purchase .image-and-name .image {\n    display: inline-block;\n    width: 180px;\n  }\n}\n@media (max-width: 520px) {\n  .container .purchase-container .purchase .image-and-name .image {\n    width: 130px;\n  }\n}\n@media (max-width: 420px) {\n  .container .purchase-container .purchase .image-and-name .image {\n    display: block;\n    margin: 0 auto;\n    width: 180px;\n  }\n}\n.container .purchase-container .purchase .image-and-name .name {\n  margin-left: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #4a4a4a;\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.container .purchase-container .purchase .image-and-name .name:hover {\n  text-decoration: underline;\n}\n@media (max-width: 950px) {\n  .container .purchase-container .purchase .image-and-name .name {\n    width: unset;\n    display: inline-block;\n    line-height: 156px;\n    margin-left: 50px;\n    font-size: 18px;\n    max-width: 450px;\n  }\n}\n@media (max-width: 720px) {\n  .container .purchase-container .purchase .image-and-name .name {\n    max-width: 350px;\n  }\n}\n@media (max-width: 620px) {\n  .container .purchase-container .purchase .image-and-name .name {\n    margin-left: 15px;\n    max-width: 280px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 520px) {\n  .container .purchase-container .purchase .image-and-name .name {\n    margin-left: 5px;\n    max-width: 250px;\n    line-height: 112.5px;\n  }\n}\n@media (max-width: 420px) {\n  .container .purchase-container .purchase .image-and-name .name {\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n    line-height: 30px;\n  }\n}\n.container .purchase-container .purchase .prop {\n  font-weight: bold;\n  text-align: center;\n}\n@media (max-width: 950px) {\n  .container .purchase-container .purchase .prop {\n    display: inline-block;\n    margin-right: 160px;\n    width: 100%;\n    text-align: left;\n  }\n}\n@media (max-width: 720px) {\n  .container .purchase-container .purchase .prop {\n    margin-right: 110px;\n  }\n}\n@media (max-width: 620px) {\n  .container .purchase-container .purchase .prop {\n    margin-right: 35px;\n  }\n}\n@media (max-width: 460px) {\n  .container .purchase-container .purchase .prop {\n    margin-right: 15px;\n  }\n}\n@media (max-width: 420px) {\n  .container .purchase-container .purchase .prop {\n    display: block;\n    width: 100%;\n    text-align: left;\n    margin: 5px 0;\n  }\n}\n.container .purchase-container .purchase .buyer {\n  width: 160px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.container .purchase-container .purchase .date {\n  width: 150px;\n}\n.container .purchase-container .purchase .qty {\n  width: 60px;\n}\n.container .purchase-container .purchase .price {\n  width: 135px;\n}\n@media (max-width: 950px) {\n  .container .purchase-container .purchase .price {\n    margin-right: 0;\n  }\n}\n.pagination-container {\n  background: transparent;\n  padding: 0 0 20px 0;\n}\n@media (max-width: 1024px) {\n  .pagination-container {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1wdXJjaGFzZXMvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGFjY291bnQtcHVyY2hhc2VzXFxhY2NvdW50LXB1cmNoYXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC1wdXJjaGFzZXMvYWNjb3VudC1wdXJjaGFzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDQ0o7QURHQTtFQUNFLGdCQUFBO0FDQUY7QURFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRElJO0VBREY7SUFFSSxlQUFBO0VDREo7QUFDRjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0hKO0FES0k7RUFMRjtJQU1JLGVBQUE7RUNGSjtBQUNGO0FESUk7RUFURjtJQVVJLDhCQUFBO0VDREo7QUFDRjtBREdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRE47QURHTTtFQUpGO0lBS0ksZ0JBQUE7RUNBTjtBQUNGO0FER0k7RUFDRSxhQUFBO0FDRE47QURLRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSE47QURLTTtFQU5GO0lBT0ksY0FBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRlI7QURJUTtFQUNFLDBCQUFBO0FDRlY7QURLUTtFQUNFLHlCQUFBO0FDSFY7QURPTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0xSO0FET1E7RUFKRjtJQUtJLGNBQUE7RUNKUjtBQUNGO0FETVE7RUFDRSxXQUFBO0FDSlY7QURNVTtFQUhGO0lBSUkscUJBQUE7SUFDQSxZQUFBO0VDSFY7QUFDRjtBREtVO0VBUkY7SUFTSSxZQUFBO0VDRlY7QUFDRjtBRElVO0VBWkY7SUFhSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUNEVjtBQUNGO0FESVE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZWO0FESVU7RUFDRSwwQkFBQTtBQ0ZaO0FES1U7RUFkRjtJQWVJLFlBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNGVjtBQUNGO0FESVU7RUF2QkY7SUF3QkksZ0JBQUE7RUNEVjtBQUNGO0FER1U7RUEzQkY7SUE0QkksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNBVjtBQUNGO0FERVU7RUFqQ0Y7SUFrQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDQ1Y7QUFDRjtBRENVO0VBdkNGO0lBd0NJLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ0VWO0FBQ0Y7QURDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBSkY7SUFLSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDRVI7QUFDRjtBREFRO0VBWEY7SUFZSSxtQkFBQTtFQ0dSO0FBQ0Y7QUREUTtFQWZGO0lBZ0JJLGtCQUFBO0VDSVI7QUFDRjtBREZRO0VBbkJGO0lBb0JJLGtCQUFBO0VDS1I7QUFDRjtBREhRO0VBdkJGO0lBd0JJLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VDTVI7QUFDRjtBREhNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0tSO0FERk07RUFDRSxZQUFBO0FDSVI7QURETTtFQUNFLFdBQUE7QUNHUjtBREFNO0VBQ0UsWUFBQTtBQ0VSO0FEQVE7RUFIRjtJQUlJLGVBQUE7RUNHUjtBQUNGO0FER0E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FDQUY7QURFRTtFQUpGO0lBS0ksaUJBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50LXB1cmNoYXNlcy9hY2NvdW50LXB1cmNoYXNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMzQ0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAuY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAubG9hZGluZyB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdHMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlcy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb3J0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHVyY2hhc2UtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1heC13aWR0aDogMTkwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNzQsIDc0LCA3NCk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdC1uYW1lIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1hZ2UtYW5kLW5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcclxuICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEyLjVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucHJvcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV5ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5xdHkge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJpY2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMzVweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4iLCIuaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1heC13aWR0aDogMTM0NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXQtY29udGFpbmVyIC5jb250cm9sIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAubG9hZGluZyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuY29udGFpbmVyIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG4uY29udGFpbmVyIC5kZXRhaWxzLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyIC5zZWxlY3RzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5jb250YWluZXIgLnNlbGVjdHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuY29udGFpbmVyIC5zZWxlY3RzLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG4uY29udGFpbmVyIC5zZWxlY3RzLWNvbnRhaW5lciAucGFnZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuY29udGFpbmVyIC5zZWxlY3RzLWNvbnRhaW5lciAucGFnZXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5zZWxlY3RzLWNvbnRhaW5lciAuc29ydC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLnVzZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDE5MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICM0YTRhNGE7XG59XG4uY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC51c2VyLW5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLnVzZXItbmFtZSAubGFzdC1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC5pbWFnZS1hbmQtbmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIC5pbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIC5pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAuaW1hZ2UtYW5kLW5hbWUgLmltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIC5uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICB3aWR0aDogMjUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAuaW1hZ2UtYW5kLW5hbWUgLm5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC5pbWFnZS1hbmQtbmFtZSAubmFtZSB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMTU2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC5pbWFnZS1hbmQtbmFtZSAubmFtZSB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIC5uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLmltYWdlLWFuZC1uYW1lIC5uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMi41cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC5pbWFnZS1hbmQtbmFtZSAubmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC5wcm9wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuY29udGFpbmVyIC5wdXJjaGFzZS1jb250YWluZXIgLnB1cmNoYXNlIC5wcm9wIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAucHJvcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLnByb3Age1xuICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLnByb3Age1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLnByb3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxufVxuLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAuYnV5ZXIge1xuICB3aWR0aDogMTYwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAuZGF0ZSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5jb250YWluZXIgLnB1cmNoYXNlLWNvbnRhaW5lciAucHVyY2hhc2UgLnF0eSB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAucHJpY2Uge1xuICB3aWR0aDogMTM1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmNvbnRhaW5lciAucHVyY2hhc2UtY29udGFpbmVyIC5wdXJjaGFzZSAucHJpY2Uge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account-purchases/account-purchases.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/account-purchases/account-purchases.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountPurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPurchasesComponent", function() { return AccountPurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_purchases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/purchases.service */ "./src/app/services/purchases.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let AccountPurchasesComponent = class AccountPurchasesComponent {
    constructor(route, router, purchasesService, productsService, authService) {
        this.route = route;
        this.router = router;
        this.purchasesService = purchasesService;
        this.productsService = productsService;
        this.authService = authService;
        this.showShippingDetailsIds = [];
        this.searchFor = "";
        this.currentPage = 1;
        this.perPage = 20;
        this.currentSort = "Date: new first";
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (paramMap.get("id")) {
                this.userId = paramMap.get("id");
                this.purchasesService.getAllPurchasesForUser(this.userId).subscribe((purchases) => this.initializePurchases(purchases, paramMap), () => this.router.navigate(["/"]));
            }
            else {
                this.isAdmin = true;
                this.purchasesService
                    .getAllPurchases(this.authService.getUserId())
                    .subscribe((purchases) => this.initializePurchases(purchases, paramMap));
            }
        });
    }
    initializePurchases(purchases, paramMap) {
        this.purchases = purchases;
        this.filteredAndSortedPurchases = purchases;
        this.setTotalPages();
        if (paramMap.get("perPage"))
            this.perPage = Number(paramMap.get("perPage"));
        if (paramMap.get("page"))
            this.currentPage = Number(paramMap.get("page"));
        if (paramMap.get("search")) {
            this.searchFor = paramMap.get("search");
            this.filterByName();
        }
        if (paramMap.get("sort")) {
            this.currentSort = paramMap.get("sort");
        }
    }
    toggleShippingDetails(id) {
        if (this.showShippingDetailsIds.includes(id)) {
            const index = this.showShippingDetailsIds.indexOf(id);
            this.showShippingDetailsIds.splice(index, 1);
        }
        else {
            this.showShippingDetailsIds.push(id);
        }
    }
    filterByName() {
        const arr = [];
        for (let purchase of this.purchases) {
            if (purchase.product.name
                .toLowerCase()
                .includes(this.searchFor.toLowerCase()))
                arr.push(purchase);
        }
        this.filteredAndSortedPurchases = arr;
        this.setTotalPages();
        this.currentPage = 1;
    }
    selectPerPage(num) {
        this.perPage = num;
        this.setTotalPages();
        this.currentPage = 1;
    }
    setTotalPages() {
        this.totalPages = Math.ceil(this.filteredAndSortedPurchases.length / this.perPage);
    }
    setCurrentPage(num) {
        this.currentPage = num;
    }
    changeSort(sortName) {
        this.currentSort = sortName;
    }
    goToProduct(event, id) {
        event.preventDefault();
        if (!this.isAdmin)
            this.productsService.emitBaseUrl(`/account/${this.userId}/purchases`);
        else
            this.productsService.emitBaseUrl(`/purchases`);
        this.productsService.emitUrlParams(this.generateUrlParams());
        this.router.navigate([`/product/${id}`]);
    }
    generateUrlParams() {
        return {
            page: this.currentPage,
            perPage: this.perPage,
            sort: this.currentSort,
            search: this.searchFor
        };
    }
    goToUser(event, id) {
        event.preventDefault();
        this.router.navigate([`/account/${id}/details`]);
    }
};
AccountPurchasesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_purchases_service__WEBPACK_IMPORTED_MODULE_2__["PurchasesService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AccountPurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-account-purchases",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-purchases.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-purchases/account-purchases.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-purchases.component.scss */ "./src/app/pages/account-purchases/account-purchases.component.scss")).default]
    })
], AccountPurchasesComponent);



/***/ }),

/***/ "./src/app/pages/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1025px) {\n  .container {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 1024px) {\n  .container {\n    margin-top: 0;\n    border-radius: 0;\n    height: 100vh;\n    overflow: auto;\n  }\n}\n@media (max-width: 420px) {\n  .container .title {\n    font-size: 24px;\n  }\n}\n.container .button-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.container .button-container .button {\n  width: 112px;\n}\n.container .product {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #dddddd;\n}\n@media (max-width: 750px) {\n  .container .product {\n    display: block;\n  }\n}\n.container .product .image {\n  width: 100px;\n}\n@media (max-width: 750px) {\n  .container .product .image {\n    display: inline-block;\n    width: 180px;\n  }\n}\n@media (max-width: 520px) {\n  .container .product .image {\n    width: 130px;\n  }\n}\n@media (max-width: 420px) {\n  .container .product .image {\n    display: block;\n    margin: 0 auto;\n    width: 180px;\n  }\n}\n.container .product .name {\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #4a4a4a;\n  width: 240px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.container .product .name:hover {\n  text-decoration: underline;\n}\n@media (max-width: 750px) {\n  .container .product .name {\n    width: unset;\n    display: inline-block;\n    line-height: 156px;\n    margin-left: 50px;\n    font-size: 18px;\n    max-width: 350px;\n  }\n}\n@media (max-width: 630px) {\n  .container .product .name {\n    margin-left: 15px;\n    max-width: 280px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 520px) {\n  .container .product .name {\n    margin-left: 0;\n    max-width: 250px;\n    line-height: 112.5px;\n  }\n}\n@media (max-width: 420px) {\n  .container .product .name {\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n    line-height: 30px;\n  }\n}\n.container .product .input-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .product .input-container .input {\n  margin: 10px;\n  width: 48px;\n  height: 32px;\n  padding: 6px;\n  text-align: center;\n}\n.container .product .input-container .button {\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.container .product .price {\n  font-weight: bold;\n  text-align: center;\n  margin: 5px 0;\n  width: 135px;\n}\n@media (max-width: 750px) {\n  .container .product .price {\n    width: unset;\n  }\n}\n.container .product .price .remove {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n@media (max-width: 750px) {\n  .container .product .price .remove {\n    display: none;\n  }\n}\n.container .product .price .remove-button {\n  display: none;\n}\n@media (max-width: 750px) {\n  .container .product .price .remove-button {\n    display: block;\n  }\n}\n@media (max-width: 420px) {\n  .container .product .price .remove-button {\n    margin-top: 5px;\n  }\n}\n.container .product .price .remove-button i {\n  vertical-align: middle;\n}\n.container .total {\n  font-weight: bold;\n  text-align: right;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9DOlxcQW5ndWxhciBwcm9qZWN0c1xcZWNvbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBTEY7SUFNSSxtQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQVRGO0lBVUksYUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUNHRjtBQUNGO0FEQUk7RUFERjtJQUVJLGVBQUE7RUNHSjtBQUNGO0FEQUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDQUo7QURFSTtFQVBGO0lBUUksY0FBQTtFQ0NKO0FBQ0Y7QURDSTtFQUNFLFlBQUE7QUNDTjtBRENNO0VBSEY7SUFJSSxxQkFBQTtJQUNBLFlBQUE7RUNFTjtBQUNGO0FEQU07RUFSRjtJQVNJLFlBQUE7RUNHTjtBQUNGO0FERE07RUFaRjtJQWFJLGNBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQ0lOO0FBQ0Y7QURESTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0dOO0FERE07RUFDRSwwQkFBQTtBQ0dSO0FEQU07RUFiRjtJQWNJLFlBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNHTjtBQUNGO0FERE07RUF0QkY7SUF1QkksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNJTjtBQUNGO0FERk07RUE1QkY7SUE2QkksY0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7RUNLTjtBQUNGO0FESE07RUFsQ0Y7SUFtQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDTU47QUFDRjtBREhJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNLTjtBREhNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS1I7QURGTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0lSO0FEQUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFTjtBREFNO0VBTkY7SUFPSSxZQUFBO0VDR047QUFDRjtBRERNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNHUjtBRERRO0VBTEY7SUFNSSxhQUFBO0VDSVI7QUFDRjtBRERNO0VBQ0UsYUFBQTtBQ0dSO0FERFE7RUFIRjtJQUlJLGNBQUE7RUNJUjtBQUNGO0FERlE7RUFQRjtJQVFJLGVBQUE7RUNLUjtBQUNGO0FESFE7RUFDRSxzQkFBQTtBQ0tWO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgIC5idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcclxuICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExMi41cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgd2lkdGg6IDEzNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVtb3ZlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZW1vdmUtYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24ge1xuICB3aWR0aDogMTEycHg7XG59XG4uY29udGFpbmVyIC5wcm9kdWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluZXIgLnByb2R1Y3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uY29udGFpbmVyIC5wcm9kdWN0IC5pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY29udGFpbmVyIC5wcm9kdWN0IC5pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5jb250YWluZXIgLnByb2R1Y3QgLmltYWdlIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY29udGFpbmVyIC5wcm9kdWN0IC5pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5wcm9kdWN0IC5uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICB3aWR0aDogMjQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNvbnRhaW5lciAucHJvZHVjdCAubmFtZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluZXIgLnByb2R1Y3QgLm5hbWUge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDE1NnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgLmNvbnRhaW5lciAucHJvZHVjdCAubmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xuICAuY29udGFpbmVyIC5wcm9kdWN0IC5uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTIuNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbnRhaW5lciAucHJvZHVjdCAubmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5wcm9kdWN0IC5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnByb2R1Y3QgLmlucHV0LWNvbnRhaW5lciAuaW5wdXQge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAucHJvZHVjdCAuaW5wdXQtY29udGFpbmVyIC5idXR0b24ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHg7XG59XG4uY29udGFpbmVyIC5wcm9kdWN0IC5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHdpZHRoOiAxMzVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY29udGFpbmVyIC5wcm9kdWN0IC5wcmljZSB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICB9XG59XG4uY29udGFpbmVyIC5wcm9kdWN0IC5wcmljZSAucmVtb3ZlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmNvbnRhaW5lciAucHJvZHVjdCAucHJpY2UgLnJlbW92ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmNvbnRhaW5lciAucHJvZHVjdCAucHJpY2UgLnJlbW92ZS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluZXIgLnByb2R1Y3QgLnByaWNlIC5yZW1vdmUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5jb250YWluZXIgLnByb2R1Y3QgLnByaWNlIC5yZW1vdmUtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnByb2R1Y3QgLnByaWNlIC5yZW1vdmUtYnV0dG9uIGkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhaW5lciAudG90YWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CartComponent = class CartComponent {
    constructor(usersService, productsService, router) {
        this.usersService = usersService;
        this.productsService = productsService;
        this.router = router;
        this.productsService.emitBaseUrl("/cart");
    }
    ngOnInit() {
        this.cartSubscription = this.usersService.cartObs$.subscribe(cart => {
            this.cart = cart;
            this.calculateTotalPrice();
        });
        this.usersService.getCart();
    }
    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }
    incrementProducts(cartItem) {
        clearTimeout(this.quantityTimeout);
        for (let el of this.cart) {
            if (el._id === cartItem._id) {
                el.quantity++;
                break;
            }
        }
        this.quantityTimeout = window.setTimeout(() => {
            this.usersService
                .addToCart(cartItem.product, cartItem.quantity)
                .subscribe(() => this.calculateTotalPrice());
        }, 700);
    }
    decrementProducts(cartItem) {
        if (cartItem.quantity === 1)
            return;
        clearTimeout(this.quantityTimeout);
        for (let el of this.cart) {
            if (el._id === cartItem._id) {
                el.quantity--;
                break;
            }
        }
        this.quantityTimeout = window.setTimeout(() => {
            this.usersService
                .addToCart(cartItem.product, cartItem.quantity)
                .subscribe(() => this.calculateTotalPrice());
        }, 700);
    }
    validateControl(e, cartItem) {
        const numberOfProducts = cartItem.quantity;
        if (!Number.isInteger(Number(e.target.value))) {
            e.target.value = numberOfProducts.toString();
            return;
        }
        if (Number(e.target.value) < 1) {
            cartItem.quantity = 1;
            this.usersService
                .addToCart(cartItem.product, cartItem.quantity)
                .subscribe(() => this.calculateTotalPrice());
            e.target.value = (1).toString();
            return;
        }
        cartItem.quantity = Number(e.target.value);
        this.usersService
            .addToCart(cartItem.product, cartItem.quantity)
            .subscribe(() => this.calculateTotalPrice());
    }
    calculateTotalPrice() {
        let total = 0;
        for (let itemCart of this.cart) {
            total += itemCart.quantity * itemCart.product.price;
        }
        this.totalPrice = total;
    }
    removeFromCart(product) {
        this.usersService
            .removeFromCart(product)
            .subscribe((cart) => {
            this.usersService.emitCart(cart.body);
            this.calculateTotalPrice();
        });
    }
    clearCart() {
        this.usersService
            .clearCart()
            .subscribe((cart) => {
            this.usersService.emitCart(cart.body);
            this.calculateTotalPrice();
        });
    }
    goToProduct(id) {
        this.productsService.emitUrlParams({});
        this.router.navigate([`/product/${id}`]);
    }
    navigateToCheckout() {
        this.router.navigate(["/checkout"]);
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 50px;\n}\n@media (max-width: 1024px) {\n  .container {\n    margin-top: 0;\n    border-radius: 0;\n    height: 100%;\n    overflow: auto;\n  }\n}\n.container .title {\n  margin-bottom: 20px;\n}\n.container .details {\n  font-size: 22px;\n}\n.container .input {\n  margin: 20px 0;\n  width: 50%;\n  display: block;\n}\n@media (max-width: 720px) {\n  .container .input {\n    width: 100%;\n    margin: 15px 0;\n  }\n}\n.container .inline-input {\n  display: inline-block;\n  margin-top: 0;\n}\n@media (max-width: 720px) {\n  .container .inline-input {\n    display: block;\n  }\n}\n.container .total {\n  font-size: 24px;\n  font-weight: bold;\n}\n.container .total-big {\n  float: right;\n}\n@media (max-width: 720px) {\n  .container .total-big {\n    display: none;\n  }\n}\n.container .total-small {\n  margin-bottom: 20px;\n}\n@media (min-width: 721px) {\n  .container .total-small {\n    display: none;\n  }\n}\n.container .button {\n  float: right;\n  width: 150px;\n  font-weight: bold;\n}\n@media (max-width: 720px) {\n  .container .button {\n    float: unset;\n  }\n}\n.container .error {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n@media (max-width: 340px) {\n  .container .error {\n    font-size: 16px;\n  }\n}\n@media (min-width: 721px) {\n  .container .error-small {\n    display: none;\n  }\n}\n@media (max-width: 720px) {\n  .container .error-big {\n    display: none;\n  }\n}\n@media (max-width: 1024px) {\n  .message-container {\n    height: 100vh;\n  }\n}\n.message-container .success-message {\n  text-align: center;\n  font-size: 26px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGNoZWNrb3V0XFxjaGVja291dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFIRjtJQUlJLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBTEY7SUFNSSxXQUFBO0lBQ0EsY0FBQTtFQ0NKO0FBQ0Y7QURFRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFKRjtJQUtJLGNBQUE7RUNDSjtBQUNGO0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FER0k7RUFIRjtJQUlJLGFBQUE7RUNBSjtBQUNGO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FER0k7RUFIRjtJQUlJLGFBQUE7RUNBSjtBQUNGO0FER0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREo7QURHSTtFQUxGO0lBTUksWUFBQTtFQ0FKO0FBQ0Y7QURHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFKRjtJQUtJLGVBQUE7RUNBSjtBQUNGO0FESUk7RUFERjtJQUVJLGFBQUE7RUNESjtBQUNGO0FES0k7RUFERjtJQUVJLGFBQUE7RUNGSjtBQUNGO0FET0U7RUFERjtJQUVJLGFBQUE7RUNIRjtBQUNGO0FES0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbmxpbmUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAudG90YWwtYmlnIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3RhbC1zbWFsbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lcnJvci1zbWFsbCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzIxcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lcnJvci1iaWcge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1jb250YWluZXIge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAuc3VjY2Vzcy1tZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5jb250YWluZXIgLmlucHV0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIgLmlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5saW5lLWlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIgLmlubGluZS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jb250YWluZXIgLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRvdGFsLWJpZyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIC50b3RhbC1iaWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5jb250YWluZXIgLnRvdGFsLXNtYWxsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xuICAuY29udGFpbmVyIC50b3RhbC1zbWFsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmNvbnRhaW5lciAuYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIgLmJ1dHRvbiB7XG4gICAgZmxvYXQ6IHVuc2V0O1xuICB9XG59XG4uY29udGFpbmVyIC5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICAuY29udGFpbmVyIC5lcnJvciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzIxcHgpIHtcbiAgLmNvbnRhaW5lciAuZXJyb3Itc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIC5lcnJvci1iaWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubWVzc2FnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbi5tZXNzYWdlLWNvbnRhaW5lciAuc3VjY2Vzcy1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent, ShippingDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetails", function() { return ShippingDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_purchases_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/purchases.service */ "./src/app/services/purchases.service.ts");






let CheckoutComponent = class CheckoutComponent {
    constructor(route, productsService, usersService, purchasesService, router) {
        this.route = route;
        this.productsService = productsService;
        this.usersService = usersService;
        this.purchasesService = purchasesService;
        this.router = router;
        this.productsToBuy = [];
        this.shippingDetails = new ShippingDetails();
        this.showSuccessMessage = false;
    }
    ngOnInit() {
        this.userSubscription = this.usersService.loggedInUserIdObs$.subscribe(id => {
            this.userId = id;
            this.usersService.getUser(this.userId).subscribe((user) => {
                this.user = user;
                this.shippingDetails = new ShippingDetails(this.user.name.firstName, this.user.name.lastName, this.user.address.street, this.user.address.city, this.user.address.country, this.user.address.postcode);
            });
        });
        this.route.paramMap.subscribe(paramMap => {
            const productId = paramMap.get("id");
            if (productId) {
                this.route.queryParamMap.subscribe(queryParamMap => {
                    const quantity = Number(queryParamMap.get("quantity"));
                    this.clearCartAfterCheckout = false;
                    this.productsService
                        .getOneProduct(productId)
                        .subscribe((product) => {
                        this.productsToBuy.push({
                            product,
                            quantity,
                            _userId: this.userId,
                            shippingDetails: this.shippingDetails
                        });
                        this.totalPrice = product.price * quantity;
                    });
                });
            }
            else {
                this.cartSubscription = this.usersService.cartObs$.subscribe((cart) => {
                    if (cart.length === 0)
                        this.router.navigate(["/"]);
                    this.clearCartAfterCheckout = true;
                    for (let el of cart) {
                        this.productsToBuy.push(Object.assign({}, el, { _userId: this.userId, shippingDetails: this.shippingDetails }));
                    }
                    this.calculateTotalPrice();
                });
            }
        });
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
        if (this.cartSubscription)
            this.cartSubscription.unsubscribe();
    }
    calculateTotalPrice() {
        let total = 0;
        for (let el of this.productsToBuy) {
            total += el.quantity * el.product.price;
        }
        this.totalPrice = total;
    }
    order() {
        // Shipping details are required but often setting shippingDetails inside ngOnInit inside getUser().subscribe method is after setting productsToBuy later in ngOnInit so we need to set it manually before making request to server
        for (let el of this.productsToBuy) {
            el.shippingDetails = this.shippingDetails;
        }
        this.purchasesService
            .makePurchase(this.productsToBuy)
            .subscribe((res) => {
            if (res.status === 200) {
                if (this.clearCartAfterCheckout)
                    this.usersService.clearCart().subscribe();
                this.showSuccessMessage = true;
            }
        });
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: src_app_services_purchases_service__WEBPACK_IMPORTED_MODULE_5__["PurchasesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-checkout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./src/app/pages/checkout/checkout.component.scss")).default]
    })
], CheckoutComponent);

class ShippingDetails {
    constructor(firstName, lastName, street, city, country, postcode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.country = country;
        this.postcode = postcode;
    }
}


/***/ }),

/***/ "./src/app/pages/customers/customers.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/customers/customers.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-container {\n  margin: 0 auto;\n  margin-top: 20px;\n  max-width: 1344px;\n  text-align: center;\n}\n.input-container .control {\n  width: 90%;\n  margin: 0 auto;\n}\n.container {\n  margin-top: 20px;\n}\n.container .selects-container {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 580px) {\n  .container .selects-container {\n    padding: 0 10px;\n  }\n}\n@media (max-width: 460px) {\n  .container .selects-container {\n    flex-direction: column-reverse;\n  }\n}\n.container .selects-container .pages-container {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 460px) {\n  .container .selects-container .pages-container {\n    margin-top: 20px;\n  }\n}\n.container .selects-container .sort-container {\n  display: flex;\n}\n.container .customer-container {\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 0;\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 5px;\n  color: #4a4a4a;\n}\n.container .customer-container:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.container .customer-container .mail {\n  width: 250px;\n}\n.container .customer-container .last-name {\n  text-transform: uppercase;\n}\n.pagination-container {\n  background: transparent;\n  padding: 0 0 20px 0;\n}\n@media (max-width: 1024px) {\n  .pagination-container {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0b21lcnNcXGN1c3RvbWVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDSjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FKO0FERUk7RUFMRjtJQU1JLGVBQUE7RUNDSjtBQUNGO0FEQ0k7RUFURjtJQVVJLDhCQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRU47QURBTTtFQUpGO0lBS0ksZ0JBQUE7RUNHTjtBQUNGO0FEQUk7RUFDRSxhQUFBO0FDRU47QURFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0FDRE47QURJSTtFQUNFLHlCQUFBO0FDRk47QURPQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRE1FO0VBSkY7SUFLSSxpQkFBQTtJQUNBLGtCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTM0NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgLnNlbGVjdHMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlcy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb3J0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBjb2xvcjogcmdiKDc0LCA3NCwgNzQpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWlsIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXN0LW5hbWUge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuIiwiLmlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEzNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlucHV0LWNvbnRhaW5lciAuY29udHJvbCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLnNlbGVjdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmNvbnRhaW5lciAuc2VsZWN0cy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5jb250YWluZXIgLnNlbGVjdHMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbi5jb250YWluZXIgLnNlbGVjdHMtY29udGFpbmVyIC5wYWdlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5jb250YWluZXIgLnNlbGVjdHMtY29udGFpbmVyIC5wYWdlcy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnNlbGVjdHMtY29udGFpbmVyIC5zb3J0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5jdXN0b21lci1jb250YWluZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xufVxuLmNvbnRhaW5lciAuY3VzdG9tZXItY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jb250YWluZXIgLmN1c3RvbWVyLWNvbnRhaW5lciAubWFpbCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5jb250YWluZXIgLmN1c3RvbWVyLWNvbnRhaW5lciAubGFzdC1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/customers/customers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/customers/customers.component.ts ***!
  \********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CustomersComponent = class CustomersComponent {
    constructor(usersService, authService, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.currentPage = 1;
        this.searchFor = "";
        this.perPage = 20;
        this.currentSort = "Name: A-Z";
    }
    ngOnInit() {
        this.customersSubscription = this.usersService
            .getAllUsers(this.authService.getUserId())
            .subscribe((customers) => {
            this.customers = customers;
            this.filteredAndSortedCustomers = customers;
            this.setTotalPages();
        });
    }
    ngOnDestroy() {
        if (this.customersSubscription)
            this.customersSubscription.unsubscribe();
    }
    filterByName() {
        const arr = [];
        for (let customer of this.customers) {
            if (customer.name.lastName
                .toLowerCase()
                .includes(this.searchFor.toLowerCase()) ||
                customer.email.toLowerCase().includes(this.searchFor.toLowerCase()))
                arr.push(customer);
        }
        this.filteredAndSortedCustomers = arr;
        this.setTotalPages();
        this.currentPage = 1;
    }
    selectPerPage(num) {
        this.perPage = num;
        this.setTotalPages();
        this.currentPage = 1;
    }
    setTotalPages() {
        this.totalPages = Math.ceil(this.filteredAndSortedCustomers.length / this.perPage);
    }
    setCurrentPage(num) {
        this.currentPage = num;
    }
    changeSort(sortName) {
        this.currentSort = sortName;
    }
    goToUser(event, id) {
        event.preventDefault();
        this.router.navigate([`/account/${id}/details`]);
    }
};
CustomersComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-customers",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.scss */ "./src/app/pages/customers/customers.component.scss")).default]
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  padding: 15px;\n  background: white;\n  width: 100%;\n  position: relative;\n  bottom: 0;\n}\n.footer .title {\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  margin: 20px 0;\n}\n.footer .socials {\n  display: flex;\n  justify-content: center;\n  font-size: 46px;\n}\n@media (max-width: 580px) {\n  .footer .socials {\n    font-size: 38px;\n  }\n}\n@media (max-width: 340px) {\n  .footer .socials {\n    font-size: 30px;\n  }\n}\n.footer .socials i {\n  margin: 0 15px;\n}\n@media (max-width: 340px) {\n  .footer .socials i {\n    margin: 0 5px;\n  }\n}\n.footer .contacts {\n  display: flex;\n  justify-content: space-around;\n}\n@media (max-width: 1000px) {\n  .footer .contacts {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 1000px) {\n  .footer .contacts .contact-item {\n    width: 195px;\n  }\n}\n.footer .contacts .contact-item .contact-title {\n  font-weight: bold;\n}\n.footer hr {\n  background: #ebebeb;\n}\n.footer .copyright {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vdGVyL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUk7RUFMRjtJQU1JLGVBQUE7RUNDSjtBQUNGO0FEQ0k7RUFURjtJQVVJLGVBQUE7RUNFSjtBQUNGO0FEQUk7RUFDRSxjQUFBO0FDRU47QURETTtFQUZGO0lBR0ksYUFBQTtFQ0lOO0FBQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0VKO0FEQUk7RUFKRjtJQUtJLHNCQUFBO0lBQ0EsbUJBQUE7RUNHSjtBQUNGO0FEQU07RUFERjtJQUVJLFlBQUE7RUNHTjtBQUNGO0FERk07RUFDRSxpQkFBQTtBQ0lSO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0NnB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0LXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xufVxuLmZvb3RlciAudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLmZvb3RlciAuc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmZvb3RlciAuc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgLmZvb3RlciAuc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG4uZm9vdGVyIC5zb2NpYWxzIGkge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICAuZm9vdGVyIC5zb2NpYWxzIGkge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cbi5mb290ZXIgLmNvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb290ZXIgLmNvbnRhY3RzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3RlciAuY29udGFjdHMgLmNvbnRhY3QtaXRlbSB7XG4gICAgd2lkdGg6IDE5NXB4O1xuICB9XG59XG4uZm9vdGVyIC5jb250YWN0cyAuY29udGFjdC1pdGVtIC5jb250YWN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9vdGVyIGhyIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-footer",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/pages/home/components/product-card/product-card.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/components/product-card/product-card.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 270px;\n  height: 444px;\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n  border: 1px solid transparent;\n  border-collapse: separate;\n  position: relative;\n  display: block;\n  color: #4a4a4a;\n}\n.container::after {\n  display: block;\n  position: relative;\n  top: 28px;\n  content: \"\";\n  height: 1px;\n  width: 100%;\n  background: #eeeeee;\n}\n.container:hover {\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 1px, rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;\n  border-color: #eeeeee;\n  z-index: 1;\n}\n.container:hover .cart-button {\n  opacity: 1 !important;\n}\n.container .top .image {\n  height: 200px;\n}\n.container .top .image img {\n  margin: 0 auto;\n  width: auto;\n  height: 100%;\n}\n.container .bottom .name {\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: left;\n  font-size: 16px;\n  cursor: pointer;\n  margin-top: 10px;\n  width: 228px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.container .bottom .name:hover {\n  text-decoration: underline;\n}\n.container .bottom .description {\n  margin: 10px 0;\n}\n.container .bottom .price {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 30px;\n  height: 44px;\n  line-height: 44px;\n}\n.container .bottom .cart-button {\n  opacity: 0;\n  width: 44px;\n  height: 44px;\n  border-color: #8a4d76;\n  transition: color 0.2s, background 0.2s, opacity 0.2s;\n}\n@media (max-width: 1024px) {\n  .container .bottom .cart-button {\n    opacity: 1;\n  }\n}\n.container .bottom .cart-button:hover {\n  color: white;\n  background: #8a4d76;\n}\n.container .bottom .in-cart {\n  color: white;\n  background: #8a4d76;\n}\n.container .bottom .not-in-cart {\n  background: white;\n  color: #8a4d76;\n}\n.container .bottom .admin-panel {\n  display: flex;\n  position: absolute;\n}\n.container .bottom .admin-panel .admin-button {\n  font-size: 20px;\n}\n.container .bottom .admin-panel .edit:hover {\n  color: #48c774;\n}\n.container .bottom .admin-panel .trash {\n  margin-left: 10px;\n}\n.container .bottom .admin-panel .trash:hover {\n  color: #ff3860;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9DOlxcQW5ndWxhciBwcm9qZWN0c1xcZWNvbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xccHJvZHVjdC1jYXJkXFxwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREY7QURHRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxvRkFBQTtFQUVBLHFCQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0k7RUFDRSxxQkFBQTtBQ0hOO0FEUUk7RUFDRSxhQUFBO0FDTk47QURPTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0xSO0FEV0k7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ROO0FEV007RUFDRSwwQkFBQTtBQ1RSO0FEYUk7RUFDRSxjQUFBO0FDWE47QURjSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWk47QURlSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQWxGRztFQW1GSCxxREFBQTtBQ2JOO0FEZU07RUFQRjtJQVFJLFVBQUE7RUNaTjtBQUNGO0FEY007RUFDRSxZQUFBO0VBQ0EsbUJBM0ZDO0FDK0VUO0FEZ0JJO0VBQ0UsWUFBQTtFQUNBLG1CQWpHRztBQ21GVDtBRGlCSTtFQUNFLGlCQUFBO0VBQ0EsY0F0R0c7QUN1RlQ7QURrQkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNoQk47QURrQk07RUFDRSxlQUFBO0FDaEJSO0FEbUJNO0VBQ0UsY0FBQTtBQ2pCUjtBRG9CTTtFQUNFLGlCQUFBO0FDbEJSO0FEb0JRO0VBQ0UsY0FBQTtBQ2xCViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1cnBsZTogIzhhNGQ3NjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBoZWlnaHQ6IDQ0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI4cHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDJweCAxcHgsXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDJweCA0cHggMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIC5jYXJ0LWJ1dHRvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3Age1xyXG4gICAgLmltYWdlIHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3R0b20ge1xyXG4gICAgLm5hbWUge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAyMjhweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1idXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB3aWR0aDogNDRweDtcclxuICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwdXJwbGU7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJhY2tncm91bmQgMC4ycywgb3BhY2l0eSAwLjJzO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluLWNhcnQge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRwdXJwbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdC1pbi1jYXJ0IHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZG1pbi1wYW5lbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgIC5hZG1pbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVkaXQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBoc2woMTQxLCA1MyUsIDUzJSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50cmFzaCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IGhzbCgzNDgsIDEwMCUsIDYxJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogNDQ0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0YTRhNGE7XG59XG4uY29udGFpbmVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjhweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuLmNvbnRhaW5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAycHggNHB4IDBweDtcbiAgYm9yZGVyLWNvbG9yOiAjZWVlZWVlO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbnRhaW5lcjpob3ZlciAuY2FydC1idXR0b24ge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC50b3AgLmltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jb250YWluZXIgLnRvcCAuaW1hZ2UgaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5ib3R0b20gLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAyMjhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY29udGFpbmVyIC5ib3R0b20gLm5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jb250YWluZXIgLmJvdHRvbSAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5jb250YWluZXIgLmJvdHRvbSAucHJpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4uY29udGFpbmVyIC5ib3R0b20gLmNhcnQtYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLWNvbG9yOiAjOGE0ZDc2O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBiYWNrZ3JvdW5kIDAuMnMsIG9wYWNpdHkgMC4ycztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRhaW5lciAuYm90dG9tIC5jYXJ0LWJ1dHRvbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuYm90dG9tIC5jYXJ0LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzhhNGQ3Njtcbn1cbi5jb250YWluZXIgLmJvdHRvbSAuaW4tY2FydCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzhhNGQ3Njtcbn1cbi5jb250YWluZXIgLmJvdHRvbSAubm90LWluLWNhcnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM4YTRkNzY7XG59XG4uY29udGFpbmVyIC5ib3R0b20gLmFkbWluLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciAuYm90dG9tIC5hZG1pbi1wYW5lbCAuYWRtaW4tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuYm90dG9tIC5hZG1pbi1wYW5lbCAuZWRpdDpob3ZlciB7XG4gIGNvbG9yOiAjNDhjNzc0O1xufVxuLmNvbnRhaW5lciAuYm90dG9tIC5hZG1pbi1wYW5lbCAudHJhc2gge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb250YWluZXIgLmJvdHRvbSAuYWRtaW4tcGFuZWwgLnRyYXNoOmhvdmVyIHtcbiAgY29sb3I6ICNmZjM4NjA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/components/product-card/product-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/components/product-card/product-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-components/product-form/product-form.component */ "./src/app/shared-components/product-form/product-form.component.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let ItemCardComponent = class ItemCardComponent {
    constructor(usersService, authService, productsService, dialog, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.productsService = productsService;
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
        this.isLoggedInSubscription = this.authService.isLoggedInObs$.subscribe(isLoggedIn => (this.isLoggedIn = isLoggedIn));
    }
    ngOnDestroy() {
        if (this.isLoggedInSubscription)
            this.isLoggedInSubscription.unsubscribe();
    }
    manageCart() {
        if (!this.isLoggedIn) {
            this.router.navigate(["/login"]);
            return;
        }
        if (this.addedToCart)
            this.removeFromCart();
        else
            this.addToCart();
    }
    addToCart() {
        this.usersService
            .addToCart(this.product, 1)
            .subscribe((cart) => this.usersService.emitCart(cart.body));
        this.addedToCart = true;
    }
    removeFromCart() {
        this.usersService
            .removeFromCart(this.product)
            .subscribe((cart) => this.usersService.emitCart(cart.body));
        this.addedToCart = false;
    }
    editProduct(event) {
        event.preventDefault();
        const dialogRef = this.dialog.open(src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"], {
            width: "580px",
            height: "90%",
            data: { type: "edit", product: this.product }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.productsService
                    .editProduct(Object.assign({}, result.product, { _id: this.product._id }), this.authService.getUserId())
                    .subscribe((res) => {
                    if (res.status === 200)
                        this.productsService.getAllProducts();
                });
            }
        });
    }
    deleteProduct(event) {
        event.preventDefault();
        this.productsService
            .deleteProduct(this.product._id, this.authService.getUserId())
            .subscribe((res) => {
            if (res.status === 200) {
                if (confirm("Do you want to permanently delete the product?"))
                    this.productsService.getAllProducts();
                else
                    return;
            }
        });
    }
};
ItemCardComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemCardComponent.prototype, "addedToCart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemCardComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemCardComponent.prototype, "isAdmin", void 0);
ItemCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/product-card/product-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-card.component.scss */ "./src/app/pages/home/components/product-card/product-card.component.scss")).default]
    })
], ItemCardComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-container {\n  margin: 0 auto;\n  margin-top: 20px;\n  max-width: 1344px;\n  text-align: center;\n}\n.input-container .control {\n  width: 90%;\n  margin: 0 auto;\n}\n.buttons-container {\n  margin: 10px auto;\n  padding: 10px 0;\n  max-width: 1220px;\n  display: flex;\n  justify-content: space-between;\n  overflow: auto;\n}\n@media (min-width: 1024px) {\n  .buttons-container::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    background-color: #f5f5f5;\n  }\n  .buttons-container::-webkit-scrollbar {\n    height: 9px;\n    background-color: #f5f5f5;\n  }\n  .buttons-container::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #8a4d76;\n  }\n}\n@media (max-width: 980px) {\n  .buttons-container {\n    justify-content: space-between;\n  }\n}\n.buttons-container .button {\n  margin: 0 5px;\n}\n.container {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.container .new-product {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  width: 150px;\n}\n@media (max-width: 580px) {\n  .container .new-product {\n    margin-left: 10px;\n  }\n}\n.container .products-found {\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n@media (max-width: 580px) {\n  .container .products-found {\n    margin-left: 10px;\n  }\n}\n.container .selects-container {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 580px) {\n  .container .selects-container {\n    padding: 0 10px;\n  }\n}\n@media (max-width: 460px) {\n  .container .selects-container {\n    flex-direction: column-reverse;\n  }\n}\n.container .selects-container .pages-container {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 460px) {\n  .container .selects-container .pages-container {\n    margin-top: 20px;\n  }\n}\n.container .selects-container .sort-container {\n  display: flex;\n}\n.container .clear-tags {\n  margin-right: 8px;\n}\n.container .clear-tags i {\n  margin-left: 5px;\n}\n.container .loading {\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 20px;\n}\n.container .cards-container {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.container .cards-container .no-found {\n  font-size: 20px;\n}\n.pagination-container {\n  background: transparent;\n  padding: 0 0 20px 0;\n}\n@media (max-width: 1024px) {\n  .pagination-container {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n.is-active {\n  border-color: #48c774;\n  color: #48c774;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcQW5ndWxhciBwcm9qZWN0c1xcZWNvbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0NKO0FER0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNBRjtBREVFO0VBQ0U7SUFDRSw0Q0FBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RUNBSjtFREdFO0lBQ0UsV0FBQTtJQUNBLHlCQUFBO0VDREo7RURJRTtJQUNFLG1CQUFBO0lBQ0EsNENBQUE7SUFDQSx5QkFBQTtFQ0ZKO0FBQ0Y7QURLRTtFQTNCRjtJQTRCSSw4QkFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQUNFLGFBQUE7QUNGSjtBRE1BO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNIRjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNISjtBREtJO0VBTEY7SUFNSSxpQkFBQTtFQ0ZKO0FBQ0Y7QURLRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBSkY7SUFLSSxpQkFBQTtFQ0ZKO0FBQ0Y7QURLRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNISjtBREtJO0VBTEY7SUFNSSxlQUFBO0VDRko7QUFDRjtBRElJO0VBVEY7SUFVSSw4QkFBQTtFQ0RKO0FBQ0Y7QURHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0ROO0FER007RUFKRjtJQUtJLGdCQUFBO0VDQU47QUFDRjtBREdJO0VBQ0UsYUFBQTtBQ0ROO0FES0U7RUFDRSxpQkFBQTtBQ0hKO0FES0k7RUFDRSxnQkFBQTtBQ0hOO0FET0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURRRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ05KO0FEUUk7RUFDRSxlQUFBO0FDTk47QURXQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNSRjtBRFVFO0VBSkY7SUFLSSxpQkFBQTtJQUNBLGtCQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTM0NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWF4LXdpZHRoOiAxMjIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE0ZDc2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLm5ldy1wcm9kdWN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdHMtZm91bmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZXMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc29ydC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsZWFyLXRhZ3Mge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9hZGluZyB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLm5vLWZvdW5kIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogaHNsKDE0MSwgNTMlLCA1MyUpO1xyXG4gIGNvbG9yOiBoc2woMTQxLCA1MyUsIDUzJSk7XHJcbn1cclxuIiwiLmlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEzNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlucHV0LWNvbnRhaW5lciAuY29udHJvbCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXgtd2lkdGg6IDEyMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ1dHRvbnMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG4gIC5idXR0b25zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgLmJ1dHRvbnMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE0ZDc2O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbi5idXR0b25zLWNvbnRhaW5lciAuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIC5uZXctcHJvZHVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmNvbnRhaW5lciAubmV3LXByb2R1Y3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5wcm9kdWN0cy1mb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5jb250YWluZXIgLnByb2R1Y3RzLWZvdW5kIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuc2VsZWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuY29udGFpbmVyIC5zZWxlY3RzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmNvbnRhaW5lciAuc2VsZWN0cy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxufVxuLmNvbnRhaW5lciAuc2VsZWN0cy1jb250YWluZXIgLnBhZ2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmNvbnRhaW5lciAuc2VsZWN0cy1jb250YWluZXIgLnBhZ2VzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuc2VsZWN0cy1jb250YWluZXIgLnNvcnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmNsZWFyLXRhZ3Mge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jb250YWluZXIgLmNsZWFyLXRhZ3MgaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5sb2FkaW5nIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250YWluZXIgLmNhcmRzLWNvbnRhaW5lciAubm8tZm91bmQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucGFnaW5hdGlvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4uaXMtYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDhjNzc0O1xuICBjb2xvcjogIzQ4Yzc3NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-components/product-form/product-form.component */ "./src/app/shared-components/product-form/product-form.component.ts");









let HomeComponent = class HomeComponent {
    constructor(productsService, usersService, authService, router, route, dialog) {
        this.productsService = productsService;
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.currentFilters = [];
        this.idsOfProductsInCart = [];
        this.perPage = 20;
        this.currentPage = 1;
        this.currentSort = "Randomize";
        this.searchFor = "";
        this.initializeProducts();
        this.initializeCart();
        this.authService.checkIsAdmin();
    }
    ngOnInit() {
        this.productsService.getAllProducts();
        if (!this.authService.checkIsLoggedIn())
            return;
        this.usersService.getCart();
        this.isAdmin$ = this.authService.isAdminObs$;
    }
    ngOnDestroy() {
        if (this.productsSubscription)
            this.productsSubscription.unsubscribe();
        if (this.cartSubscription)
            this.cartSubscription.unsubscribe();
    }
    initializeProducts() {
        this.productsSubscription = this.productsService.allProductsObs$.subscribe((allProducts) => {
            this.allProducts = allProducts;
            this.filteredAndSortedProducts = allProducts;
            this.setTotalPages();
            this.filterByTagsAndName();
            this.route.paramMap.subscribe(paramMap => {
                if (paramMap.get("perPage"))
                    this.perPage = Number(paramMap.get("perPage"));
                if (paramMap.get("page"))
                    this.currentPage = Number(paramMap.get("page"));
                if (paramMap.get("search")) {
                    this.searchFor = paramMap.get("search");
                    this.filterByTagsAndName();
                }
                if (paramMap.get("tags")) {
                    this.currentFilters = paramMap.get("tags").split(",");
                    this.filterByTagsAndName();
                }
                if (paramMap.get("sort")) {
                    this.currentSort = paramMap.get("sort");
                }
            });
        });
    }
    initializeCart() {
        if (!this.authService.checkIsLoggedIn())
            return;
        this.cartSubscription = this.usersService.cartObs$.subscribe((cart) => {
            if (cart.length === 0)
                return;
            for (let el of cart) {
                this.idsOfProductsInCart.push(el.product._id);
            }
        });
    }
    filterByTagsAndName(event) {
        if (event) {
            const target = event.currentTarget;
            const idAttr = target.attributes.id;
            const newFilterName = idAttr.nodeValue;
            if (!this.currentFilters.includes(newFilterName)) {
                this.currentFilters.push(newFilterName);
            }
            else {
                this.currentFilters = this.currentFilters.filter(el => el !== newFilterName);
            }
            this.currentPage = 1;
        }
        this.filteredAndSortedProducts = this.allProducts.filter(product => this.filterCriterium(product, this.currentFilters));
        if (this.searchFor) {
            const arr = [];
            for (let product of this.filteredAndSortedProducts) {
                if (product.name.toLowerCase().includes(this.searchFor.toLowerCase()))
                    arr.push(product);
            }
            this.filteredAndSortedProducts = arr;
            this.currentPage = 1;
        }
        this.setTotalPages();
    }
    filterCriterium(product, filters) {
        if (filters.length === 0)
            return true;
        return filters.includes(product.tag);
    }
    clearTags() {
        this.currentFilters = [];
        this.currentPage = 1;
        this.filterByTagsAndName();
    }
    selectPerPage(num) {
        this.perPage = num;
        this.setTotalPages();
        this.currentPage = 1;
    }
    setTotalPages() {
        this.totalPages = Math.ceil(this.filteredAndSortedProducts.length / this.perPage);
    }
    setCurrentPage(num) {
        this.currentPage = num;
    }
    changeSort(sortName) {
        this.currentSort = sortName;
    }
    goToProduct(event, id) {
        event.preventDefault();
        this.productsService.emitBaseUrl("/products");
        this.productsService.emitUrlParams(this.generateUrlParams());
        this.router.navigate([`/product/${id}`]);
    }
    generateUrlParams() {
        return {
            page: this.currentPage,
            perPage: this.perPage,
            tags: this.currentFilters,
            sort: this.currentSort,
            search: this.searchFor
        };
    }
    newProduct() {
        const dialogRef = this.dialog.open(src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductFormComponent"], {
            width: "580px",
            height: "90%",
            data: { type: "new", product: new src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductForm"]() }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.productsService
                    .addNewProduct(result.product, this.authService.getUserId())
                    .subscribe((res) => {
                    if (res.status === 200)
                        this.productsService.getAllProducts();
                });
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\nhtml {\n  background: linear-gradient(to right top, #fa7c91, #757763);\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n.container {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n}\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.white-box {\n  padding: 25px;\n  background: white;\n  border-radius: 5px;\n  width: 500px;\n  max-width: 500px;\n  text-align: center;\n}\n@media (min-width: 551px) {\n  .white-box {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n}\n@media (max-width: 550px) {\n  .white-box {\n    border-radius: 0;\n    height: 100%;\n    width: 550px;\n    max-width: 550px;\n    overflow: auto;\n    height: 100vh;\n  }\n}\n.active-link {\n  color: #fa7c91;\n}\n.logo {\n  letter-spacing: 5px;\n  text-transform: uppercase;\n}\n.logo:first-letter {\n  color: #8a4d76;\n}\n.navbar-item {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2YmFyL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxtYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXZiYXIvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLHFFQUFBO0FBd0JSO0VBQ0UsMkRBQUE7QUN2QkY7QUQwQkE7O0VBRUUsZ0JBQUE7QUN2QkY7QUQwQkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLGFBQUE7RUFyQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQXNDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN0QkY7QUR5QkE7RUFDRTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFFQSwyQkFBQTtFQ3RCRjtBQUNGO0FEeUJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFQ3ZCRjtBQUNGO0FEMEJBO0VBQ0UsY0FyRUs7QUM2Q1A7QUNwREE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FEdURGO0FDckRFO0VBQ0UsY0ZDSztBQ3NEVDtBQ25EQTtFQUNFLGVBQUE7QURzREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2xvYmFsIHN0eWxlc1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcclxuXHJcbkBtaXhpbiBjZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiRwdXJwbGU6ICM4YTRkNzY7XHJcbiRwaW5rOiAjZmE3YzkxO1xyXG4kYnJvd246ICM3NTc3NjM7XHJcbiRiZWlnZS1saWdodDogI2QwZDFjZDtcclxuJGJlaWdlLWxpZ2h0ZXI6ICNlZmYwZWI7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcGluaztcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRiZWlnZS1saWdodGVyO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICRwaW5rLCAkYnJvd24pO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgQGluY2x1ZGUgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLndoaXRlLWJveCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTUxcHgpIHtcclxuICAud2hpdGUtYm94IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC53aGl0ZS1ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1NTBweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLWxpbmsge1xyXG4gIGNvbG9yOiAkcGluaztcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZmE3YzkxLCAjNzU3NzYzKTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndoaXRlLWJveCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTUxcHgpIHtcbiAgLndoaXRlLWJveCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC53aGl0ZS1ib3gge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1NTBweDtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbi5hY3RpdmUtbGluayB7XG4gIGNvbG9yOiAjZmE3YzkxO1xufVxuXG4ubG9nbyB7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubG9nbzpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogIzhhNGQ3Njtcbn1cblxuLm5hdmJhci1pdGVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9tYWluLXN0eWxlcy5zY3NzXCI7XHJcblxyXG4ubG9nbyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmOmZpcnN0LWxldHRlciB7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
        this.isActive = false;
        this.authService.checkIsAdmin();
        this.isLoggedIn$ = authService.isLoggedInObs$;
        this.loggedInUserId$ = usersService.loggedInUserIdObs$;
        this.isAdmin$ = authService.isAdminObs$;
    }
    toggleIsActive() {
        this.isActive = !this.isActive;
    }
    deactivate() {
        this.isActive = false;
    }
    logout() {
        this.authService.logout();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/pages/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  text-align: center;\n}\n.wrapper .code {\n  font-size: 100px;\n  font-weight: bold;\n}\n.wrapper .text {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5jb2RlIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud3JhcHBlciAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-not-found",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 50px;\n}\n.container .back {\n  position: absolute;\n}\n@media (max-width: 1215px) {\n  .container .back {\n    position: unset;\n    margin-bottom: 20px;\n  }\n}\n.container .back i {\n  margin-right: 5px;\n}\n@media (max-width: 1024px) {\n  .container {\n    margin-top: 0;\n    border-radius: 0;\n    width: 100%;\n  }\n}\n.container .name {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 28px;\n  font-weight: bold;\n}\n@media (max-width: 500px) {\n  .container .name {\n    font-size: 24px;\n  }\n}\n.container .inner-container {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 1408px) {\n  .container .inner-container {\n    align-items: center;\n  }\n}\n@media (max-width: 957px) {\n  .container .inner-container {\n    display: block;\n  }\n}\n.container .inner-container .image {\n  width: 518px;\n  height: 433px;\n}\n@media (max-width: 957px) {\n  .container .inner-container .image {\n    text-align: center;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 540px) {\n  .container .inner-container .image {\n    width: 100%;\n    height: 100%;\n  }\n}\n.container .inner-container .helper-container {\n  display: flex;\n  width: 60%;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: wrap-reverse;\n}\n@media (max-width: 1408px) {\n  .container .inner-container .helper-container {\n    justify-content: center;\n    width: 50%;\n  }\n}\n@media (max-width: 1215px) {\n  .container .inner-container .helper-container {\n    width: 43%;\n  }\n}\n@media (max-width: 957px) {\n  .container .inner-container .helper-container {\n    width: 100%;\n  }\n}\n.container .inner-container .helper-container .descriptions-container {\n  width: 60%;\n}\n@media (max-width: 1408px) {\n  .container .inner-container .helper-container .descriptions-container {\n    width: 100%;\n  }\n}\n@media (max-width: 957px) {\n  .container .inner-container .helper-container .descriptions-container {\n    width: 100%;\n  }\n}\n.container .inner-container .helper-container .descriptions-container .about-info {\n  font-weight: bold;\n}\n.container .inner-container .helper-container .descriptions-container .short-description,\n.container .inner-container .helper-container .descriptions-container .long-description {\n  font-size: 18px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #dddddd;\n}\n.container .inner-container .helper-container .descriptions-container .short-description {\n  margin-bottom: 15px;\n}\n.container .inner-container .helper-container .buy-options {\n  border: 1px solid #dddddd;\n  border-radius: 8px;\n  padding: 15px;\n  width: 280px;\n}\n@media (max-width: 1408px) {\n  .container .inner-container .helper-container .buy-options {\n    width: 100%;\n    margin-top: 30px;\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 957px) {\n  .container .inner-container .helper-container .buy-options {\n    width: 100%;\n  }\n}\n.container .inner-container .helper-container .buy-options .price {\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity {\n  text-align: center;\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity .cart-button,\n.container .inner-container .helper-container .buy-options .button-and-quantity .input {\n  margin: 10px 0;\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity .cart-button {\n  width: 100%;\n}\n@media (max-width: 957px) {\n  .container .inner-container .helper-container .buy-options .button-and-quantity .cart-button {\n    width: 70%;\n  }\n}\n@media (max-width: 650px) {\n  .container .inner-container .helper-container .buy-options .button-and-quantity .cart-button {\n    width: 100%;\n  }\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity .cart-button i {\n  margin-left: 5px;\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity .input-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity .input-container .input {\n  margin: 10px;\n  width: 48px;\n  height: 32px;\n  padding: 6px;\n  text-align: center;\n}\n.container .inner-container .helper-container .buy-options .button-and-quantity .input-container .button {\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.container .inner-container .helper-container .buy-options .info {\n  margin: 10px 0;\n}\n.container .inner-container .helper-container .buy-options .info i {\n  width: 20px;\n  color: #8a4d76;\n  margin-right: 5px;\n}\n.container .added-info {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  transition: opacity 0.5s;\n  opacity: 1;\n}\n.container .faded {\n  opacity: 0;\n}\n.container .admin-panel {\n  display: flex;\n}\n.container .admin-panel .admin-button {\n  font-size: 20px;\n  cursor: pointer;\n}\n.container .admin-panel .edit:hover {\n  color: #48c774;\n}\n.container .admin-panel .trash {\n  margin-left: 10px;\n}\n.container .admin-panel .trash:hover {\n  color: #ff3860;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9DOlxcQW5ndWxhciBwcm9qZWN0c1xcZWNvbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBRENJO0VBSEY7SUFJSSxlQUFBO0lBQ0EsbUJBQUE7RUNFSjtBQUNGO0FEQUk7RUFDRSxpQkFBQTtBQ0VOO0FERUU7RUFoQkY7SUFpQkksYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0NGO0FBQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBTkY7SUFPSSxlQUFBO0VDRUo7QUFDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUpGO0lBS0ksbUJBQUE7RUNFSjtBQUNGO0FEQUk7RUFSRjtJQVNJLGNBQUE7RUNHSjtBQUNGO0FEREk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0dOO0FERE07RUFKRjtJQUtJLGtCQUFBO0lBQ0EsY0FBQTtFQ0lOO0FBQ0Y7QURGTTtFQVRGO0lBVUksV0FBQTtJQUNBLFlBQUE7RUNLTjtBQUNGO0FERkk7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0lOO0FERk07RUFQRjtJQVFJLHVCQUFBO0lBQ0EsVUFBQTtFQ0tOO0FBQ0Y7QURITTtFQVpGO0lBYUksVUFBQTtFQ01OO0FBQ0Y7QURKTTtFQWhCRjtJQWlCSSxXQUFBO0VDT047QUFDRjtBRExNO0VBQ0UsVUFBQTtBQ09SO0FETFE7RUFIRjtJQUlJLFdBQUE7RUNRUjtBQUNGO0FETlE7RUFQRjtJQVFJLFdBQUE7RUNTUjtBQUNGO0FEUFE7RUFDRSxpQkFBQTtBQ1NWO0FETlE7O0VBRUUsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNRVjtBRExRO0VBQ0UsbUJBQUE7QUNPVjtBREhNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDS1I7QURIUTtFQU5GO0lBT0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNNUjtBQUNGO0FESlE7RUFaRjtJQWFJLFdBQUE7RUNPUjtBQUNGO0FETFE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ09WO0FESlE7RUFDRSxrQkFBQTtBQ01WO0FESlU7O0VBRUUsY0FBQTtBQ01aO0FESFU7RUFDRSxXQUFBO0FDS1o7QURIWTtFQUhGO0lBSUksVUFBQTtFQ01aO0FBQ0Y7QURKWTtFQVBGO0lBUUksV0FBQTtFQ09aO0FBQ0Y7QURMWTtFQUNFLGdCQUFBO0FDT2Q7QURIVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDS1o7QURIWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tkO0FERlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNJZDtBRENRO0VBQ0UsY0FBQTtBQ0NWO0FEQ1U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ1o7QURNRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDSko7QURPRTtFQUNFLFVBQUE7QUNMSjtBRFFFO0VBQ0UsYUFBQTtBQ05KO0FEUUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ05OO0FEU0k7RUFDRSxjQUFBO0FDUE47QURVSTtFQUNFLGlCQUFBO0FDUk47QURVTTtFQUNFLGNBQUE7QUNSUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIC5iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIxNXB4KSB7XHJcbiAgICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDhweCkge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTdweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogNTE4cHg7XHJcbiAgICAgIGhlaWdodDogNDMzcHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTU3cHgpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZWxwZXItY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDhweCkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjE1cHgpIHtcclxuICAgICAgICB3aWR0aDogNDMlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTU3cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2NyaXB0aW9ucy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDA4cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1N3B4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hYm91dC1pbmZvIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0LWRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC5sb25nLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaG9ydC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1eS1vcHRpb25zIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwOHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1N3B4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tYW5kLXF1YW50aXR5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuY2FydC1idXR0b24sXHJcbiAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2FydC1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTdweCkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4YTRkNzY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZGVkLWluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmZhZGVkIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAuYWRtaW4tcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuYWRtaW4tYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQ6aG92ZXIge1xyXG4gICAgICBjb2xvcjogaHNsKDE0MSwgNTMlLCA1MyUpO1xyXG4gICAgfVxyXG5cclxuICAgIC50cmFzaCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGhzbCgzNDgsIDEwMCUsIDYxJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY29udGFpbmVyIC5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMTVweCkge1xuICAuY29udGFpbmVyIC5iYWNrIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuYmFjayBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAubmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDA4cHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU3cHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5pbWFnZSB7XG4gIHdpZHRoOiA1MThweDtcbiAgaGVpZ2h0OiA0MzNweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTdweCkge1xuICAuY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmltYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA2MCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDA4cHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIxNXB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQzJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1N3B4KSB7XG4gIC5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciAuZGVzY3JpcHRpb25zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQwOHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciAuZGVzY3JpcHRpb25zLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTdweCkge1xuICAuY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmRlc2NyaXB0aW9ucy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmRlc2NyaXB0aW9ucy1jb250YWluZXIgLmFib3V0LWluZm8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciAuZGVzY3JpcHRpb25zLWNvbnRhaW5lciAuc2hvcnQtZGVzY3JpcHRpb24sXG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmRlc2NyaXB0aW9ucy1jb250YWluZXIgLmxvbmctZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cbi5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciAuZGVzY3JpcHRpb25zLWNvbnRhaW5lciAuc2hvcnQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIC5idXktb3B0aW9ucyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDI4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDhweCkge1xuICAuY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTdweCkge1xuICAuY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIC5idXktb3B0aW9ucyAucHJpY2Uge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIC5idXR0b24tYW5kLXF1YW50aXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIC5idXktb3B0aW9ucyAuYnV0dG9uLWFuZC1xdWFudGl0eSAuY2FydC1idXR0b24sXG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIC5idXR0b24tYW5kLXF1YW50aXR5IC5pbnB1dCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIC5idXktb3B0aW9ucyAuYnV0dG9uLWFuZC1xdWFudGl0eSAuY2FydC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTdweCkge1xuICAuY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIC5idXR0b24tYW5kLXF1YW50aXR5IC5jYXJ0LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciAuYnV5LW9wdGlvbnMgLmJ1dHRvbi1hbmQtcXVhbnRpdHkgLmNhcnQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIC5idXktb3B0aW9ucyAuYnV0dG9uLWFuZC1xdWFudGl0eSAuY2FydC1idXR0b24gaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIC5idXR0b24tYW5kLXF1YW50aXR5IC5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyLWNvbnRhaW5lciAuaGVscGVyLWNvbnRhaW5lciAuYnV5LW9wdGlvbnMgLmJ1dHRvbi1hbmQtcXVhbnRpdHkgLmlucHV0LWNvbnRhaW5lciAuaW5wdXQge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXItY29udGFpbmVyIC5oZWxwZXItY29udGFpbmVyIC5idXktb3B0aW9ucyAuYnV0dG9uLWFuZC1xdWFudGl0eSAuaW5wdXQtY29udGFpbmVyIC5idXR0b24ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHg7XG59XG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIC5pbmZvIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uY29udGFpbmVyIC5pbm5lci1jb250YWluZXIgLmhlbHBlci1jb250YWluZXIgLmJ1eS1vcHRpb25zIC5pbmZvIGkge1xuICB3aWR0aDogMjBweDtcbiAgY29sb3I6ICM4YTRkNzY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhaW5lciAuYWRkZWQtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuZmFkZWQge1xuICBvcGFjaXR5OiAwO1xufVxuLmNvbnRhaW5lciAuYWRtaW4tcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuYWRtaW4tcGFuZWwgLmFkbWluLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuYWRtaW4tcGFuZWwgLmVkaXQ6aG92ZXIge1xuICBjb2xvcjogIzQ4Yzc3NDtcbn1cbi5jb250YWluZXIgLmFkbWluLXBhbmVsIC50cmFzaCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuYWRtaW4tcGFuZWwgLnRyYXNoOmhvdmVyIHtcbiAgY29sb3I6ICNmZjM4NjA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-components/product-form/product-form.component */ "./src/app/shared-components/product-form/product-form.component.ts");








let ProductComponent = class ProductComponent {
    constructor(route, productsService, usersService, authService, router, dialog) {
        this.route = route;
        this.productsService = productsService;
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.object = Object;
        this.numberOfProducts = 1;
        this.showAddedToCartMessage = false;
        this.paramsSubscription = this.productsService.urlToReturnParamsObs$.subscribe(params => (this.urlToReturnParams = params));
        this.urlSubscription = this.productsService.baseUrlToReturnObs$.subscribe(url => (this.baseUrlToReturn = url));
        this.isAdmin$ = this.authService.isAdminObs$;
        this.authService.checkIsAdmin();
    }
    ngOnInit() {
        this.isLoggedInSubscription = this.authService.isLoggedInObs$.subscribe(isLoggedIn => (this.isLoggedIn = isLoggedIn));
        const productId = this.route.snapshot.paramMap.get("id");
        this.productsService.getOneProduct(productId).subscribe(product => {
            if (!product)
                this.router.navigate(["/"]);
            this.product = product;
            const fixedUrl = this.product.imageUrl.replace("medium", "new-big");
            this.product.imageUrl = fixedUrl;
        }, () => this.router.navigate(["/"]));
    }
    ngOnDestroy() {
        if (this.isLoggedInSubscription)
            this.isLoggedInSubscription.unsubscribe();
        if (this.paramsSubscription)
            this.paramsSubscription.unsubscribe();
        if (this.urlSubscription)
            this.urlSubscription.unsubscribe();
    }
    incrementProducts() {
        this.numberOfProducts++;
    }
    decrementProducts() {
        if (this.numberOfProducts === 1)
            return;
        this.numberOfProducts--;
    }
    validateControl(e) {
        if (!Number.isInteger(Number(e.target.value))) {
            e.target.value = this.numberOfProducts.toString();
            return;
        }
        if (Number(e.target.value) < 1) {
            this.numberOfProducts = 1;
            e.target.value = (1).toString();
            return;
        }
        this.numberOfProducts = Number(e.target.value);
    }
    addToCart() {
        if (!this.isLoggedIn) {
            this.router.navigate(["/login"]);
            return;
        }
        this.usersService
            .addToCart(this.product, this.numberOfProducts)
            .subscribe();
        this.showAddedToCartMessage = true;
        setTimeout(() => {
            this.showAddedToCartMessage = false;
        }, 800);
    }
    editProduct() {
        const dialogRef = this.dialog.open(src_app_shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductFormComponent"], {
            width: "580px",
            height: "90%",
            data: { type: "edit", product: this.product }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.productsService
                    .editProduct(Object.assign({}, result.product, { _id: this.product._id }), this.authService.getUserId())
                    .subscribe((res) => {
                    if (res.status === 200)
                        this.product = res.body;
                });
            }
        });
    }
    deleteProduct() {
        this.productsService
            .deleteProduct(this.product._id, this.authService.getUserId())
            .subscribe((res) => {
            if (res.status === 200) {
                if (confirm("Do you want to permanently delete the product?")) {
                    if (this.baseUrlToReturn) {
                        this.router.navigate([
                            this.baseUrlToReturn,
                            this.urlToReturnParams
                        ]);
                    }
                    else
                        this.router.navigate(["/"]);
                }
                else
                    return;
            }
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/display-message/display-message.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/display-message/display-message.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 15px;\n  border-radius: 5px;\n  margin-bottom: 25px;\n  opacity: 0.9;\n}\n.container .text {\n  font-size: 18px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvZGlzcGxheS1tZXNzYWdlL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLWF1dGgtcGFnZXNcXGNvbXBvbmVudHNcXGRpc3BsYXktbWVzc2FnZVxcZGlzcGxheS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWF1dGgtcGFnZXMvY29tcG9uZW50cy9kaXNwbGF5LW1lc3NhZ2UvZGlzcGxheS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWF1dGgtcGFnZXMvY29tcG9uZW50cy9kaXNwbGF5LW1lc3NhZ2UvZGlzcGxheS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgb3BhY2l0eTogMC45O1xufVxuLmNvbnRhaW5lciAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/display-message/display-message.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/display-message/display-message.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDisplayComponent", function() { return ErrorDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorDisplayComponent = class ErrorDisplayComponent {
    constructor() {
        this.isSuccess = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ErrorDisplayComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ErrorDisplayComponent.prototype, "isSuccess", void 0);
ErrorDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-display-message",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/display-message/display-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-message.component.scss */ "./src/app/pages/user-auth-pages/components/display-message/display-message.component.scss")).default]
    })
], ErrorDisplayComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/form-header/form-header.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/form-header/form-header.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\nhtml {\n  background: linear-gradient(to right top, #fa7c91, #757763);\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n.container {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n}\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.white-box {\n  padding: 25px;\n  background: white;\n  border-radius: 5px;\n  width: 500px;\n  max-width: 500px;\n  text-align: center;\n}\n@media (min-width: 551px) {\n  .white-box {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n}\n@media (max-width: 550px) {\n  .white-box {\n    border-radius: 0;\n    height: 100%;\n    width: 550px;\n    max-width: 550px;\n    overflow: auto;\n    height: 100vh;\n  }\n}\n.active-link {\n  color: #fa7c91;\n}\n.form-header {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.form-break {\n  height: 5px;\n  background: #8a4d76;\n  width: 80px;\n  margin: 0 auto;\n  margin-bottom: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvZm9ybS1oZWFkZXIvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXG1haW4tc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItYXV0aC1wYWdlcy9jb21wb25lbnRzL2Zvcm0taGVhZGVyL2Zvcm0taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWF1dGgtcGFnZXMvY29tcG9uZW50cy9mb3JtLWhlYWRlci9DOlxcQW5ndWxhciBwcm9qZWN0c1xcZWNvbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcdXNlci1hdXRoLXBhZ2VzXFxjb21wb25lbnRzXFxmb3JtLWhlYWRlclxcZm9ybS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EscUVBQUE7QUF3QlI7RUFDRSwyREFBQTtBQ3ZCRjtBRDBCQTs7RUFFRSxnQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsYUFBQTtFQXJDQSx1QkFBQTtFQUNBLG1CQUFBO0VBc0NBLFdBQUE7RUFDQSxZQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUVBLDJCQUFBO0VDdEJGO0FBQ0Y7QUR5QkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0VDdkJGO0FBQ0Y7QUQwQkE7RUFDRSxjQXJFSztBQzZDUDtBQ3BEQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUR1REY7QUNwREE7RUFDRSxXQUFBO0VBQ0EsbUJGRE87RUVFUCxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEdURGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvZm9ybS1oZWFkZXIvZm9ybS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgc3R5bGVzXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwXCIpO1xyXG5cclxuQG1peGluIGNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJHB1cnBsZTogIzhhNGQ3NjtcclxuJHBpbms6ICNmYTdjOTE7XHJcbiRicm93bjogIzc1Nzc2MztcclxuJGJlaWdlLWxpZ2h0OiAjZDBkMWNkO1xyXG4kYmVpZ2UtbGlnaHRlcjogI2VmZjBlYjtcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRwaW5rO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGJlaWdlLWxpZ2h0ZXI7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJHBpbmssICRicm93bik7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBAaW5jbHVkZSBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ud2hpdGUtYm94IHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkge1xyXG4gIC53aGl0ZS1ib3gge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLndoaXRlLWJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtbGluayB7XHJcbiAgY29sb3I6ICRwaW5rO1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNmYTdjOTEsICM3NTc3NjMpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud2hpdGUtYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkge1xuICAud2hpdGUtYm94IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLndoaXRlLWJveCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6ICNmYTdjOTE7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb3JtLWJyZWFrIHtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICM4YTRkNzY7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vbWFpbi1zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLmZvcm0taGVhZGVyIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mb3JtLWJyZWFrIHtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/form-header/form-header.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/form-header/form-header.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeaderComponent", function() { return FormHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormHeaderComponent = class FormHeaderComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormHeaderComponent.prototype, "text", void 0);
FormHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-form-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/form-header/form-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-header.component.scss */ "./src/app/pages/user-auth-pages/components/form-header/form-header.component.scss")).default]
    })
], FormHeaderComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/form-info/form-info.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/form-info/form-info.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-info {\n  text-align: left;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvZm9ybS1pbmZvL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLWF1dGgtcGFnZXNcXGNvbXBvbmVudHNcXGZvcm0taW5mb1xcZm9ybS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWF1dGgtcGFnZXMvY29tcG9uZW50cy9mb3JtLWluZm8vZm9ybS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvZm9ybS1pbmZvL2Zvcm0taW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWluZm8ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIi5mb3JtLWluZm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/form-info/form-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/form-info/form-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FormInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInfoComponent", function() { return FormInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormInfoComponent = class FormInfoComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormInfoComponent.prototype, "page", void 0);
FormInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-form-info",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/form-info/form-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-info.component.scss */ "./src/app/pages/user-auth-pages/components/form-info/form-info.component.scss")).default]
    })
], FormInfoComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".submit-button {\n  text-transform: uppercase;\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvc3VibWl0LWJ1dHRvbi9DOlxcQW5ndWxhciBwcm9qZWN0c1xcZWNvbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcdXNlci1hdXRoLXBhZ2VzXFxjb21wb25lbnRzXFxzdWJtaXQtYnV0dG9uXFxzdWJtaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWF1dGgtcGFnZXMvY29tcG9uZW50cy9zdWJtaXQtYnV0dG9uL3N1Ym1pdC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvc3VibWl0LWJ1dHRvbi9zdWJtaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdC1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iLCIuc3VibWl0LWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SubmitButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonComponent", function() { return SubmitButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubmitButtonComponent = class SubmitButtonComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SubmitButtonComponent.prototype, "formGroup", void 0);
SubmitButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-submit-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./submit-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./submit-button.component.scss */ "./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.scss")).default]
    })
], SubmitButtonComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field {\n  margin: 30px 0;\n}\n\n.form-error-message {\n  text-align: left;\n  margin: 30px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvdXNlci1hdXRoLWNvbnRyb2wvQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHVzZXItYXV0aC1wYWdlc1xcY29tcG9uZW50c1xcdXNlci1hdXRoLWNvbnRyb2xcXHVzZXItYXV0aC1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWF1dGgtcGFnZXMvY29tcG9uZW50cy91c2VyLWF1dGgtY29udHJvbC91c2VyLWF1dGgtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2NvbXBvbmVudHMvdXNlci1hdXRoLWNvbnRyb2wvdXNlci1hdXRoLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQge1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG59XHJcblxyXG4uZm9ybS1lcnJvci1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG59XHJcbiIsIi5maWVsZCB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uZm9ybS1lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAzMHB4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserAuthControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthControlComponent", function() { return UserAuthControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserAuthControlComponent = class UserAuthControlComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserAuthControlComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserAuthControlComponent.prototype, "controlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserAuthControlComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserAuthControlComponent.prototype, "placeholder", void 0);
UserAuthControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-auth-control",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-auth-control.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-auth-control.component.scss */ "./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.scss")).default]
    })
], UserAuthControlComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXV0aC1wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.ts ***!
  \************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(authService) {
        this.authService = authService;
        this.displaySuccessMessage = false;
        this.displayErrorMessage = false;
    }
    ngOnInit() {
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$")
            ])
        });
    }
    onSubmit() {
        const email = this.forgotPasswordForm.get("email").value;
        this.authService.forgotPassword(email).subscribe((res) => {
            if (res.status === 200) {
                this.displayErrorMessage = false;
                this.displaySuccessMessage = true;
            }
        }, (err) => {
            if (err) {
                this.displaySuccessMessage = false;
                this.displayErrorMessage = true;
            }
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-forgot-password",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/login/login.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/login/login.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-container {\n  float: right;\n}\n.checkbox-container .checkbox {\n  font-size: 18px;\n}\n@media (max-width: 500px) {\n  .checkbox-container {\n    float: none;\n    display: block;\n    text-align: left;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2xvZ2luL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLWF1dGgtcGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1hdXRoLXBhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0FDRUo7QURFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXV0aC1wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveC1jb250YWluZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAuY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbn1cclxuIiwiLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jaGVja2JveC1jb250YWluZXIgLmNoZWNrYm94IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");






let LoginComponent = class LoginComponent {
    constructor(authService, usersService, router) {
        this.authService = authService;
        this.usersService = usersService;
        this.router = router;
        this.displayErrorMessage = false;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
            ]),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
    }
    onSubmit() {
        const email = this.loginForm.get("email").value;
        const password = this.loginForm.get("password").value;
        const remember = this.loginForm.get("remember").value;
        this.authService.login(email, password, remember).subscribe((res) => {
            if (res.status === 200) {
                this.usersService.userId = this.authService.getUserId();
                this.usersService.getCart();
                this.router.navigate(["/"]);
            }
        }, (err) => {
            if (err)
                this.displayErrorMessage = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/user-auth-pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/reset-password/reset-password.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/reset-password/reset-password.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXV0aC1wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/reset-password/reset-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/reset-password/reset-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.displayErrorMessage = false;
        this.displaySuccessMessage = false;
        this.secondsLeft = 5;
    }
    ngOnInit() {
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
            ])
        });
        this.route.paramMap.subscribe(params => {
            const token = params.get("token");
            this.authService.checkToken(token).subscribe((res) => {
                if (res.status === 200)
                    this.userEmail = res.body.email;
            }, (err) => {
                if (err)
                    this.router.navigate(["/login"]);
            });
        });
    }
    onSubmit() {
        const newPassword = this.resetForm.get("password").value;
        if (newPassword !== this.resetForm.get("confirmPassword").value)
            return;
        this.authService.resetPassword(this.userEmail, newPassword).subscribe((res) => {
            if (res.status === 200) {
                this.displayErrorMessage = false;
                this.displaySuccessMessage = true;
                setInterval(() => {
                    this.secondsLeft--;
                    if (this.secondsLeft === 0)
                        this.router.navigate(["/login"]);
                }, 1000);
            }
        }, (err) => {
            if (err) {
                this.displaySuccessMessage = false;
                this.displayErrorMessage = true;
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reset-password",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/user-auth-pages/reset-password/reset-password.component.scss")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/signup/signup.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/signup/signup.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXV0aC1wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user-auth-pages/signup/signup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/signup/signup.component.ts ***!
  \******************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");






let SignupComponent = class SignupComponent {
    constructor(authService, usersService, router) {
        this.authService = authService;
        this.usersService = usersService;
        this.router = router;
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
            ])
        });
    }
    onSubmit() {
        const email = this.signupForm.get("email").value;
        const password = this.signupForm.get("password").value;
        if (password !== this.signupForm.get("confirmPassword").value)
            return;
        this.authService.signup(email, password).subscribe((res) => {
            if (res.status === 200) {
                this.usersService.userId = this.authService.getUserId();
                this.usersService.getCart();
                this.router.navigate(["/"]);
            }
            else
                this.errorMessage = "Something went wrong. Please try again later";
        }, (err) => {
            if (err && err.error.code === 11000) {
                this.errorMessage = "This email address is already in use";
            }
            else if (err)
                this.errorMessage = "Something went wrong. Please try again later";
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth-pages/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/user-auth-pages/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/user-auth-pages-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/user-auth-pages-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserAuthPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthPagesRoutingModule", function() { return UserAuthPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/user-auth-pages/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/pages/user-auth-pages/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/user-auth-pages/reset-password/reset-password.component.ts");
/* harmony import */ var src_app_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/is-logged-in.guard */ "./src/app/guards/is-logged-in.guard.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");









const routes = [
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [src_app_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsLoggedInGuard"]]
    },
    {
        path: "signup",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        canActivate: [src_app_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsLoggedInGuard"]]
    },
    {
        path: "forgot",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
        canActivate: [src_app_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsLoggedInGuard"]]
    },
    {
        path: "reset/:token",
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"],
        canActivate: [src_app_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsLoggedInGuard"]]
    },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
let UserAuthPagesRoutingModule = class UserAuthPagesRoutingModule {
};
UserAuthPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserAuthPagesRoutingModule);



/***/ }),

/***/ "./src/app/pages/user-auth-pages/user-auth-pages.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-auth-pages/user-auth-pages.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserAuthPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthPagesModule", function() { return UserAuthPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/user-auth-pages/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/pages/user-auth-pages/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/pages/user-auth-pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/user-auth-pages/reset-password/reset-password.component.ts");
/* harmony import */ var _components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/submit-button/submit-button.component */ "./src/app/pages/user-auth-pages/components/submit-button/submit-button.component.ts");
/* harmony import */ var _components_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form-header/form-header.component */ "./src/app/pages/user-auth-pages/components/form-header/form-header.component.ts");
/* harmony import */ var _components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-info/form-info.component */ "./src/app/pages/user-auth-pages/components/form-info/form-info.component.ts");
/* harmony import */ var _components_user_auth_control_user_auth_control_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-auth-control/user-auth-control.component */ "./src/app/pages/user-auth-pages/components/user-auth-control/user-auth-control.component.ts");
/* harmony import */ var _user_auth_pages_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-auth-pages-routing.module */ "./src/app/pages/user-auth-pages/user-auth-pages-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_display_message_display_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/display-message/display-message.component */ "./src/app/pages/user-auth-pages/components/display-message/display-message.component.ts");














let UserAuthPagesModule = class UserAuthPagesModule {
};
UserAuthPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"],
            _components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_7__["SubmitButtonComponent"],
            _components_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_8__["FormHeaderComponent"],
            _components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_9__["FormInfoComponent"],
            _components_user_auth_control_user_auth_control_component__WEBPACK_IMPORTED_MODULE_10__["UserAuthControlComponent"],
            _components_display_message_display_message_component__WEBPACK_IMPORTED_MODULE_13__["ErrorDisplayComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _user_auth_pages_routing_module__WEBPACK_IMPORTED_MODULE_11__["UserAuthPagesRoutingModule"]]
    })
], UserAuthPagesModule);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/services/web-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let AuthService = class AuthService {
    constructor(webService, router, http) {
        this.webService = webService;
        this.router = router;
        this.http = http;
        this.isAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.isAdminObs$ = this.isAdmin.asObservable();
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.checkIsLoggedIn());
        this.isLoggedInObs$ = this.isLoggedIn.asObservable();
    }
    emitIsLoggedIn(loggedInStatus) {
        this.isLoggedIn.next(loggedInStatus);
    }
    emitIsAdmin(adminStatus) {
        this.isAdmin.next(adminStatus);
    }
    login(email, password, remember = true) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            // the auth tokens will be in header of this response
            this.setSession(res.body._id, res.headers.get("x-access-token"), res.headers.get("x-refresh-token"), remember);
            this.emitIsAdmin(res.body.isAdmin);
            this.emitIsLoggedIn(true);
        }));
    }
    signup(email, password) {
        return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            // the auth tokens will be in header of this response
            this.setSession(res.body._id, res.headers.get("x-access-token"), res.headers.get("x-refresh-token"));
            this.emitIsAdmin(res.body.isAdmin);
            this.emitIsLoggedIn(true);
        }));
    }
    logout() {
        this.removeSession();
        this.emitIsLoggedIn(false);
        this.emitIsAdmin(false);
        this.router.navigate(["/login"]);
    }
    forgotPassword(email) {
        return this.webService.forgotPassword(email);
    }
    resetPassword(email, password) {
        return this.webService.resetPassword(email, password);
    }
    checkToken(token) {
        return this.webService.checkToken(token);
    }
    getAccessToken() {
        return (localStorage.getItem("x-access-token") ||
            sessionStorage.getItem("x-access-token"));
    }
    getRefreshToken() {
        return (localStorage.getItem("x-refresh-token") ||
            sessionStorage.getItem("x-refresh-token"));
    }
    getUserId() {
        return localStorage.getItem("user-id") || sessionStorage.getItem("user-id");
    }
    setAccessToken(accessToken) {
        if (localStorage.getItem("x-access-token"))
            localStorage.setItem("x-access-token", accessToken);
        if (sessionStorage.getItem("x-access-token"))
            sessionStorage.setItem("x-access-token", accessToken);
    }
    getNewAccessToken() {
        return this.http
            .get(`/users/me/access-token`, {
            headers: {
                "x-refresh-token": this.getRefreshToken(),
                _id: this.getUserId()
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            this.setAccessToken(res.headers.get("x-access-token"));
        }));
    }
    checkIsLoggedIn() {
        if (this.getAccessToken())
            return true;
        return false;
    }
    checkIsAdmin() {
        this.webService
            .get(`users/${this.getUserId()}`)
            .subscribe((res) => this.emitIsAdmin(res.body.isAdmin));
    }
    setSession(userId, accessToken, refreshToken, remember = true) {
        if (remember) {
            localStorage.setItem("user-id", userId);
            localStorage.setItem("x-access-token", accessToken);
            localStorage.setItem("x-refresh-token", refreshToken);
        }
        else {
            sessionStorage.setItem("user-id", userId);
            sessionStorage.setItem("x-access-token", accessToken);
            sessionStorage.setItem("x-refresh-token", refreshToken);
        }
    }
    removeSession() {
        localStorage.removeItem("user-id");
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("x-refresh-token");
        sessionStorage.removeItem("user-id");
        sessionStorage.removeItem("x-access-token");
        sessionStorage.removeItem("x-refresh-token");
    }
};
AuthService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/services/web-request.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductsService = class ProductsService {
    constructor(webService) {
        this.webService = webService;
        this.allProducts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allProductsObs$ = this.allProducts.asObservable();
        this.baseUrlToReturn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.baseUrlToReturnObs$ = this.baseUrlToReturn.asObservable();
        this.urlToReturnParams = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.urlToReturnParamsObs$ = this.urlToReturnParams.asObservable();
    }
    emitAllProducts(products) {
        this.allProducts.next(products);
    }
    emitUrlParams(params) {
        this.urlToReturnParams.next(params);
    }
    emitBaseUrl(url) {
        this.baseUrlToReturn.next(url);
    }
    getAllProducts() {
        this.webService
            .get("products")
            .subscribe((res) => this.emitAllProducts(res.body));
    }
    getOneProduct(id) {
        return this.webService
            .get(`products/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response.body));
    }
    addNewProduct(product, adminId) {
        return this.webService.post("products", product, { _id: adminId });
    }
    editProduct(product, adminId) {
        return this.webService.patch("products", product, { _id: adminId });
    }
    deleteProduct(productId, adminId) {
        return this.webService.delete(`products/${productId}`, { _id: adminId });
    }
};
ProductsService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ProductsService);



/***/ }),

/***/ "./src/app/services/purchases.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/purchases.service.ts ***!
  \***********************************************/
/*! exports provided: PurchasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesService", function() { return PurchasesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/services/web-request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let PurchasesService = class PurchasesService {
    constructor(webService) {
        this.webService = webService;
    }
    getAllPurchases(adminId) {
        return this.webService
            .get("purchases", { _id: adminId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.body));
    }
    getAllPurchasesForUser(userId) {
        return this.webService
            .get(`purchases/${userId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.body));
    }
    makePurchase(arrayOfPurchases) {
        return this.webService.post("purchases", { arrayOfPurchases });
    }
};
PurchasesService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }
];
PurchasesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PurchasesService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-request.service */ "./src/app/services/web-request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UsersService = class UsersService {
    constructor(authService, webService) {
        this.authService = authService;
        this.webService = webService;
        this.loggedInUserId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.loggedInUserIdObs$ = this.loggedInUserId.asObservable();
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.cartObs$ = this.cart.asObservable();
        this.loggedInUserIdObs$.subscribe((id) => (this.userId = id));
        this.authService.isLoggedInObs$.subscribe((status) => {
            if (status)
                this.emitLoggedInUserId(this.authService.getUserId());
            else
                this.emitLoggedInUserId("");
        });
    }
    emitCart(cart) {
        this.cart.next(cart);
    }
    emitLoggedInUserId(id) {
        this.loggedInUserId.next(id);
    }
    getUser(id) {
        return this.webService
            .get(`users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res.body));
    }
    getAllUsers(adminId) {
        return this.webService
            .get("users", { _id: adminId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res.body));
    }
    updateUser(id, payload) {
        return this.webService
            .patch(`users/${id}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => res.body));
    }
    getCart() {
        this.webService
            .get(`users/${this.userId}/cart`)
            .subscribe((res) => this.emitCart(res.body));
    }
    addToCart(product, quantity) {
        return this.webService.patch("users/cart/add", {
            userId: this.userId,
            cartItem: {
                product,
                quantity
            }
        });
    }
    removeFromCart(product) {
        return this.webService.patch("users/cart/remove", {
            userId: this.userId,
            product
        });
    }
    clearCart() {
        return this.webService.patch("users/cart/clear", { userId: this.userId });
    }
};
UsersService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_4__["WebRequestService"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UsersService);



/***/ }),

/***/ "./src/app/services/web-request.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/web-request.service.ts ***!
  \*************************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WebRequestService = class WebRequestService {
    constructor(http) {
        this.http = http;
    }
    get(uri, headers = "") {
        return this.http.get(`/${uri}`, {
            headers,
            observe: "response"
        });
    }
    post(uri, payload, headers = "") {
        return this.http.post(`/${uri}`, payload, {
            headers,
            observe: "response"
        });
    }
    patch(uri, payload, headers = "") {
        return this.http.patch(`/${uri}`, payload, {
            headers,
            observe: "response"
        });
    }
    delete(uri, headers = "") {
        return this.http.delete(`/${uri}`, {
            headers,
            observe: "response"
        });
    }
    login(email, password) {
        return this.http.post(`/users/login`, {
            email,
            password
        }, { observe: "response" });
    }
    signup(email, password) {
        return this.http.post(`/users`, {
            email,
            password
        }, { observe: "response" });
    }
    forgotPassword(email) {
        return this.http.post(`/users/forgot-password`, { email }, { observe: "response" });
    }
    resetPassword(email, password) {
        return this.http.patch(`/users/reset-password`, { email, password }, { observe: "response" });
    }
    checkToken(token) {
        return this.http.post(`/users/reset/check-token`, { token }, { observe: "response" });
    }
};
WebRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], WebRequestService);



/***/ }),

/***/ "./src/app/shared-components/main-pagination/main-pagination.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared-components/main-pagination/main-pagination.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-current {\n  background: #8a4d76 !important;\n  border-color: #8a4d76 !important;\n}\n\n.pagination-previous,\n.pagination-next {\n  background: white;\n}\n\n.pagination-link {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbWFpbi1wYWdpbmF0aW9uL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxtYWluLXBhZ2luYXRpb25cXG1haW4tcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbWFpbi1wYWdpbmF0aW9uL21haW4tcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUNERjs7QURJQTs7RUFFRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21haW4tcGFnaW5hdGlvbi9tYWluLXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVycGxlOiAjOGE0ZDc2O1xyXG5cclxuLmlzLWN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6ICRwdXJwbGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICRwdXJwbGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tcHJldmlvdXMsXHJcbi5wYWdpbmF0aW9uLW5leHQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1saW5rIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iLCIuaXMtY3VycmVudCB7XG4gIGJhY2tncm91bmQ6ICM4YTRkNzYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjOGE0ZDc2ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdpbmF0aW9uLXByZXZpb3VzLFxuLnBhZ2luYXRpb24tbmV4dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucGFnaW5hdGlvbi1saW5rIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/main-pagination/main-pagination.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared-components/main-pagination/main-pagination.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPaginationComponent", function() { return MainPaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPaginationComponent = class MainPaginationComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.currentPage = 1;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    nextPage() {
        if (this.currentPage < this.totalPages)
            this.currentPage++;
        this.changePage();
    }
    previousPage() {
        if (this.currentPage > 1)
            this.currentPage--;
        this.changePage();
    }
    goToPage(pageAsString) {
        this.currentPage = Number(pageAsString);
        this.changePage();
    }
    changePage() {
        this.pageChanged.emit(this.currentPage);
    }
};
MainPaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPaginationComponent.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPaginationComponent.prototype, "totalPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MainPaginationComponent.prototype, "pageChanged", void 0);
MainPaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main-pagination",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/main-pagination/main-pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-pagination.component.scss */ "./src/app/shared-components/main-pagination/main-pagination.component.scss")).default]
    })
], MainPaginationComponent);



/***/ }),

/***/ "./src/app/shared-components/per-page/per-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared-components/per-page/per-page.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3Blci1wYWdlL3Blci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared-components/per-page/per-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared-components/per-page/per-page.component.ts ***!
  \******************************************************************/
/*! exports provided: PerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerPageComponent", function() { return PerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PerPageComponent = class PerPageComponent {
    constructor() {
        this.isActive = false;
        this.perPage = 20;
        this.perPageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    toggleIsActive() {
        this.isActive = !this.isActive;
    }
    deactivate() {
        this.isActive = false;
    }
    selectPerPage(numberAsString) {
        this.perPage = Number(numberAsString);
        this.perPageSelected.emit(this.perPage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PerPageComponent.prototype, "perPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PerPageComponent.prototype, "perPageSelected", void 0);
PerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-per-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./per-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/per-page/per-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./per-page.component.scss */ "./src/app/shared-components/per-page/per-page.component.scss")).default]
    })
], PerPageComponent);



/***/ }),

/***/ "./src/app/shared-components/product-form/product-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/product-form/product-form.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input,\n.textarea {\n  margin: 10px 0;\n}\n\n.button {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZHVjdC1mb3JtL0M6XFxBbmd1bGFyIHByb2plY3RzXFxlY29tXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxwcm9kdWN0LWZvcm1cXHByb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCxcclxuLnRleHRhcmVhIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iLCIuaW5wdXQsXG4udGV4dGFyZWEge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/product-form/product-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/product-form/product-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductFormComponent, ProductForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductForm", function() { return ProductForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ProductFormComponent = class ProductFormComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.product = new ProductForm(this.data.product.name, this.data.product.imageUrl, this.data.product.shortDescription, this.data.product.longDescription, this.data.product.price, this.data.product.tag);
    }
    validatePrice(e) {
        if (!Number.isInteger(Number(e.target.value))) {
            e.target.value = Math.round(Number(e.target.value)).toString();
            return;
        }
        if (Number(e.target.value) < 1) {
            e.target.value = (1).toString();
            return;
        }
    }
    submit() {
        this.dialogRef.close({ product: this.product });
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-form/product-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-form.component.scss */ "./src/app/shared-components/product-form/product-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ProductFormComponent);

class ProductForm {
    constructor(name = "", imageUrl = "", shortDescription = "", longDescription = "", price = 0, tag = "") {
        this.name = name;
        this.imageUrl = imageUrl;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.price = price;
        this.tag = tag;
    }
}


/***/ }),

/***/ "./src/app/shared-components/secondary-pagination/secondary-pagination.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared-components/secondary-pagination/secondary-pagination.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination-container {\n  width: 200px;\n  display: flex;\n  justify-content: center;\n}\n.pagination-container .button {\n  width: 32px;\n  height: 32px;\n  padding: 6px 6px;\n  margin: 0 8px;\n}\n.pagination-container .button i {\n  font-size: 12px;\n}\n.pagination-container .input {\n  width: 48px;\n  height: 32px;\n  padding: 6px;\n  text-align: center;\n  /* Chrome, Safari, Edge, Opera */\n  /* Firefox */\n}\n.pagination-container .input::-webkit-outer-spin-button, .pagination-container .input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.pagination-container .input[type=number] {\n  -moz-appearance: textfield;\n}\n.pagination-container label {\n  line-height: 32px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2Vjb25kYXJ5LXBhZ2luYXRpb24vQzpcXEFuZ3VsYXIgcHJvamVjdHNcXGVjb21cXGNsaWVudC9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHNlY29uZGFyeS1wYWdpbmF0aW9uXFxzZWNvbmRhcnktcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2Vjb25kYXJ5LXBhZ2luYXRpb24vc2Vjb25kYXJ5LXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQ0FBQTtFQU9BLFlBQUE7QUNSSjtBREVJO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDRE47QURLSTtFQUNFLDBCQUFBO0FDSE47QURPRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlY29uZGFyeS1wYWdpbmF0aW9uL3NlY29uZGFyeS1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmc6IDZweCA2cHg7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbiAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICZbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxufVxyXG4iLCIucGFnaW5hdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhZ2luYXRpb24tY29udGFpbmVyIC5idXR0b24ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHggNnB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuLnBhZ2luYXRpb24tY29udGFpbmVyIC5idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciAuaW5wdXQge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG4gIC8qIEZpcmVmb3ggKi9cbn1cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciAuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciAuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4ucGFnaW5hdGlvbi1jb250YWluZXIgbGFiZWwge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/secondary-pagination/secondary-pagination.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared-components/secondary-pagination/secondary-pagination.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SecondaryPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryPaginationComponent", function() { return SecondaryPaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecondaryPaginationComponent = class SecondaryPaginationComponent {
    constructor() {
        this.currentPage = 1;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    nextPage() {
        if (this.currentPage < this.totalPages)
            this.currentPage++;
        this.changePage();
    }
    previousPage() {
        if (this.currentPage > 1)
            this.currentPage--;
        this.changePage();
    }
    validatePageControl(e) {
        if (!Number.isInteger(Number(e.target.value))) {
            e.target.value = this.currentPage.toString();
            this.changePage();
            return;
        }
        if (Number(e.target.value) > this.totalPages) {
            this.currentPage = this.totalPages;
            e.target.value = this.totalPages.toString();
            this.changePage();
            return;
        }
        else if (Number(e.target.value) < 1) {
            this.currentPage = 1;
            e.target.value = (1).toString();
            this.changePage();
            return;
        }
        this.currentPage = Number(e.target.value);
        this.changePage();
    }
    changePage() {
        this.pageChanged.emit(this.currentPage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryPaginationComponent.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryPaginationComponent.prototype, "totalPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SecondaryPaginationComponent.prototype, "pageChanged", void 0);
SecondaryPaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-secondary-pagination",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secondary-pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/secondary-pagination/secondary-pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secondary-pagination.component.scss */ "./src/app/shared-components/secondary-pagination/secondary-pagination.component.scss")).default]
    })
], SecondaryPaginationComponent);



/***/ }),

/***/ "./src/app/shared-components/sort-by/sort-by.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared-components/sort-by/sort-by.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NvcnQtYnkvc29ydC1ieS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared-components/sort-by/sort-by.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared-components/sort-by/sort-by.component.ts ***!
  \****************************************************************/
/*! exports provided: SortByComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByComponent", function() { return SortByComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");



let SortByComponent = class SortByComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.isActive = false;
        this.sortChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.productsSubscription = this.productsService.allProductsObs$.subscribe(() => this.sort());
    }
    ngOnChanges() {
        if (this.toSortArr)
            this.sort();
    }
    onResize() {
        this.innerWidth = window.innerWidth;
    }
    toggleIsActive() {
        this.isActive = !this.isActive;
    }
    deactivate() {
        this.isActive = false;
    }
    changeSort(sortName) {
        this.currentSort = sortName.trim();
        this.sortChanged.emit(this.currentSort);
    }
    sort(sortName) {
        if (!this.toSortArr)
            return;
        if (sortName)
            this.currentSort = sortName;
        switch (this.currentSort) {
            case "Randomize":
                this.randomize();
                break;
            case "Price: ascending":
                this.sortPriceAsc();
                break;
            case "Price: descending":
                this.sortPriceDesc();
                break;
            case "Name: A-Z":
                this.sortNameAsc();
                break;
            case "Name: Z-A":
                this.sortNameDesc();
                break;
            case "Date: new first":
                this.sortDateNewFirst();
                break;
            case "Date: old first":
                this.sortDateOldFirst();
                break;
        }
    }
    randomize() {
        if (!this.toSortArr)
            return;
        const arr = this.toSortArr;
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        this.toSortArr = arr;
    }
    sortPriceAsc() {
        this.toSortArr.sort((el1, el2) => {
            if (el1.product)
                return (el1.product.price * el1.quantity - el2.product.price * el2.quantity);
            return el1.price - el2.price;
        });
    }
    sortPriceDesc() {
        this.toSortArr.sort((el1, el2) => {
            if (el1.product)
                return (el2.product.price * el2.quantity - el1.product.price * el1.quantity);
            return el2.price - el1.price;
        });
    }
    sortNameAsc() {
        this.toSortArr.sort((el1, el2) => {
            if (el1.product)
                [el1, el2] = [el1.product, el2.product];
            if (el1.name.lastName) {
                [el1, el2] = [el1.name.lastName, el2.name.lastName];
                if (el1 > el2)
                    return 1;
                if (el2 > el1)
                    return -1;
                return 0;
            }
            if (el1.name > el2.name)
                return 1;
            if (el2.name > el1.name)
                return -1;
            return 0;
        });
    }
    sortNameDesc() {
        this.toSortArr.sort((el1, el2) => {
            if (el1.product)
                [el1, el2] = [el1.product, el2.product];
            if (el1.name.lastName) {
                [el1, el2] = [el1.name.lastName, el2.name.lastName];
                if (el1 > el2)
                    return -1;
                if (el2 > el1)
                    return 1;
                return 0;
            }
            if (el1.name > el2.name)
                return -1;
            if (el2.name > el1.name)
                return 1;
            return 0;
        });
    }
    sortDateNewFirst() {
        this.toSortArr.sort((el1, el2) => +new Date(el1.date) - +new Date(el2.date));
    }
    sortDateOldFirst() {
        this.toSortArr.sort((el1, el2) => +new Date(el2.date) - +new Date(el1.date));
    }
};
SortByComponent.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SortByComponent.prototype, "currentSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SortByComponent.prototype, "page", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SortByComponent.prototype, "toSortArr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SortByComponent.prototype, "sortChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize")
], SortByComponent.prototype, "onResize", null);
SortByComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sort-by",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sort-by.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/sort-by/sort-by.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sort-by.component.scss */ "./src/app/shared-components/sort-by/sort-by.component.scss")).default]
    })
], SortByComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular projects\ecom\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map