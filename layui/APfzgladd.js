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
           
            el: '.customerUnit', 
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
            
       })
      
   
    form.on("submit(addUser)",function(data){
        var index = layer.msg('数据提交中请稍后',{icon: 16,time:false,shade:0.8});
        
        
        $.ajax({
            // headers: {
            //     Accept: "application/json; charset=utf-8",
            //     // ContentType:"application/json"
            // },
            contentType: 'application/json',
            url:'http://10.12.102.11:8888/apInformation/add',
            type:"post",
            data:JSON.stringify({
                        name:$(".name").val(),
                        longitude:$(".longitude").val(),
                        latitude:$(".latitude").val(),
                        customerUnit:$(".customerUnit").val(),
                        linkman:$(".linkman").val(),
                        telephone:$(".telephone").val(),
                        remark:$(".remark").val(),
                        isDel:$(".isDel").val()
                        
                    }),
            // async:false
            dataType:"json",

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