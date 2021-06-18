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
           
            // SERVICES TAB
            let images = response.images;
            
            let ImagesTable = images.map(row => 
            `
            <tr>
                ${data = new Date(row.Created * 1000)}
                <td>${row.RepoTags}</td>
                <td>${row.Id}</td>
                <td>${(row.Size * 9.537 * 10**-7).toFixed(2)} MB</td>
                <td>${data.toLocaleString()}</td>
                
            </tr>
            `
            ).join("");

            $("#imagesdata").html(ImagesTable);
        },
        error: function(xhr) {
        //Do Something to handle error
        if(confirm('A connection error has occured. Reload page?')){}
        else    window.location.reload(window.stop());
        }
    });
}