function formatNum(b, a) {
	return Math.abs(b).toFixed(a)
}
function isNumber(b) {
	var c = /^\d*(?:\.\d{0,8})?$/;
	var a = b.match(c);
	if (a == null) {
		return false
	}
	return true
}
function isMobile(b) {
	var c = /^1[3,5,8][0-9]{9}$/;
	var a = b.match(c);
	if (a == null) {
		return false
	}
	return true
}
function isTime(b) {
	var c = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var a = b.match(c);
	if (a == null) {
		return false
	}
	return true
}
function isDate(b) {
	var c = /^(\d{4})-(\d{2})-(\d{2})$/;
	var a = b.match(c);
	if (a == null) {
		return false
	}
	return true
}
function isDateTime(b) {
	var c = /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var a = b.match(c);
	if (a == null) {
		return false
	}
	return true
}
function isEmail(b) {
	var c = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	var a = b.match(c);
	if (a == null) {
		return false
	}
	return true
}
function isNull(a) {
	if (null == a || "" == a || undefined == a || "null" == a) {
		return true
	}
	return false
}
function isUserName(a) {
	if (/^\d.*$/.test(a)) {
		return 1
	}
	if (!/^.{5,20}$/.test(a)) {
		return 2
	}
	if (!/^[\w_]*$/.test(a)) {
		return 3
	}
	return 0
}
function doGet(a, b, c) {
	ajaxExtendBase("GET", a, b, false, c)
}
function doPost(a, b, c) {
	ajaxExtendBase("POST", a, b, false, c)
}
function ajaxExtendBase(c, a, d, b, e) {
	$.ajax({
		type : c,
		url : a,
		data : d,
		async : b,
		dataType : "json",
		success : function(f) {
			if (f.errorCode == "0") {
				e(f.data)
			} else {
				dealWithException(f.errorMsg)
			}
		},
		complete : function(f, g) {
			dealWithResponse(f.status)
		},
		headers : {
			sysReqToken : $("#sysReqToken").val()
		}
	})
}
function dealWithException(a) {
	showMsg(a)
}
function dealWithResponse(a) {
	if (a == 401) {
		setWindowLocation("forwardLogin.htm")
	}
}
function showMsg(a) {
	notice(a)
}
function countDown(a, b) {
	$(a).text(b);
	if (--b > 0) {
		setTimeout("countDown('" + a + "'," + b + ")", 1000)
	}
}
function getTmpl(a) {
	return $($(a).html())
}
function getSelectValue(a) {
	return $(a).val()
}
function setSelectValue(a, b) {
	$(a).val(b)
}
function initSelectValue() {
	$("select[data-initValue]").each(function() {
		var a = $(this);
		var b = a.attr("data-initValue");
		if (b) {
			a.val(b)
		}
	})
}
function initSelectRemote(b, c, a) {
	doGet(b, c, function(f) {
		for (var e = 0; e < f.length; e++) {
			var d = f[e];
			$(a).each(
					function() {
						$(this).append(
								"<option value='" + d.code + "'>" + d.name
										+ "</option>")
					})
		}
	})
}
function initSelectLocal(a, d) {
	for (var c = 0; c < d.length; c++) {
		var b = d[c];
		$(a).each(
				function() {
					$(this).append(
							"<option value='" + b.code + "'>" + b.name
									+ "</option>")
				})
	}
}
function resetValidForm(c) {
	var a = "#" + c;
	var b = $(a).data("bootstrapValidator");
	if (b) {
		b.resetForm()
	}
	$(a).resetForm()
}
function isFormValid(b) {
	var a = "#" + b;
	$(a).bootstrapValidator("validate");
	return $(a).data("bootstrapValidator").isValid()
}
function formatJson(a) {
	return JSON.stringify(a, null, 4)
}
function validJson(b) {
	var a = true;
	try {
		JSON.parse(b)
	} catch (c) {
		a = false
	}
	return a
}
$.fn.setFieldsValue = function(a) {
	this.each(function() {
		var f = $(this);
		var b = this.name;
		var d = this.type;
		var c = this.tagName.toLowerCase();
		var e;
		if ((c == "textarea") || (c == "input") || (c == "select")) {
			e = a[b];
			if (e != undefined) {
				f.val("" + e)
			}
		} else {
			if (d == "checkbox" || d == "radio") {
			} else {
				if (d == "file") {
				}
			}
		}
	})
};
$.fn.getFieldsValue = function() {
	var a = new Object();
	this.each(function() {
		var f = $(this);
		var b = this.name;
		var d = this.type;
		var c = this.tagName.toLowerCase();
		var e;
		if ((c == "textarea") || (c == "input") || (c == "select")) {
			e = f.val();
			a[b] = e
		} else {
			if (d == "checkbox" || d == "radio") {
			} else {
				if (d == "file") {
				}
			}
		}
	});
	return a
};
function notice(b, a) {
	$.jGrowl(b, {
		sticky : false,
		position : "center",
		life : 500,
		close : a
	})
}
function getUrlParam(a) {
	var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
	var c = window.location.search.substr(1).match(b);
	if (c != null) {
		return decodeURI(c[2])
	}
	return null
};