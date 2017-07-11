/// <reference path="../node_modules/@types/angular/index.d.ts" />

module toc {

    export let appRootComponent = {
        template: '<countries-table/>'
    }

    class TableCtrl {

    }

    export let countriesTblComponent = {
        template: `<div class="container">
            <table class="tbl">
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
            </table>
        </div>`,
        controller: TableCtrl
    }

}

angular
    .module( 'tocApp', [ 'ngAnimate' ] )

    .component( 'appRoot', toc.appRootComponent )
    .component( 'countriesTable', toc.countriesTblComponent );