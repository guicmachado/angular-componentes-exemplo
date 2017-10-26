describe('periodoCalendario', function() {

	beforeEach(module('periodoCalendario'));

	describe('PeriodoCalendarioController', function() {
		var ctrl;

		describe('Sem periodo', function() {
			beforeEach(inject(function($componentController) {
				ctrl = $componentController('periodoCalendario');
			}));

			it('deve atribuir os valores padroes quando nao informado periodo', function() {
				expect(compararDatas(ctrl.periodo.dataInicio, new Date())).toBeTruthy();
				expect(compararDatas(ctrl.periodo.dataFim, new Date())).toBeTruthy();

				expect(ctrl.popupOpened.inicio).toBeFalsy();
				expect(ctrl.popupOpened.fim).toBeFalsy();

				expect(ctrl.format).toBe('dd/MM/yyyy');
			});
		});

		describe('Com periodo', function() {
			beforeEach(inject(function($rootScope, $componentController) {
				scope = $rootScope.$new();
				ctrl = $componentController('periodoCalendario', {$scope: scope}, {inicio: new Date(2017, 9, 25), fim: new Date(2017, 9, 30)});
				ctrl.$onInit();
			}));

			it('deve atribuir os valores do periodo informado', function() {
				expect(compararDatas(ctrl.periodo.dataInicio, new Date(2017, 9, 25))).toBeTruthy();
				expect(compararDatas(ctrl.periodo.dataFim, new Date(2017, 9, 30))).toBeTruthy();
			});
		});		
	});

	function compararDatas(data1, data2) {
		return data1.getDay() === data2.getDay() &&
			data1.getMonth() === data2.getMonth() &&
			data1.getFullYear() === data2.getFullYear();
	}
});