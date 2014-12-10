// Account Payments JavaScript Document

jQuery.noConflict();
jQuery(document).ready(function($){
	// On payment dropdown field change
	$('#OrderForm_OrderForm_PaymentMethod').change(function(e){
		var url = document.URL;
		if($(this).val() == 'AccountPayment'){
			$.get(url + '/AccountPaymentFields', function(data){
				$('#payment-load-area').html(data);
			});
		}
	});
});