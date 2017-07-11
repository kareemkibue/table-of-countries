/// <reference path="../node_modules/@types/angular/index.d.ts" />

module tot {

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
    .module( 'totApp', [ 'ngAnimate' ] )

    .component( 'appRoot', tot.appRootComponent )
    .component( 'countriesTable', tot.countriesTblComponent );