// layui.form.render();
layui.use(['form','layer','element','tree'],function(){
    var form = layui.form
        element =layui.element,
        // layer = parent.layer === undefined ? layui.layer : top.layer,
        layer=layui.layer,
        tree=layui.tree,
        $ = layui.jquery;
       
        //  xmSelect.render({
           
        //     el: '.listenAgreement', 
        //     autoRow: true,
	    //     filterable: true,
        //      tree:{
        //         show:true,
        //         // showFolderIcon: true,
        //         showLine: false,
        //         indent: 20,
        //         expandedKeys:[-1],
        //         lazy:true,
        //         load:function(itme,cb){
        //             setTimeout(function(){
        //                 if(itme.name.endsWith('2')){
        //                     return cb([]);
        //                 }
        //                 cb([
        //                     {name:itme.name+1,value:itme.value+'1',children:[]},
        //                     {name:itme.name+2,value:itme.value+'2',children:[]},

        //                 ])
        //             },500)
        //         }
                
        //      },
        //      height:'auto',
        //     data(){
        //         return [
        //                     {name: '苹果3', value: 14},
        //                     {name: '香蕉3', value: 15},
        //                     {name: '葡萄3', value: 16}, 
        //         ]},
                
            // template:function({item,arr,name,value}){
            //     return name + '<span style="position:absolute;right:10px;color:red">'+value+'</span>'
            // }
    //    })
      
    form.on("submit(addUser)",function(data){
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
            contentType: 'application/json',
            url:'http://10.12.102.11:8888/wlcManage/add',
            type:"post",
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
            data:JSON.stringify({
                     id:$(".id").val(),
                        name:$(".name").val(),
                        ipAddress:$(".ipAddress").val(),
                        listenPort:$(".listenPort").val(),
                        listenAgreement:$("#listenAgreement").val(),
                        location:$(".location").val(),
                        remark:$(".remark").val(),
                        isDel:$(".isDel").val()
                        
                    }),
            dataType:"json",
       })
        setTimeout(function(){
            // var tableData=new Array();
            layer.close(index);
            layer.msg("添加成功",{icon:1,time:1500});
            layer.closeAll("iframe");
            //刷新父元素
            // parent.location.reload();
            
        },2000);
        return false;
        
    })

    //格式化时间
    function filterTime(val){
        if(val < 10){
            return "0" + val;
        }else{
            return val;
        }
    }
    //定时发布
    var time = new Date();
 time.getFullYear()+'-'+filterTime(time.getMonth()+1)+'-'+filterTime(time.getDate())+' '+filterTime(time.getHours())+':'+filterTime(time.getMinutes())+':'+filterTime(time.getSeconds());

})