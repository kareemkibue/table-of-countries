/// <reference path="../node_modules/@types/angular/index.d.ts" />

/// <reference path="./components/app-root/app.component.ts" />
/// <reference path="./components/countries-table/countries-table.component.ts" />

angular
    .module( 'dashboard.finance', [ 'ngAnimate' ] )

    .component( 'appRoot', toc.appRootComponent )
    .component( 'countriesTable', toc.countriesTblComponent );