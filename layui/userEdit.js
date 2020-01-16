
layui.use(['form','layer','tree'],function(){
    var form = layui.form,
        tree = layui.tree,
        // element =layui.element,
        // layer = parent.layer === undefined ? layui.layer : top.layer,
        layer=layui.layer,
        $ = layui.jquery;
         

    form.on("submit(addList)",function(){
    
        // console.log(data.field);
        // JSON.stringify(data.field);
        var index = layer.msg('数据提交中请稍后',{icon: 16,time:false,shade:0.8});
            
        $.ajax({
            // headers: {
            //     Accept: "application/json; charset=utf-8",
            //     // ContentType:"application/json"
            // },
            contentType: 'application/json',
            url:'http://10.12.102.11:8888/wlcManage/update',
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
    //    console.log(data)
        setTimeout(function(){
   
            layer.close(index);
            layer.msg("修改成功");
            layer.closeAll("iframe");
            //刷新父元素
            // parent.location.reload();
         
            // window.parent.location.reload();
            // var index = parent.layer.getFrameIndex(window);
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


   