     
            function fnLogin(){
               var username = document.getElementById('username').value;
               var password = document.getElementById('password').value;
               alert(username);
               alert(password);

                //alert('login clicked');
            };
            function fnGetCurrentTime(){
                var currenttime = new Date();
              console.log(currenttime);
               // alert('this is my Local time: ' + currenttime);
            }
            function fnTextSend(){
                document.getElementById('samplediv').innerHTML ='replaced another div text';
                var x = document.getElementById('samplediv');
                console.log(x);
             //alert(x);  
            }
     