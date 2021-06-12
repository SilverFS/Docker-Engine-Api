/*Script with time interval to handle dynamic updates of variables-*/
var intervalId = window.setInterval(function(){
    $.ajax({
        url: "/data",
        type: "get",
        dataType: "json",
        success: function(response) {
        $("#place_for_data").html(response);
            //CONTAINERS TAB
            let containers = response.containers;
            
            //Maps the container variable
            let containerTable = containers.map(row => 
            `
            <tr>
                <td>${row.Names}
                <td>${row.Id}</td>
                <td>${row.Image}</td>
                <td>${row.Command}</td>
                <td>${row.Status}</td>
                
            </tr>
            `
            ).join("");
            //Puts variable in html id
            $("#containerdata").html(containerTable);
        },
        error: function(xhr) {
        //Do Something to handle error
        if(confirm('A connection error has occured. Reload page?')){}
        else    window.location.reload(window.stop()); 
        }
    });
/*Miliseconds interval*/
}, 1000); 