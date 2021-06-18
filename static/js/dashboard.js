/*Script with time interval to handle dynamic updates of variables-*/
refreshdata();
var intervalId = window.setInterval(function(){
    refreshdata()
    /*Miliseconds interval*/
}, 1000); 
    
    

function refreshdata() {
    $.ajax({
        url: "/data",
        type: "get",
        dataType: "json",
        success: function(response) {
        $("#place_for_data").html(response);
            
            //INFO TAB
            let info = response.info;
            
            $("#systemtime").html(info.SystemTime);
            $("#memtotal").html((info.MemTotal / 1024 / 1024 / 1024).toFixed(2) + " GB");
            $("#name").html(info.Name);
            $("#serverversion").html(info.ServerVersion);
            $("#swarmstate").html(info.Swarm.LocalNodeState);
            $("#warnings").html(info.Warnings);
            $("#operatingsystem").html(info.OperatingSystem);
            $("#driverstatus").html(info.DriverStatus);
        },
        error: function(xhr) {
        //Do Something to handle error
        if(confirm('A connection error has occured. Reload page?')){}
        else    window.location.reload(window.stop()); 
        }
    });
}
