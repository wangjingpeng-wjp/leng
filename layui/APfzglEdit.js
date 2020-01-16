
layui.use(['form','layer','tree'],function(){
    var form = layui.form,
        tree = layui.tree,
        // element =layui.element,
        // layer = parent.layer === undefined ? layui.layer : top.layer,
        layer=layui.layer,
        $ = layui.jquery;
        
        var listenAgreement=  xmSelect.render({
           
            el: '#customerUnit', 
            autoRow: true,
	        filterable: true,
             tree:{
                show:true,
                // showFolderIcon: true,
                showLine: false,
                indent: 20,
                expandedKeys:[-1],
                lazy:true,
                load:function(itme,cb){
                    setTimeout(function(){
                        if(itme.name.endsWith('2')){
                            return cb([]);
                        }
                        cb([
                            {name:itme.name+1,value:itme.value+'1',children:[]},
                            {name:itme.name+2,value:itme.value+'2',children:[]},

                        ])
                    },500)
                }
                
             },
             height:'auto',
            data(){
                return [
                    {name: '销售员', value: -1,  children: [
                        {name: '张三1', value: 1, children: []},
                        {name: '李四1', value: 2,selected:true },
                        {name: '王五1', value: 3, },
                    ]},
                    {name: '奖品', value: -2, children: [
                        {name: '奖品3', value: -3, children: [
                            {name: '苹果3', value: 14, },
                            {name: '香蕉3', value: 15},
                            {name: '葡萄3', value: 16},
                        ]},
                        {name: '苹果2', value: 4, },
                        {name: '香蕉2', value: 5},
                        {name: '葡萄2', value: 6},
                    ]},
                ]
            }
            // template:function({item,arr,name,value}){
            //     return name + '<span style="position:absolute;right:10px;color:red">'+value+'</span>'
            // }
       })

     $(document).on("click","upa",function(){
         var cid=$(this).attr("data-id");
         location.href="无线控制器.html?cid="+cid;
     })

    form.on("submit(addList)",function(data){
        //寮瑰嚭loading

        // console.log(data.field);
        // JSON.stringify(data.field);
        var index = layer.msg('数据提交中请稍后',{icon: 16,time:false,shade:0.8});
        
        $.ajax({
            // headers: {
            //     Accept: "application/json; charset=utf-8",
            //     // ContentType:"application/json"
            // },
            contentType: 'application/json',
            // autoRefresh:true,
            // async:false,
            url:'http://10.12.102.11:8888/apGroup/update',
            type:"post"
            // ,data:useredit
            // ,res:{
            //     id:$(".id").val(),
            //     name:$(".name").val(),
            //     ipAddres:$(".ipAddres").val(),
            //     listenPort:$(".listenPort").val(),
            //     listenAgreement:$(".listenAgreement").val(),
            //     location:$(".location").val(),
            //     remark:$(".remark").val(),
            //     isDel:$(".isDel")
            // }
        //     , response: {
        //         statusCode: 200 //重新规定成功的状态码为 200，table 组件默认为 0
        //   }
            ,
            // success:function(sess){
            //     if(sess==200){
            //         layer.mag("编辑成功",{icon:1});
            //     }else {
            //         layer.mag("编辑失败",{icon:5})
            //     }
            // },
            data:JSON.stringify({
                name:$(".name").val(),
                longitude:$(".longitude").val(),
                latitude:$(".latitude").val(),
                customerUnit:$("#customerUnit").val(),
                linkman:$(".linkman").val(),
                telephone:$(".telephone").val(),
                        remark:$(".remark").val(),
                        isDel:$(".isDel").val()
                        
                    }),
            // async:false,
            dataType:"json",
            // 提示
            // success: function(msg){
            //     if (msg.success){  //成功
            //         layer.msg(msg.msg, { icon: 1, time: 1500 });
            //         // table.reload('tableReload');//数据表格重载
            //         layer.close(index);//关闭弹出层
            //     }else {  //失败
            //         layer.alert(msg.msg, { icon: 2},function () {
            //             // $(".layui-laypage-btn").click();//执行分页刷新当前页
            //             // layer.close(index);
            //             window.location.reload();
            //         });
            //     }
            //     return false
            // }
       })
    //    console.log(data)
        setTimeout(function(){
            // var tableData=new Array();
   
            layer.close(index);
            layer.closeAll("iframe");
            layer.msg("修改成功");

            // window.parent.location.reload();
            // var index = parent.layer.getFrameIndex(window.name);
            // parent.layer.close(index);
        },2000);
        return false;
    })
    //鏍煎紡鍖栨椂闂�
    function filterTime(val){
        if(val < 10){
            return "0" + val;
        }else{
            return val;
        }
    }
    //瀹氭椂鍙戝竷
    var time = new Date();
    var submitTime = time.getFullYear()+'-'+filterTime(time.getMonth()+1)+'-'+filterTime(time.getDate())+' '+filterTime(time.getHours())+':'+filterTime(time.getMinutes())+':'+filterTime(time.getSeconds());

})
// $(document).ready(function(){
//         $("#upa").click(function(){
//             parent.location.reload()//刷新父窗口
//     //         var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
//             parent.layer.close(index);关闭窗口
//         });
//     });
   