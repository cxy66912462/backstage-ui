<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!-- 	<base href="http://www.sosoapi.com/"/> -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Simple online,Simple offline 专注于API接口文档管理及线上线下傻瓜式测试的API服务平台">
<meta name="Keywords" content="swagger,接口文档,api文档,文档工具">

<title>SosoApi simple online,simple offline</title>

<link rel="shortcut icon" href="favicon.ico">
<link href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/chosen/1.4.2/chosen.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/summernote/0.6.16/summernote.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/jquery-jgrowl/1.4.3/jquery.jgrowl.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/animate.css/3.5.2/animate.min.css" rel="stylesheet">
<link href="sosoapi/css/theme/theme.css" rel="stylesheet">
<link href="sosoapi/css/theme/component.css" rel="stylesheet">
	<title>项目管理  </title>
		
	<!-- PAGE LEVEL STYLES -->
	<!-- <link href="" rel="stylesheet" /> -->
	<!-- END PAGE LEVEL  STYLES -->
</head>
<body class="sticky-header">
<!-- LEFT SECTION -->
<!-- sidebar left start-->
<div class="sidebar-left sticky-sidebar">
    <!--responsive view logo start-->
    <div class="logo dark-logo-bg visible-xs-* visible-sm-*">
        <a href="">
            <img src="http://7xndff.com1.z0.glb.clouddn.com/image/logo-icon.png" alt="">
            <span class="brand-name">SosoApi</span>
        </a>
    </div>
    <!--responsive view logo end-->

    <div class="sidebar-left-info">
        <!-- visible small devices start-->
        <div class="search-field"></div>
        <!-- visible small devices end-->

        <!--sidebar nav start-->
        <ul class="nav nav-pills nav-stacked side-navigation">
            <li class="">
            	<a href="auth/home/home.htm">
            		<i class="fa fa-home"></i> 
	            	<span>首页</span>
	            </a>
            </li>
            
            <li class="active">
            	<a href="auth/proj/list.htm">
            		<i class="fa fa-sitemap"></i> 
	            	<span>项目管理</span>
	            </a>
            </li>
            
            <li class="">
            	<a href="auth/doc/list.htm">
            		<i class="fa fa-file-code-o"></i> 
		            <span>API文档管理</span>
            	</a>
            </li>
            
            <li class="">
            	<a href="auth/user/home.htm">
            		<i class="fa fa-user"></i> 
	            	<span>个人中心</span>
	            </a>
            </li>
            
            <li class="">
            	<a href="auth/suggest/forwardSuggest.htm">
            		<i class="fa fa-commenting"></i> 
	            	<span>意见反馈</span>
            	</a>
            </li>

        	<li class="">
         		<a href="pass/faq/home.htm">
         			<i class="fa fa-question-circle-o"></i> 
	            	<span>常见问题</span>
         		</a>
        	</li>
        </ul>
        <!--sidebar nav end-->
    </div>
</div>
<!-- sidebar left end-->
	<!-- END LEFT SECTION -->
	
