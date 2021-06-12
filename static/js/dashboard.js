/*Script with time interval to handle dynamic updates of variables-*/
var intervalId = window.setInterval(function(){
    $.ajax({
        url: "/data",
        type: "get",
        dataType: "json",
        success: function(response) {
        $("#place_for_data").html(response);
           //INFO TAB
           let info = response.info;
            
           //Maps the info variable
           let infoTable = info.map(row =>
            `
            <tr>
                <td>${row.Description.Hostname} / ${row.Spec.Role}</td>
                <td>${row.ID}</td>
                <td>${(row.Description.Resources.MemoryBytes /(1024 ** 3)).toFixed(2)} GB</td>
                <td> <i id="demo" class="fas fa-circle"></i> </td>
                <td>${row.Status.State} / </td>
                <td>${row.Status.Addr}</td>
            </tr>
            `
            ).join("");
            //Puts variable in html id
            $("#systemdata").html(infoTable);    
        },
        error: function(xhr) {
        //Do Something to handle error
        if(confirm('A connection error has occured. Reload page?')){}
        else    window.location.reload(window.stop()); 
        }
    });
/*Miliseconds interval*/
}, 1000); 