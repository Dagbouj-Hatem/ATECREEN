/**
 * 2007-2017 Leotheme
 *
 * NOTICE OF LICENSE
 *
 * Leo feature for prestashop 1.7: ajax cart, review, compare, wishlist at product list 
 *
 * DISCLAIMER
 *
 *  @Module Name: Leo Feature
 *  @author    leotheme <leotheme@gmail.com>
 *  @copyright 2007-2018 Leotheme
 *  @license   http://leotheme.com - prestashop template provider
 */
$(document).ready(function() {
	$('select#id_product_review_criterion_type').change(function() {
		// PS 1.6
		$('#categoryBox').closest('div.form-group').hide();
		$('#ids_product').closest('div.form-group').hide();
		// PS 1.5
		$('#categories-treeview').closest('div.margin-form').hide();
		$('#categories-treeview').closest('div.margin-form').prev().hide();
		$('#ids_product').closest('div.margin-form').hide();
		$('#ids_product').closest('div.margin-form').prev().hide();

		if (this.value == 2)
		{
			$('#categoryBox').closest('div.form-group').show();
			// PS 1.5
			$('#categories-treeview').closest('div.margin-form').show();
			$('#categories-treeview').closest('div.margin-form').prev().show();
		}
		else if (this.value == 3)
		{
			$('#ids_product').closest('div.form-group').show();
			// PS 1.5
			$('#ids_product').closest('div.margin-form').show();
			$('#ids_product').closest('div.margin-form').prev().show();
		}
	});

	$('select#id_product_review_criterion_type').trigger("change");
	
	//DONGND:: tab change in group config
	var id_panel = $("#leofeature-setting .leofeature-tablist li.active a").attr("href");
	$(id_panel).addClass('active').show();
	$('.leofeature-tablist li').click(function(){
		if(!$(this).hasClass('active'))
		{
			var default_tab = $(this).find('a').attr("href");			
			$('#LEOFEATURE_DEFAULT_TAB').val(default_tab);
		}
	})
	
	// console.log('test');
	if (typeof leofeature_module_dir != 'undefined')
	{
		$.ajax({
			type: 'POST',
			headers: {"cache-control": "no-cache"},
			url: leofeature_module_dir + 'psajax.php?rand=' + new Date().getTime(),
			async: true,
			cache: false,
			data: {
				"action": "get-new-review",		
			},
			success: function (result)
			{
				if(result != '')
				{						
					var obj = $.parseJSON(result);
					if (obj.number_review > 0)
					{
						$('#subtab-AdminLeofeatureManagement').addClass('has-review');
						// $('#subtab-AdminLeofeatureReviews').append('<span id="total_notif_number_wrapper" class="notifs_badge"><span id="total_notif_value">'+obj.number_review+'</span></span>');
						$('#subtab-AdminLeofeatureReviews').append('<div class="notification-container"><span class="notification-counter">'+obj.number_review+'</span></div>');
					}
					
				}
				
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				// alert("TECHNICAL ERROR: \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);
			}
		});
	}
        
    $('#module_form_submit_btn').click(function(){
        alert( 'You are using free version of Leofeature. Please update to professional version http://apollotheme.com');
    });
    
    var leo_id_disable_on = '#LEOFEATURE_PRODUCT_REVIEWS_ALLOW_GUESTS_on, #LEOFEATURE_ENABLE_NOTIFICATION_on, #LEOFEATURE_ENABLE_FLYCART_EFFECT_on, #LEOFEATURE_ENABLE_DROPDOWN_FLYCART_on';
    var leo_id_disable_off = '#LEOFEATURE_PRODUCT_REVIEWS_ALLOW_GUESTS_off, #LEOFEATURE_ENABLE_NOTIFICATION_off, #LEOFEATURE_ENABLE_FLYCART_EFFECT_off, #LEOFEATURE_ENABLE_DROPDOWN_FLYCART_off';
    
    $(leo_id_disable_on).off('click').on('click', function(e){
        alert( 'We are sorry that you are using free version, hence, you cannot use this function. Please update to professional version http://apollotheme.com.');
        return false;
    });
    $(leo_id_disable_off).trigger('click');
    
    


    $('#LEOFEATURE_SHOW_POPUP_off').off('click').on('click', function(e){
        alert( 'We are sorry that you are using free version, hence, you cannot use this function. Please update to professional version http://apollotheme.com.');
        return false;
    });
    $('#LEOFEATURE_SHOW_POPUP_on').trigger('click');
    
    
    
    
    $("#LEOFEATURE_TYPE_DROPDOWN_DEFAULTCART").val("dropdown");
    $("#LEOFEATURE_TYPE_DROPDOWN_DEFAULTCART").off('change').on('change', function(){
        alert( 'We are sorry that you are using free version, hence, you cannot use this function. Please update to professional version http://apollotheme.com.');
        $("#LEOFEATURE_TYPE_DROPDOWN_DEFAULTCART").val("dropdown");
        return false;
    });
    
    
    
    $("#LEOFEATURE_NUMBER_CARTITEM_DISPLAY_ALLCART").off('change').on('change', function(){
        alert( 'We are sorry that you are using free version, hence, you cannot use this function. Please update to professional version http://apollotheme.com.');
        $("#LEOFEATURE_NUMBER_CARTITEM_DISPLAY_ALLCART").val("3");
        return false;
    });
    
    
    
    
});