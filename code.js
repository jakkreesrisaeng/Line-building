
function sendLineNotify() {

    var form = FormApp.openById('xxxxx'); 
    var token = ['xxxxx'];
     


 
    var form_res = form.getResponses()
    var formResponse = form_res[form_res.length - 1];
    var itemResponses = formResponse.getItemResponses();



    var all_mes = ' รายงานปัญหาอาคาร' 
    var image_id = itemResponses[4].getResponse();
    var IMAGE_URL = 'https://drive.google.com/uc?export=view&id='+ image_id;


    for (var i = 0; i < itemResponses.length; i++) {
      all_mes += '\n' + '\n' + (i+1) + ') ' + itemResponses[i].getItem().getTitle() + ' : ' + itemResponses[i].getResponse();


    }


    var imgThumbnail = IMAGE_URL;
    var imgFullsize =  IMAGE_URL;
    var formData = {
    'message' : all_mes,
    'imageThumbnail': imgThumbnail,
    'imageFullsize' : imgFullsize,
    }

    var options = {
    "method" : "post",
    "payload" : formData,
    "headers" : {"Authorization" : "Bearer " + token}
    };
  
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
