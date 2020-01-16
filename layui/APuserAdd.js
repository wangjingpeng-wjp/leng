// layui.form.render();
layui.use(['form','layer','element','tree','laytpl'],function(){
    var form = layui.form
        element =layui.element
        // layer = parent.layer === undefined ? layui.layer : top.layer,
        ,layer=layui.layer,
        tree=layui.tree,
        laytpl=layui.laytpl,
        $ = layui.jquery;
       
         xmSelect.render({
           
            el: '.listenAgreement', 
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
                        {name: '李四1', value: 2, },
                        {name: '王五1', value: 3, },
                    ]},
                    {name: '奖品', value: -2, children: [
                        {name: '奖品3', value: -3, children: [
                            {name: '苹果3', value: 14,  },
                            {name: '香蕉3', value: 15},
                            {name: '葡萄3', value: 16},
                        ]},
                        {name: '苹果2', value: 4,selected:true },
                        {name: '香蕉2', value: 5},
                        {name: '葡萄2', value: 6},
                    ]},
                ]
            }
            // template:function({item,arr,name,value}){
            //     return name + '<span style="position:absolute;right:10px;color:red">'+value+'</span>'
            // }
       })
      
    // tree.render({
    //     elem:'#listenAgreement',
    //     showLine: false,
    //     // showCheckbox: true,
    //     data:[{
    //         title:'江西',children:[{
    //             title:'南昌',children:[{
    //                 title:'高新区',children:[{title:'街道'}]
    //             }]
    //         }]
    //     },{
    //         title:'陕西',children:[{
    //             title:'西安'
    //         }]
    //     }]
    // })
    //   form.on('select',function(data){
    //       var x=data.elem.getAttribute("id")
    //       console.log(x);
    //   })
    form.on("submit(addUser)",function(data){
        //寮瑰嚭loading
        // console.log(data.field);
        // JSON.stringify(data.field);
        var index = layer.msg('数据提交中请稍后',{icon: 16,time:false,shade:0.8});
        // var formData=data.field.formData;
        // var id=data.field.id,
        //     name=data.field.name,
        //     ipAddres=data.field.ipAddres,
        //     listenPort=data.field.listenPort,
        //     listenAgreement=data.field.listenAgreement,
        //     location=data.field.location,
        //     remark=data.field.remark,
        //     isDel=data.field.isDel;
        // $.post("数据",{
        //     url:"http://10.12.102.11:8888/wlcManage/add"
        //     ,id:data.field.id,
        //     name:data.field.name,
        //     ipAddres:data.field.ipAddres,
        //     listenPort:data.field.listenPort,
        //     listenAgreement:data.field.listenAgreement,
        //     location:data.field.location,
        //     remark:data.field.remark,
        //     isDel:data.field.isDel
        // },function(res){
        //     console.log(res);
        //     if(res.code==200){
        //         data.val()
        //       layer.close(index)
        //     }
        // })
        
        $.ajax({
            // headers: {
            //     Accept: "application/json; charset=utf-8",
            //     // ContentType:"application/json"
            // },
            contentType: 'application/json',
            url:'http://10.12.102.11:8888/apInformation/add',
            type:"post"
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
            data:JSON.stringify({
                groupName:$(".groupName").val(),
                type:$("#type").val(),
                macAddress:$(".macAddress").val(),
                ipAddress:$(".ipAddress").val(),
                serialNumber:$(".serialNumber").val(),
                radiomac:$(".radiomac").val(),
                installationBuilding:$(".installationBuilding").val(),
                installationFloor:$(".installationFloor").val(),
                installationLocation:$(".installationLocation").val(),
                installationTime:$(".installationTime").val(),
                accessController:$("#accessController").val(),
                controllerPort:$(".controllerPort").val(),
                group:$("#group").val(),

                        remark:$(".remark").val(),
                        isDel:$(".isDel").val()
                        
                    }),
            // async:false
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
       console.log(data)
        setTimeout(function(){
            // var tableData=new Array();
   
            layer.msg("添加成功",{icon:1,time:1500});
            layer.closeAll("iframe");
               layer.close(index);
            //鍒锋柊鐖堕〉闈�
            // parent.location.index();
            
        },2000);
        // window.open("智慧上城无线AP.html")
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
 time.getFullYear()+'-'+filterTime(time.getMonth()+1)+'-'+filterTime(time.getDate())+' '+filterTime(time.getHours())+':'+filterTime(time.getMinutes())+':'+filterTime(time.getSeconds());

})