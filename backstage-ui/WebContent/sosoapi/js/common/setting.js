$(function() {
	clearErrorMsg();
	initBootbox();
	initPopover();
	initSelectValue();
	initModal();
	initTreeGrid()
});
function clearErrorMsg() {
	$("body").focusin(function() {
		$(".error-msg").hide()
	})
}
function initModal() {
	$("[data-toggle='modal']").each(function() {
		var c = $(this);
		var a = {
			backdrop : "static",
			keyboard : false
		};
		$.extend(c.data(), a);
		var d = c.attr("data-target") || c.attr("href");
		var b = c.attr("data-form");
		if (d && b) {
			$(d).on("hide.bs.modal", function() {
				resetValidForm(b)
			})
		}
	})
}
function initPopover() {
	$("[data-toggle='popover']").each(function() {
		var b = $(this);
		var a = b.attr("data-placement");
		if (isNull(a)) {
			a = "right"
		}
		b.popover({
			placement : a,
			trigger : "hover"
		})
	})
}
function initBootbox() {
	bootbox.addLocale("zh_CN", {
		OK : "确定",
		CANCEL : "取消",
		CONFIRM : "确定"
	});
	bootbox.setDefaults({
		locale : "zh_CN",
		backdrop : false,
		defBtnClassName : "btn-success",
		alertOpt : {
			size : "small"
		},
		confirmOpt : {
			size : "small",
			callbackJustForConfirm : true
		}
	})
}
function initTreeGrid() {
	if ($.fn.treegrid) {
		$
				.extend(
						$.fn.treegrid.defaults,
						{
							expanderExpandedClass : "fa fa-caret-down",
							expanderCollapsedClass : "fa fa-caret-right",
							nodeRemoveTemplate : '<span class="treegrid-node-remove fa fa-times" style="cursor:pointer;padding-right:5px;"></span>',
							nodeAddChildTemplate : '<span class="treegrid-node-add-child fa fa-plus" style="cursor:pointer;padding-right:5px;"></span>',
							indentColumn : 1,
							operColumn : 0,
						})
	}
};