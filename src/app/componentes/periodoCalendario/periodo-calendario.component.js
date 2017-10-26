angular.
	module('periodoCalendario').
	component('periodoCalendario', {
		template: require('./periodo-calendario.template.html'),
		controller: [
			function PeriodoCalendarioController() {
				this.periodo = {
					dataInicio: new Date(),
					dataFim: new Date()
				};

				this.$onInit = function() {
					if (this.inicio) {
						this.periodo.dataInicio = this.inicio;	
					}

					if (this.fim) {
						this.periodo.dataFim = this.fim;	
					}
				};

				this.popupOpened = {
					inicio: false,
					fim: false
				};

				this.openInicio = function() {
					this.popupOpened.inicio = true;
				};

				this.openFim = function() {
					this.popupOpened.fim = true;
				};

				this.dateOptions = {
				    minDate: new Date(),
					startingDay: 1
				};

				this.format = 'dd/MM/yyyy';
			}
		],
		bindings: {
			inicio: '<',
			fim: '<'
		}
	});