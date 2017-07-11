/// <reference path="../node_modules/@types/angular/index.d.ts" />

module tot {

    export let appRootComponent = {
        template: `<div class="container"><search-form></search-form>
            <alpha-pagination></alpha-pagination>
            <countries-table></countries-table></div>`
    }

    class TableCtrl {

    }

    export let countriesTblComponent = {
        template: `<table class="tbl">
                <thead>
                    <th>Name</th>
                    <th>Continent</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Kenya</td>
                        <td>Africa</td>
                    </tr>
                    <tr>
                        <td>Kenya</td>
                        <td>Africa</td>
                    </tr>
                    <tr>
                        <td>Kenya</td>
                        <td>Africa</td>
                    </tr>
                </tbody>
            </table>`,
        controller: TableCtrl
    }

    export let searchFormComponent = {
        template: `<form novalidate ng-submit="frm.searchThings()" class="frm">
            <input type="text" ng-model="frm.search" placeholder="Search">
            <button type="submit">
                <svg version="1.1" x="0px" y="0px" viewBox="-429 231 100 100" style="enable-background:new -429 231 100 100;" xml:space="preserve">
                    <path d="M-418,329.5l25.1-25.3c6.5,4.8,14.5,7.6,23.1,7.6c21.7,0,39.3-17.8,39.3-39.7c0-21.8-17.6-39.6-39.3-39.6
                        s-39.3,17.8-39.3,39.6c0,8.3,2.5,16,6.9,22.4l-25.2,25.4L-418,329.5z M-369.9,244.1c15.3,0,27.8,12.6,27.8,28
                        c0,15.4-12.5,28-27.8,28c-15.3,0-27.8-12.6-27.8-28C-397.6,256.6-385.3,244.1-369.9,244.1z"/>
                    </svg>
            </button>
        </form>`,
        controllerAs: 'frm'
    }

    export let alphaPaginationComponent = {
        template: `<ul class="alpha-pagination"><li><a href="#">A</li><li><a href="#">B</li><ul>`,
        controllerAs: 'pagination'
    }

}

angular
    .module( 'totApp', [ 'ngAnimate' ] )

    .component( 'appRoot', tot.appRootComponent )
    .component( 'searchForm', tot.searchFormComponent )
    .component( 'alphaPagination', tot.alphaPaginationComponent )
    .component( 'countriesTable', tot.countriesTblComponent );