import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';

import angular from 'angular';
import angularuibootstrap from 'angular-ui-bootstrap';
import periodoCalendarioModule from '../componentes/periodoCalendario/periodo-calendario.module';
import periodoCalendarioComponent from '../componentes/periodoCalendario/periodo-calendario.component';

angular.module('demonstracaoApp', ['periodoCalendario']).controller('DemonstracaoController', function($scope) {
	
	$scope.periodoDemo = {
		inicio: new Date(2017, 9, 25),
		fim: new Date(2017, 9, 30)
	}
	
});