<div class="body-content">
<!-- TOP SECTION -->
<!-- header section start-->
	<div class="header-section">
		<!--logo and logo icon start-->
				<div class="logo dark-logo-bg hidden-xs hidden-sm hidden-md">
					<a href=""> <img
						src="http://7xndff.com1.z0.glb.clouddn.com/image/logo-icon.png"
						alt=""> <span class="brand-name">SosoApi</span>
					</a>
				</div>
	
				<div class="icon-logo dark-logo-bg hidden-xs hidden-sm hidden-md">
	        <a href="">
				<img src="http://7xndff.com1.z0.glb.clouddn.com/image/logo-icon.png" alt="">
	        </a>
	    </div>
	    <!--logo and logo icon end-->
	
	    <!--toggle button start-->
	    <a class="toggle-btn" style="padding-top:25px;" onclick="control()">
	    	<i class="fa fa-outdent"></i>
	    </a>
	    <!--toggle button end-->
	
		<div class="notification-wrap">
			<!--left notification start-->
			<div class="left-notification">
				<ul class="notification-menu">
					<li><a href="javascript:;" data-toggle="dropdown"
						class="btn btn-default dropdown-toggle info-number"> <span>控制台</span>
							<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu green">
						<li><a href="auth/home/home.htm"> <i class="fa fa-home"></i>
								<span>首页</span>
						</a></li>
						<li><a href="auth/proj/list.htm"> <i
								class="fa fa-sitemap"></i> <span>项目管理</span>
						</a></li>
						<li><a href="auth/doc/list.htm"> <i
								class="fa fa-file-code-o"></i> <span>API文档管理</span>
						</a></li>
						<li><a href="auth/user/home.htm"> <i class="fa fa-user"></i>
								<span>个人中心</span>
						</a></li>
						<li><a href="auth/suggest/forwardSuggest.htm"> <i
								class="fa fa-commenting"></i> <span>意见反馈</span>
						</a></li>
						<li><a href="pass/faq/home.htm"> <i
								class="fa fa-question-circle-o"></i> <span>常见问题</span>
						</a></li>
					</ul></li>
				</ul>
			</div>
			<!--left notification end-->
	
			<!--right notification start-->
			<div class="right-notification">
				<ul class="notification-menu">
					<li class="chat-group"><span>技术交流群:</span> <a
						href="http://jq.qq.com/?_wv=1027&amp;k=dPKj9Q" target="_blank"
						class="text-muted text-center">305629848</a></li>
	
	
					<li><a href="auth/msg/list.htm"
						class="btn btn-default dropdown-toggle info-number"> <i
							class="fa fa-bell-o" style="padding-top: 20px;"></i> <span
							class="badge bg-warning">3</span>
					</a></li>
	
					<li><a href="javascript:;"
						class="btn btn-default dropdown-toggle" data-toggle="dropdown">
							<img
							src="http://7xndff.com1.z0.glb.clouddn.com/image/def/head.png"
							alt=""> <span>小象撞东风</span> <span class="fa fa-angle-down"></span>
					</a>
						<ul class="dropdown-menu dropdown-usermenu green pull-right">
							<li><a href="auth/user/setting.htm"> <i
									class="fa fa-user"></i> <span>个人中心</span>
							</a></li>
							<li class="divider"></li>
							<li><a href="logout.htm"> <i class="fa fa-sign-out"></i>
									<span>退出</span>
							</a></li>
						</ul></li>
				</ul>
			</div>
			<!--right notification end-->
		</div>
	</div>
</div>
<script src="//cdn.bootcss.com/jquery/2.0.3/jquery.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap-hover-dropdown/2.0.10/bootstrap-hover-dropdown.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>
<script src="//cdn.bootcss.com/jquery.form/3.51/jquery.form.min.js"></script>
<script src="//cdn.bootcss.com/chosen/1.4.2/chosen.jquery.min.js"></script>
<script src="//cdn.bootcss.com/summernote/0.6.16/summernote.min.js"></script>
<script type="text/javascript" src="plugin/summernote/lang/summernote-zh-CN.js"></script>
<script type="text/javascript" src="plugin/summernote/plugin/summernote-ext-preview.js"></script>
<script type="text/javascript" src="plugin/bootbox/ext/js/bootbox.ext.js"></script>
<script src="//cdn.bootcss.com/jquery-jgrowl/1.4.3/jquery.jgrowl.min.js"></script>
<script type="text/javascript" src="plugin/spin/spin.min.js"></script>
<script type="text/javascript" src="plugin/modernizr.min.js"></script>
<script type="text/javascript" src="sosoapi/js/common/theme.js"></script>
<script type="text/javascript" src="sosoapi/js/common/common.js"></script>
<script type="text/javascript" src="sosoapi/js/common/setting.js"></script>

<!-- baidu统计 -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f2d73569c8bccbec048875092fe0591f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

</script>

    <script type="text/javascript" src="plugin/jquery.query.js"></script>
    <script type="text/javascript" src="js/project/projList.js"></script>
    <!-- END FOOTER SECTION -->
</body>
</html>
