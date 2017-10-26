'use strict';

describe('Demonstracao App', function() {

	describe('periodoCalendario', function() {

		it('deve formatar para a data definida no controller', function() {
			browser.get('index.html');
			
			expect(element(by.model('$ctrl.periodo.dataInicio')).getAttribute('value')).toBe(formatarData(new Date(2017, 9, 25)));
			expect(element(by.model('$ctrl.periodo.dataFim')).getAttribute('value')).toBe(formatarData(new Date(2017, 9, 30)));
		});
	});

	function formatarData(data) {
		var dia = data.getDate();
		var mes = data.getMonth() + 1;
		var ano = data.getFullYear();

		var dataFormatada = '';
		if (dia < 10) {
			dataFormatada = dataFormatada + '0' + dia;
		} else {
			dataFormatada = dataFormatada + dia;
		}

		dataFormatada = dataFormatada + '/';

		if (mes < 10) {
			dataFormatada = dataFormatada + '0' + mes;
		} else {
			dataFormatada = dataFormatada + mes;
		}

		dataFormatada = dataFormatada + '/' + ano;

		return dataFormatada;
	}
});
