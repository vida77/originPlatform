$(function(){
    changeNavTo('系统管理', '用户管理');

	layui.use(['form', 'laypage'], function() {
		var laypage = layui.laypage;

        //调用分页
        laypage({
            cont: 'page',
            pages: 100,
            groups:3,
            skin: '#28a96c',
            skip: true,
            // 触发分页后的回调，函数返回两个参数。
            //obj是一个object类型。包括了分页的所有配置信息。
            //first一个Boolean类，检测页面是否初始加载。非常有用，可避免无限刷新。
            jump: function(obj, first){
                //得到了当前页，用于向服务端请求对应数据
                var curr = obj.curr;
            }
        });

        //重置密码
        $('.reset').on('click',function(){
			layer.confirm('重置密码为：123456', {
			  btn: ['确定','取消'] //按钮
			}, function(){
			  layer.closeAll();
			}, function(){
			  layer.closeAll();
			});
		});
        //删除数据
        $('.del').on('click',function(){
            layer.confirm('您确定删除数据？', {
                btn: ['确定','取消'] //按钮
            }, function(){
                layer.closeAll();
            }, function(){
                layer.closeAll();
            });
        });
        //停用启用切换
        $('.state').on('click',function(){
            if($(this).hasClass('icon-quxiao')){
                $(this).removeClass('icon-quxiao').addClass('icon-tongguo').attr('title','启用');
            }else{
                $(this).addClass('icon-quxiao').removeClass('icon-tongguo').attr('title','停用');
            }
        })
        //新增角色
        $('.add').click(function () {
            location.href = './addUser.html'
        })
	});

	//修改用户信息
	$('.fix').click(function(){
		location.href = './modifyUserInfo.html'
	})
});